import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createTRPCClient, httpLink } from "@trpc/client";
import type { AppRouter } from "./router.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

declare const __VERSION__: string;
export const VERSION =
	typeof __VERSION__ !== "undefined" ? __VERSION__ : "0.0.0";

export const RELAY_PORT = Number(process.env.FRAMER_CLI_PORT) || 19988;

export const client = createTRPCClient<AppRouter>({
	links: [
		httpLink({
			url: `http://127.0.0.1:${RELAY_PORT}`,
		}),
	],
});

export async function getRelayServerVersion(): Promise<string | null> {
	try {
		const { version } = await client.version.query();
		return version;
	} catch {
		return null;
	}
}

function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function compareVersions(v1: string, v2: string): number {
	const parts1 = v1.split(".").map(Number);
	const parts2 = v2.split(".").map(Number);
	const len = Math.max(parts1.length, parts2.length);

	for (let i = 0; i < len; i++) {
		const p1 = parts1[i] || 0;
		const p2 = parts2[i] || 0;
		if (p1 !== p2) {
			return p1 - p2;
		}
	}
	return 0;
}

export interface EnsureRelayServerOptions {
	logger?: { log: (message: string) => void };
	restartOnVersionMismatch?: boolean;
}

export async function ensureRelayServer(
	options: EnsureRelayServerOptions = {},
): Promise<void> {
	const { logger, restartOnVersionMismatch = true } = options;
	const serverVersion = await getRelayServerVersion();

	if (serverVersion === VERSION) {
		return;
	}

	// Don't restart if server version is higher than our version
	if (serverVersion !== null && compareVersions(serverVersion, VERSION) > 0) {
		return;
	}

	if (serverVersion !== null) {
		if (restartOnVersionMismatch) {
			logger?.log(
				`Relay server version mismatch (server: ${serverVersion}, client: ${VERSION}), restarting...`,
			);
			try {
				await client.shutdown.mutate();
				await sleep(500);
			} catch {
				// Server might not support shutdown, continue anyway
			}
		} else {
			return;
		}
	} else {
		logger?.log("Relay server not running, starting it...");
	}

	// Detect if we're running from source (.ts) or compiled (.js)
	const isRunningFromSource = __filename.endsWith(".ts");
	const scriptPath = isRunningFromSource
		? path.resolve(__dirname, "./start-relay-server.ts")
		: path.resolve(__dirname, "./start-relay-server.js");

	const serverProcess = spawn(
		isRunningFromSource ? "tsx" : process.execPath,
		[scriptPath],
		{
			detached: true,
			stdio: "ignore",
			env: process.env,
		},
	);

	serverProcess.unref();

	// Wait for server to be ready
	for (let i = 0; i < 10; i++) {
		await sleep(500);
		const newVersion = await getRelayServerVersion();
		if (newVersion) {
			logger?.log("Relay server started successfully");
			return;
		}
	}

	throw new Error("Failed to start relay server after 5 seconds");
}
