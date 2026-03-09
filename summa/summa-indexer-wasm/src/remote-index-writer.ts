import * as Comlink from "comlink";
import { IndexWriter, IIndexWriter, IndexWriterOptions } from "./index-writer";
import { CreateIndexRequest } from "./index-writer";
import { CopyDocumentsResponse, IndexAttributes, IndexEngineConfig } from "./grpc-web/index_service";

export class RemoteIndexWriter implements IIndexWriter {
    init_guard: Promise<void>;
    index_writer: Comlink.Remote<IndexWriter>;

    constructor(worker_url: URL, wasm_url: URL, options: IndexWriterOptions) {
        this.index_writer = Comlink.wrap<IndexWriter>(
            new Worker(
                worker_url,
                { type: "module" }
            )
        );
        this.init_guard = this.setup(wasm_url, options);
    }
    create_index(create_index_request: CreateIndexRequest): Promise<IndexAttributes> {
        return this.index_writer.create_index(create_index_request)
    }
    copy_documents(source_index_name: string, target_index_name: string, conflict_strategy?: number): Promise<CopyDocumentsResponse> {
        return this.index_writer.copy_documents(source_index_name, target_index_name, conflict_strategy)
    }

    add(index_name: string, index_engine_config: IndexEngineConfig): Promise<IndexAttributes> {
        return this.index_writer.add(index_name, index_engine_config);
    }

    delete(index_name: string): Promise<void> {
        return this.index_writer.delete(index_name);
    }

    warmup(index_name: string): Promise<void> {
        return this.index_writer.warmup(index_name);
    }

    index_document(index_name: string, document: string): Promise<void> {
        return this.index_writer.index_document(index_name, document)
    }

    commit(index_name: string): Promise<void> {
        return this.index_writer.commit(index_name);
    }

    get_index_field_names(index_name: string): Promise<string[]> {
        return this.index_writer.get_index_field_names(index_name);
    }

    export_index_files(index_name: string, callback: (name: string | null, data: Uint8Array | null) => void): Promise<void> {
        return this.index_writer.export_index_files(index_name, callback);
    }

    create_hotcache(index_name: string): Promise<void> {
        return this.index_writer.create_hotcache(index_name);
    }

    vacuum(index_name: string): Promise<void> {
        return this.index_writer.vacuum(index_name)
    }

    async setup(
        wasm_url: URL,
        options: IndexWriterOptions,
    ) {
        return await this.index_writer.setup(
            wasm_url.href,
            options,
        );
    }
}
