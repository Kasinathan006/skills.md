use std::io::Write as _;
use std::path::{Path, PathBuf};

use clap::{Parser, Subcommand};
use tantivy::directory::MmapDirectory;
use tantivy::indexer::merge_filtered_segments;
use tantivy::{Directory, Index, IndexMeta, IndexWriter, TantivyDocument};

#[derive(Parser)]
#[command(name = "summa-cli", about = "Summa index management CLI")]
struct Cli {
    #[command(subcommand)]
    command: Command,
}

#[derive(Subcommand)]
enum Command {
    /// Garbage-collect unused files from an index
    Gc {
        /// Path to the index directory
        path: PathBuf,
    },
    /// Merge multiple indexes into a new one
    Merge {
        /// Name (path) for the new merged index
        #[arg(long)]
        name: PathBuf,
        /// Paths to the indexes to merge
        #[arg(required = true)]
        paths: Vec<PathBuf>,
    },
    /// Vacuum an index — merge all segments into one and clean up
    Vacuum {
        /// Path to the index directory
        path: PathBuf,
    },
}

fn gc(path: &Path) -> anyhow::Result<()> {
    let index = Index::open_in_dir(path)?;
    let writer: IndexWriter<TantivyDocument> = index.writer_with_num_threads(1, 50_000_000)?;
    let result = writer.garbage_collect_files().wait()?;
    eprintln!(
        "GC complete: deleted {} files",
        result.deleted_files.len()
    );
    for f in &result.deleted_files {
        eprintln!("  deleted: {}", f.display());
    }
    drop(writer);
    Ok(())
}

fn merge(name: &Path, paths: &[PathBuf]) -> anyhow::Result<()> {
    if paths.is_empty() {
        anyhow::bail!("no index paths provided");
    }

    // Open all source indexes
    let indexes: Vec<Index> = paths
        .iter()
        .map(|p| Index::open_in_dir(p))
        .collect::<Result<_, _>>()?;

    // Collect all segments from all source indexes
    let mut all_segments = Vec::new();
    for index in &indexes {
        let segments = index.searchable_segments()?;
        eprintln!(
            "Index {:?}: {} segments, {} total docs",
            index.directory().real_directory().to_owned(),
            segments.len(),
            segments.iter().map(|s| s.meta().num_docs() as u64).sum::<u64>(),
        );
        all_segments.extend(segments);
    }

    if all_segments.is_empty() {
        anyhow::bail!("no segments found in any of the source indexes");
    }

    eprintln!(
        "Merging {} segments into {:?}...",
        all_segments.len(),
        name
    );

    // Use settings from the first index
    let settings = indexes[0].settings().clone();

    // Create the output directory
    std::fs::create_dir_all(name)?;
    let output_dir = MmapDirectory::open(name)?;

    let no_filters = all_segments.iter().map(|_| None).collect();
    let merged_index = merge_filtered_segments(
        &all_segments,
        settings,
        no_filters,
        output_dir.clone(),
    )?;

    // Write meta.json into the output directory
    let merged_metas = merged_index.searchable_segment_metas()?;
    let source_meta = indexes[0].load_metas()?;
    let meta = IndexMeta {
        segments: merged_metas,
        schema: indexes[0].schema(),
        index_settings: merged_index.settings().clone(),
        opstamp: 0,
        payload: None,
        index_attributes: source_meta.index_attributes,
    };
    let mut buffer = serde_json::to_vec_pretty(&meta)?;
    writeln!(&mut buffer)?;
    output_dir.atomic_write(Path::new("meta.json"), &buffer)?;

    // Verify by reopening
    let final_index = Index::open_in_dir(name)?;
    let final_segments = final_index.searchable_segment_metas()?;
    let total_docs: u32 = final_segments.iter().map(|s| s.num_docs()).sum();
    eprintln!(
        "Merge complete: {} segment(s), {} docs in {:?}",
        final_segments.len(),
        total_docs,
        name
    );

    Ok(())
}

fn vacuum(path: &Path) -> anyhow::Result<()> {
    let index = Index::open_in_dir(path)?;
    let segments = index.searchable_segments()?;
    if segments.is_empty() {
        eprintln!("No segments to vacuum");
        return Ok(());
    }

    let segment_ids: Vec<_> = segments.iter().map(|s| s.id()).collect();
    let total_docs: u32 = segments.iter().map(|s| s.meta().num_docs()).sum();
    eprintln!(
        "Vacuuming {} segments ({} docs) in {:?}...",
        segments.len(),
        total_docs,
        path
    );

    let writer: IndexWriter<TantivyDocument> = index.writer_with_num_threads(1, 50_000_000)?;
    writer.merge(&segment_ids).wait()?;
    let gc_result = writer.garbage_collect_files().wait()?;
    drop(writer);

    let final_segments = index.searchable_segment_metas()?;
    let final_docs: u32 = final_segments.iter().map(|s| s.num_docs()).sum();
    eprintln!(
        "Vacuum complete: {} -> {} segment(s), {} docs, {} files deleted",
        segment_ids.len(),
        final_segments.len(),
        final_docs,
        gc_result.deleted_files.len()
    );
    Ok(())
}

fn main() -> anyhow::Result<()> {
    let cli = Cli::parse();
    match &cli.command {
        Command::Gc { path } => gc(path),
        Command::Merge { name, paths } => merge(name, paths),
        Command::Vacuum { path } => vacuum(path),
    }
}
