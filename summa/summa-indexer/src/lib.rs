use std::collections::HashMap;
use std::path::PathBuf;
use std::sync::Arc;

use summa_core::components::{IndexHolder, IndexRegistry};
use summa_core::configs::{ConfigProxy, DirectProxy};
use summa_core::errors::SummaResult;
use summa_core::proto_traits::Wrapper;
use summa_core::validators;
use summa_proto::proto;
use std::path::Path;
use tantivy::store::ZstdCompressor;
use tantivy::Directory;
use tracing::info;

/// Platform-agnostic indexer that wraps an `IndexRegistry`.
///
/// Both `summa-server` and `summa-indexer-wasm` delegate to this for the
/// shared create / index / commit / copy / delete / warmup operations.
#[derive(Clone)]
pub struct Indexer {
    pub index_registry: IndexRegistry,
    pub core_config: Arc<dyn ConfigProxy<summa_core::configs::core::Config>>,
    pub data_path: PathBuf,
}

impl Indexer {
    pub fn new(
        core_config: Arc<dyn ConfigProxy<summa_core::configs::core::Config>>,
        data_path: PathBuf,
    ) -> Self {
        Indexer {
            index_registry: IndexRegistry::new(&core_config),
            core_config,
            data_path,
        }
    }

    /// Create a new index from a `CreateIndexRequest`.
    ///
    /// Supports both File (behind `fs` feature) and Memory engine types.
    /// For File engines, the `Indexer`'s `data_path` is used as the base
    /// directory; the index is created at `data_path / index_name`.
    pub async fn create_index(
        &self,
        create_index_request: proto::CreateIndexRequest,
    ) -> SummaResult<Option<proto::IndexAttributes>> {
        let schema = validators::parse_schema(&create_index_request.schema)?;

        let mut index_attributes = create_index_request.index_attributes.unwrap_or_default();
        let query_parser_config = create_index_request.query_parser_config;
        let default_fields = query_parser_config
            .as_ref()
            .map(|q| q.default_fields.clone())
            .unwrap_or_default();
        validators::parse_fields(&schema, &default_fields, &[])?;
        validators::parse_fields(&schema, &index_attributes.multi_fields, &[])?;
        validators::parse_fields(&schema, &index_attributes.unique_fields, &[])?;

        if index_attributes.created_at == 0 {
            index_attributes.created_at = summa_core::utils::current_time();
        }

        let index_settings = tantivy::IndexSettings {
            docstore_compression: proto::Compression::try_from(create_index_request.compression)
                .ok()
                .map(|c| Wrapper::from(c).into())
                .unwrap_or(tantivy::store::Compressor::Zstd(ZstdCompressor::default())),
            docstore_blocksize: create_index_request.blocksize.unwrap_or(32768) as usize,
            ..Default::default()
        };
        let index_builder = tantivy::Index::builder()
            .schema(schema.clone())
            .settings(index_settings)
            .index_attributes(index_attributes);

        let (index, index_engine_config) = match create_index_request.index_engine {
            #[cfg(feature = "fs")]
            Some(proto::create_index_request::IndexEngine::File(proto::CreateFileEngineRequest {})) => {
                let index_path = self.data_path.join(&create_index_request.index_name);
                let index = IndexHolder::create_file_index(&index_path, index_builder).await?;
                let index_engine_config = proto::IndexEngineConfig {
                    config: Some(proto::index_engine_config::Config::File(proto::FileEngineConfig {
                        path: index_path.to_string_lossy().to_string(),
                    })),
                    merge_policy: create_index_request.merge_policy,
                    query_parser_config: query_parser_config.clone(),
                };
                (index, index_engine_config)
            }
            Some(proto::create_index_request::IndexEngine::Memory(proto::CreateMemoryEngineRequest {})) => {
                let index = IndexHolder::create_memory_index(index_builder)?;
                let index_engine_config = proto::IndexEngineConfig {
                    config: Some(proto::index_engine_config::Config::Memory(proto::MemoryEngineConfig {
                        schema: serde_yaml::to_string(&schema).expect("cannot serialize"),
                    })),
                    merge_policy: create_index_request.merge_policy,
                    query_parser_config: query_parser_config.clone(),
                };
                (index, index_engine_config)
            }
            _ => {
                return Err(summa_core::errors::ValidationError::EmptyArgument(
                    "unsupported index engine for this platform".to_string(),
                ).into());
            }
        };

        let index_holder = IndexHolder::create_holder(
            self.core_config.read().await.get(),
            index,
            &create_index_request.index_name,
            Arc::new(DirectProxy::new(index_engine_config)),
            None,
            query_parser_config.unwrap_or_default(),
        )?;
        let index_holder = self.index_registry.add(index_holder).await?;
        index_holder.partial_warmup(false, &default_fields).await?;
        Ok(index_holder.index_attributes().cloned())
    }

    /// Index a single document (given as a JSON byte slice).
    pub async fn index_document(&self, index_name: &str, document: &[u8]) -> SummaResult<()> {
        let index_holder = self
            .index_registry
            .get_index_holder_by_name(index_name)
            .await?;
        index_holder.index_document(document, false).await?;
        Ok(())
    }

    /// Commit pending writes for the named index.
    pub async fn commit(&self, index_name: &str) -> SummaResult<()> {
        let index_holder = self
            .index_registry
            .get_index_holder_by_name(index_name)
            .await?;
        index_holder.index_writer_holder()?.write().await.commit()?;
        Ok(())
    }

    /// Remove an index from the registry.
    pub async fn delete(&self, index_name: &str) {
        self.index_registry.delete(index_name).await;
    }

    /// Warm up the named index.
    pub async fn warmup(&self, index_name: &str) -> SummaResult<()> {
        self.index_registry
            .get_index_holder_by_name(index_name)
            .await?
            .partial_warmup(false, &[] as &[&str; 0])
            .await?;
        Ok(())
    }

    /// Vacuum (merge all segments into one) for the named index.
    pub async fn vacuum(&self, index_name: &str) -> SummaResult<()> {
        let index_holder = self
            .index_registry
            .get_index_holder_by_name(index_name)
            .await?;
        index_holder.index_writer_holder()?.read().await.vacuum(None, vec![])?;
        Ok(())
    }

    /// Copy all documents from one index to another.
    pub async fn copy_documents(
        &self,
        source_index_name: &str,
        target_index_name: &str,
        conflict_strategy: Option<i32>,
    ) -> SummaResult<proto::CopyDocumentsResponse> {
        let target_index_holder = self
            .index_registry
            .get_index_holder_by_name(target_index_name)
            .await?;
        let target_index_writer_holder = target_index_holder.index_writer_holder()?.clone();
        let target_index_writer = target_index_writer_holder.read().await;
        let conflict_strategy = conflict_strategy
            .and_then(|cs| proto::ConflictStrategy::try_from(cs).ok())
            .unwrap_or_else(|| target_index_holder.conflict_strategy());

        let source_index_holder = self
            .index_registry
            .get_index_holder_by_name(source_index_name)
            .await?;
        let index_reader = source_index_holder.index_reader();
        index_reader.reload()?;
        let searcher = index_reader.searcher();
        let mut documents = 0u32;
        for segment_reader in searcher.segment_readers() {
            let store_reader = segment_reader
                .get_store_reader(1)
                .map_err(|e| tantivy::TantivyError::InternalError(format!("store reader error: {e}")))?;
            for document in store_reader.iter(segment_reader.alive_bitset()) {
                let document = document
                    .map_err(|e| tantivy::TantivyError::InternalError(format!("store read error: {e}")))?;
                target_index_writer.index_document(document, conflict_strategy)?;
                documents += 1;
            }
        }
        info!(
            action = "copy_documents",
            source = source_index_name,
            target = target_index_name,
            documents = documents
        );
        Ok(proto::CopyDocumentsResponse {
            elapsed_secs: 0.0,
            copied_documents: documents,
        })
    }

    /// Get the field names for an index.
    pub async fn get_index_field_names(&self, index_name: &str) -> SummaResult<Vec<String>> {
        let index_holder = self
            .index_registry
            .get_index_holder_by_name(index_name)
            .await?;
        Ok(index_holder
            .schema()
            .fields()
            .map(|(_, field_entry)| field_entry.name().to_string())
            .collect())
    }

    /// Create a hotcache for the index and write it into the managed directory.
    ///
    /// The file is named `hotcache.{opstamp}.bin` so that `open_remote_index`
    /// can locate it, and it will be included by `export_index_files`.
    pub async fn create_hotcache(&self, index_name: &str) -> SummaResult<()> {
        let index_holder = self
            .index_registry
            .get_index_holder_by_name(index_name)
            .await?;
        let index = index_holder.index();
        let managed_dir = index.directory();
        let underlying = managed_dir
            .underlying_directory()
            .expect("hotcache requires a directory with an underlying directory (e.g. Memory engine)")
            .box_clone();
        let hotcache_bytes = summa_core::directories::create_hotcache(underlying)?;
        let opstamp = index.load_metas()?.opstamp;
        managed_dir.atomic_write(Path::new(&format!("hotcache.{}.bin", opstamp)), &hotcache_bytes)?;
        Ok(())
    }

    /// Export all files for an index as a map from file path to raw bytes.
    pub async fn export_index_files(&self, index_name: &str) -> SummaResult<HashMap<String, Vec<u8>>> {
        let index_holder = self
            .index_registry
            .get_index_holder_by_name(index_name)
            .await?;
        let index = index_holder.index();
        let managed_dir = index.directory();
        let underlying = managed_dir
            .underlying_directory()
            .expect("export requires a directory with an underlying directory (e.g. Memory engine)");

        let managed_files = managed_dir.list_managed_files();
        let mut result = HashMap::new();

        for path in &managed_files {
            match underlying.atomic_read(path) {
                Ok(data) => {
                    result.insert(path.to_string_lossy().to_string(), data);
                }
                Err(tantivy::directory::error::OpenReadError::FileDoesNotExist(_)) => {
                    // File may have been garbage collected, skip
                }
                Err(e) => {
                    return Err(anyhow::anyhow!("failed to read {}: {e}", path.display()).into());
                }
            }
        }

        // Also include meta.json and .managed.json if not already in the managed set
        // FIXME: See list_index_files in hot_cache_directory.rs
        let meta_path = std::path::Path::new("meta.json");
        if !result.contains_key("meta.json") {
            if let Ok(data) = underlying.atomic_read(meta_path) {
                result.insert("meta.json".to_string(), data);
            }
        }
        let managed_path = std::path::Path::new(".managed.json");
        if !result.contains_key(".managed.json") {
            if let Ok(data) = underlying.atomic_read(managed_path) {
                result.insert(".managed.json".to_string(), data);
            }
        }

        Ok(result)
    }
}
