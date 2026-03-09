import init, {setup_logging, WrappedIndexer} from "../pkg/summa_indexer_wasm";

import {IndexAttributes, IndexEngineConfig, CopyDocumentsResponse, CreateIndexRequest} from "./grpc-web/index_service";
export type { CreateIndexRequest }

export interface IIndexWriter {
  add(index_name: string, index_engine_config: IndexEngineConfig): Promise<IndexAttributes>;
  delete(index_name: string): Promise<void>;
  warmup(index_name: string): Promise<void>;
  index_document(index_name: string, document: string): Promise<void>;
  commit(index_name: string): Promise<void>;
  vacuum(index_name: string): Promise<void>;
  get_index_field_names(index_name: string): Promise<string[]>;

  create_index(create_index_request: CreateIndexRequest): Promise<IndexAttributes>;
  copy_documents(source_index_name: string, target_index_name: string, conflict_strategy?: number): Promise<CopyDocumentsResponse>;
  export_index_files(index_name: string, callback: (name: string | null, data: Uint8Array | null) => void): Promise<void>;
  create_hotcache(index_name: string): Promise<void>;
}

export type IndexWriterOptions = {
  logging_level?: string
}

export const default_options: IndexWriterOptions = {
  logging_level: "info",
}

export class IndexWriter implements IIndexWriter {
  writer?: WrappedIndexer;

  async setup(
      init_url: string,
      options: IndexWriterOptions = default_options,
  ) {
    let actual_options = Object.assign({}, default_options, options);
    await init({ module_or_path: init_url });
    setup_logging(actual_options.logging_level!);
    this.writer = new WrappedIndexer();
  }

  async add(index_name: string, index_engine_config: IndexEngineConfig): Promise<IndexAttributes> {
    return await this.writer!.add(index_name, index_engine_config);
  }
  async create_index(create_index_request: CreateIndexRequest): Promise<IndexAttributes> {
    return await this.writer!.create_index(create_index_request);
  }
  async copy_documents(source_index_name: string, target_index_name: string, conflict_strategy?: number): Promise<CopyDocumentsResponse> {
    return await this.writer!.copy_documents(source_index_name, target_index_name, conflict_strategy ?? null);
  }
  async delete(index_name: string) {
    return await this.writer!.delete(index_name)
  }
  async warmup(index_name: string) {
    return await this.writer!.warmup(index_name);
  }
  async index_document(index_name: string, document: string) {
    return await this.writer!.index_document(index_name, document)
  }
  async commit(index_name: string) {
    return await this.writer!.commit(index_name)
  }
  async vacuum(index_name: string) {
    return await this.writer!.vacuum(index_name)
  }
  async get_index_field_names(index_name: string): Promise<string[]> {
    return await this.writer!.get_index_field_names(index_name);
  }
  async export_index_files(index_name: string, callback: (name: string | null, data: Uint8Array | null) => void) {
    return await this.writer!.export_index_files(index_name, callback);
  }
  async create_hotcache(index_name: string) {
    return await this.writer!.create_hotcache(index_name);
  }
}
