import * as Comlink from "comlink";
import { IndexWriter } from './index-writer'

export const index_writer = new IndexWriter();
Comlink.expose(index_writer);