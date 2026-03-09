use std::sync::Arc;

use serde::Serialize;
use serde_wasm_bindgen::Serializer;
use summa_core::configs::{ConfigProxy, DirectProxy};
use summa_indexer::Indexer;
use summa_proto::proto;
use wasm_bindgen::prelude::*;

use crate::errors::Error;

/// Hold `Indexer` and wrap it for making WASM-compatible
#[wasm_bindgen]
pub struct WrappedIndexer {
    indexer: Indexer,
}

#[wasm_bindgen]
impl WrappedIndexer {
    #[wasm_bindgen(constructor)]
    pub fn new() -> WrappedIndexer {
        let core_config = summa_core::configs::core::ConfigBuilder::default()
            .doc_store_compress_threads(0)
            .writer_threads(Some(summa_core::configs::core::WriterThreads::SameThread))
            .build()
            .expect("cannot build");
        let core_config = Arc::new(DirectProxy::new(core_config)) as Arc<dyn ConfigProxy<_>>;
        WrappedIndexer {
            indexer: Indexer::new(core_config, std::path::PathBuf::new()),
        }
    }

    /// Add an existing index to the registry
    #[wasm_bindgen]
    pub async fn add(&self, index_name: &str, index_engine_config: JsValue) -> Result<JsValue, JsValue> {
        let index_engine_config: proto::IndexEngineConfig = serde_wasm_bindgen::from_value(index_engine_config)?;
        let serializer = Serializer::new().serialize_maps_as_objects(true).serialize_large_number_types_as_bigints(true);
        let result = self
            .add_internal(index_name, index_engine_config)
            .await
            .map_err(Error::from)?;
        Ok(result.serialize(&serializer)?)
    }

    async fn add_internal(&self, index_name: &str, index_engine_config: proto::IndexEngineConfig) -> summa_core::errors::SummaResult<Option<proto::IndexAttributes>> {
        let index = match &index_engine_config.config {
            Some(proto::index_engine_config::Config::Memory(memory_engine_config)) => {
                let schema = serde_wasm_bindgen::from_value(memory_engine_config.schema.clone().into()).expect("cannot parse schema");
                let index_builder = tantivy::Index::builder().schema(schema);
                summa_core::components::IndexHolder::create_memory_index(index_builder)?
            }
            _ => unimplemented!(),
        };
        let query_parser_config = index_engine_config.query_parser_config.as_ref().cloned().unwrap_or_default();
        let index_holder = summa_core::components::IndexHolder::create_holder(
            self.indexer.core_config.read().await.get(),
            index,
            index_name,
            Arc::new(DirectProxy::new(index_engine_config)),
            None,
            query_parser_config,
        )?;
        let index_attributes = index_holder.index_attributes().cloned();
        self.indexer.index_registry.add(index_holder).await?;
        Ok(index_attributes)
    }

    /// Create a new index
    #[wasm_bindgen]
    pub async fn create_index(&self, create_index_request: JsValue) -> Result<JsValue, JsValue> {
        let create_index_request: proto::CreateIndexRequest = serde_wasm_bindgen::from_value(create_index_request)?;
        let serializer = Serializer::new().serialize_maps_as_objects(true).serialize_large_number_types_as_bigints(true);
        let result = self.indexer.create_index(create_index_request).await.map_err(Error::from)?;
        Ok(result.serialize(&serializer)?)
    }

    /// Index new document
    #[wasm_bindgen]
    pub async fn index_document(&self, index_name: &str, document: &str) -> Result<(), JsValue> {
        self.indexer.index_document(index_name, document.as_bytes()).await.map_err(Error::from)?;
        Ok(())
    }

    /// Remove index from registry
    #[wasm_bindgen]
    pub async fn delete(&self, index_name: &str) {
        self.indexer.delete(index_name).await;
    }

    /// Warm up index
    #[wasm_bindgen]
    pub async fn warmup(&self, index_name: &str) -> Result<(), JsValue> {
        self.indexer.warmup(index_name).await.map_err(Error::from)?;
        Ok(())
    }

    /// Commit pending writes
    #[wasm_bindgen]
    pub async fn commit(&self, index_name: &str) -> Result<(), JsValue> {
        self.indexer.commit(index_name).await.map_err(Error::from)?;
        Ok(())
    }

    /// Vacuum (merge all segments into one) for the named index.
    #[wasm_bindgen]
    pub async fn vacuum(&self, index_name: &str) -> Result<(), JsValue> {
        self.indexer.vacuum(index_name).await.map_err(Error::from)?;
        Ok(())
    }

    /// Get field names for an index
    #[wasm_bindgen]
    pub async fn get_index_field_names(&self, index_name: &str) -> Result<JsValue, JsValue> {
        let names = self.indexer.get_index_field_names(index_name).await.map_err(Error::from)?;
        Ok(serde_wasm_bindgen::to_value(&names)?)
    }

    /// Copy documents from one index to another
    #[wasm_bindgen]
    pub async fn copy_documents(&self, source_index_name: &str, target_index_name: &str, conflict_strategy: JsValue) -> Result<JsValue, JsValue> {
        let conflict_strategy: Option<i32> = serde_wasm_bindgen::from_value(conflict_strategy)?;
        let serializer = Serializer::new().serialize_maps_as_objects(true).serialize_large_number_types_as_bigints(true);
        Ok(self
            .indexer
            .copy_documents(source_index_name, target_index_name, conflict_strategy)
            .await
            .map_err(Error::from)?
            .serialize(&serializer)?)
    }

    /// Create a hotcache for the index and write it into the managed directory.
    ///
    /// Must be called before `export_index_files` so the hotcache is included.
    #[wasm_bindgen]
    pub async fn create_hotcache(&self, index_name: &str) -> Result<(), JsValue> {
        self.indexer.create_hotcache(index_name).await.map_err(Error::from)?;
        Ok(())
    }

    /// Export all files for an index by invoking a callback for each file.
    ///
    /// The callback is called with `(name: string, data: Uint8Array)` for each
    /// file, and with `(null, _)` after all files have been reported.
    #[wasm_bindgen]
    pub async fn export_index_files(&self, index_name: &str, callback: &js_sys::Function) -> Result<(), JsValue> {
        let files = self.indexer.export_index_files(index_name).await.map_err(Error::from)?;
        let this = JsValue::NULL;
        for (path, data) in files {
            let array = js_sys::Uint8Array::from(data.as_slice());
            callback.call2(&this, &JsValue::from_str(&path), &array)?;
        }
        callback.call2(&this, &JsValue::NULL, &JsValue::NULL)?;
        Ok(())
    }
}
