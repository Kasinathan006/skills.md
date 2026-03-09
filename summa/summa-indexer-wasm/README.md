# summa-indexer-wasm

WASM-module for building Summa indices inside browser or Node.js.

## Writer threading

WASM doesn't support spawning threads, so the indexer uses `WriterThreads::SameThread`
which backs onto tantivy's `SingleSegmentIndexWriter`. This means:

- **No deletions** – `delete_by_query` / `delete_by_term` are no-ops (return 0).
  The indexer is designed for building fresh indices, not updating existing ones.
- **No merges** – `merge_with_attributes` is a no-op. Each commit produces a single segment.
- **Rollback** discards uncommitted documents by recreating the writer.

If you need deletion or merge support, use the native `summa-server` with `WriterThreads::N(1)`.

## Documentation

- [Full guide on github.io](https://izihawa.github.io/summa/guides/ipfs-wasm-guide) explaining how to create index, push it to IPFS and use this module for searching
- [JS API](https://izihawa.github.io/summa/apis/js-api) for API references
- [How to Use Example](https://github.com/izihawa/earth-times) for fast start-up
