import crypto from "node:crypto";
import { createRequire } from "node:module";
import os from "node:os";
import * as vm from "node:vm";
import type { Framer } from "framer-api";
import { isConnectionError } from "./connection-errors.js";
import { log } from "./logger.js";
import { ScopedFS } from "./scoped-fs.js";
import type { Session } from "./session-manager.js";

const EXECUTION_TIMEOUT = 10 * 60 * 1000; // 10 minutes

const baseRequire = createRequire(import.meta.url);

// Modules allowed in the sandbox
const ALLOWED_MODULES = new Set([
	"path",
	"node:path",
	"url",
	"node:url",
	"fs",
	"node:fs",
	"fs/promises",
	"node:fs/promises",
	"crypto",
	"node:crypto",
	"buffer",
	"node:buffer",
	"util",
	"node:util",
	"os",
	"node:os",
]);

function createSandboxedRequire(scopedFs: ScopedFS): NodeRequire {
	const sandboxedRequire = ((id: string) => {
		if (!ALLOWED_MODULES.has(id)) {
			const error = new Error(
				`Module "${id}" is not allowed. Allowed: ${[...ALLOWED_MODULES].filter((m) => !m.startsWith("node:")).join(", ")}`,
			);
			error.name = "ModuleNotAllowedError";
			throw error;
		}
		// Return scoped fs for fs modules
		if (id === "fs" || id === "node:fs") {
			return scopedFs;
		}
		if (id === "fs/promises" || id === "node:fs/promises") {
			return scopedFs.promises;
		}
		return baseRequire(id);
	}) as NodeRequire;

	sandboxedRequire.resolve = baseRequire.resolve;
	sandboxedRequire.cache = baseRequire.cache;
	sandboxedRequire.extensions = baseRequire.extensions;
	sandboxedRequire.main = baseRequire.main;

	return sandboxedRequire;
}

async function sandboxedImport(
	scopedFs: ScopedFS,
	specifier: string,
): Promise<unknown> {
	if (!ALLOWED_MODULES.has(specifier)) {
		const error = new Error(
			`Module "${specifier}" is not allowed. Allowed: ${[...ALLOWED_MODULES].filter((m) => !m.startsWith("node:")).join(", ")}`,
		);
		error.name = "ModuleNotAllowedError";
		throw error;
	}
	// Return scoped fs for fs modules
	if (specifier === "fs" || specifier === "node:fs") {
		return scopedFs;
	}
	if (specifier === "fs/promises" || specifier === "node:fs/promises") {
		return scopedFs.promises;
	}
	return import(specifier);
}

export interface ExecuteOptions {
	cwd?: string;
}

export interface ExecuteResult {
	output: string[];
	error?: string;
}

export async function execute(
	session: Session,
	framer: Framer,
	code: string,
	options: ExecuteOptions = {},
): Promise<ExecuteResult> {
	const { cwd } = options;

	const output: string[] = [];

	const customConsole = {
		log: (...args: unknown[]) => {
			output.push(args.map((arg) => formatValue(arg)).join(" "));
		},
		error: (...args: unknown[]) => {
			output.push(`[ERROR] ${args.map((arg) => formatValue(arg)).join(" ")}`);
		},
		warn: (...args: unknown[]) => {
			output.push(`[WARN] ${args.map((arg) => formatValue(arg)).join(" ")}`);
		},
		info: (...args: unknown[]) => {
			output.push(args.map((arg) => formatValue(arg)).join(" "));
		},
	};

	// Use client's cwd if provided, otherwise daemon's cwd
	const scopedFs = cwd
		? new ScopedFS([cwd, "/tmp", os.tmpdir()])
		: new ScopedFS();
	const sandboxedRequire = createSandboxedRequire(scopedFs);

	const vmContextObj = {
		// Framer API
		framer,
		state: session.state,

		// Console
		console: customConsole,

		// Module system (sandboxed)
		require: sandboxedRequire,
		import: (specifier: string) => sandboxedImport(scopedFs, specifier),

		// Timers
		setTimeout,
		clearTimeout,
		setInterval,
		clearInterval,

		// Fetch & network
		fetch,

		// Common globals
		Buffer,
		URL,
		URLSearchParams,
		TextEncoder,
		TextDecoder,
		crypto,
		AbortController,
		AbortSignal,
		structuredClone,
	};

	const vmContext = vm.createContext(vmContextObj);
	const wrappedCode = `(async () => { ${code} })()`;
	let timeoutId: ReturnType<typeof setTimeout> | undefined;

	try {
		const script = new vm.Script(wrappedCode, {
			filename: "framer-exec.js",
		});

		const resultPromise = script.runInContext(vmContext, {
			timeout: 5000,
		});

		const result = await Promise.race([
			resultPromise,
			new Promise<never>((_, reject) => {
				timeoutId = setTimeout(
					() =>
						reject(
							new Error(`Execution timed out after ${EXECUTION_TIMEOUT}ms`),
						),
					EXECUTION_TIMEOUT,
				);
			}),
		]);

		if (result !== undefined) {
			output.push(formatValue(result));
		}

		return { output };
	} catch (err) {
		const errorMessage = err instanceof Error ? err.message : String(err);

		return {
			output,
			error: errorMessage,
		};
	} finally {
		if (timeoutId) clearTimeout(timeoutId);
	}
}

/**
 * Execute code in a session, automatically reconnecting and retrying once
 * if the first attempt fails with a connection error.
 */
export async function executeWithReconnect(
	session: Session,
	framer: Framer,
	code: string,
	options: ExecuteOptions,
	reconnect: () => Promise<Framer | null>,
): Promise<ExecuteResult> {
	const result = await tryExecute(session, framer, code, options);

	if (!result.error || !isConnectionError(result.error)) {
		return result;
	}

	log(
		`reconnect session=${session.id} project=${session.projectId} reason="${result.error}"`,
	);

	const newFramer = await reconnect();
	if (!newFramer) {
		log(
			`reconnect.failed session=${session.id} error="no connection returned"`,
		);
		return {
			output: [],
			error: "Connection lost and failed to reconnect",
		};
	}

	log(`reconnect.success session=${session.id}`);

	return tryExecute(session, newFramer, code, options);
}

async function tryExecute(
	session: Session,
	framer: Framer,
	code: string,
	options: ExecuteOptions,
): Promise<ExecuteResult> {
	try {
		return await execute(session, framer, code, options);
	} catch (err) {
		const error = err instanceof Error ? err.message : String(err);
		return { output: [], error };
	}
}

function formatValue(value: unknown): string {
	if (value === null) return "null";
	if (value === undefined) return "undefined";
	if (typeof value === "string") return value;
	if (typeof value === "number" || typeof value === "boolean")
		return String(value);
	if (typeof value === "function")
		return `[Function: ${value.name || "anonymous"}]`;
	if (value instanceof Error) return value.message;
	if (value instanceof Date) return value.toISOString();
	if (value instanceof Map) return `Map(${value.size})`;
	if (value instanceof Set) return `Set(${value.size})`;
	if (Buffer.isBuffer(value)) return `Buffer(${value.length})`;

	try {
		return JSON.stringify(value, null, 2);
	} catch {
		return String(value);
	}
}
