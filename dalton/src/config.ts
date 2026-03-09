import fs from "node:fs";
import os from "node:os";
import path from "node:path";

function getConfigDir(): string {
	// Use XDG_CONFIG_HOME if set, otherwise ~/.config on Unix, %APPDATA% on Windows
	if (process.env.XDG_CONFIG_HOME) {
		return path.join(process.env.XDG_CONFIG_HOME, "framer");
	}
	if (process.platform === "win32") {
		return path.join(process.env.APPDATA || os.homedir(), "framer");
	}
	return path.join(os.homedir(), ".config", "framer");
}

function getCredentialsPath(): string {
	return path.join(getConfigDir(), "credentials.json");
}

interface Credentials {
	[projectId: string]: string;
}

function readCredentials(): Credentials {
	const credPath = getCredentialsPath();
	try {
		if (fs.existsSync(credPath)) {
			return JSON.parse(fs.readFileSync(credPath, "utf-8"));
		}
	} catch {
		// Ignore read errors, return empty
	}
	return {};
}

function writeCredentials(creds: Credentials): void {
	const credPath = getCredentialsPath();
	const configDir = getConfigDir();

	// Ensure config directory exists
	if (!fs.existsSync(configDir)) {
		fs.mkdirSync(configDir, { recursive: true, mode: 0o700 });
	}

	// Write with restricted permissions (owner read/write only)
	fs.writeFileSync(credPath, JSON.stringify(creds, null, "\t"), {
		mode: 0o600,
	});
}

/** Extract project ID from a Framer project URL or return as-is if already an ID
 * e.g., "https://framer.com/projects/Asirox-copy--iZuj7ckK08dqHwgH0GtT-iInDP?node=xxx"
 * returns "iZuj7ckK08dqHwgH0GtT"
 */
export function extractProjectId(input: string): string {
	// Already a project ID (alphanumeric only)
	if (/^[a-zA-Z0-9]+$/.test(input)) {
		return input;
	}

	// Extract from URL: /projects/name--projectId-suffix
	const match = input.match(/\/projects\/[^/]+--([a-zA-Z0-9]+)/);
	if (match) {
		return match[1];
	}

	// Fallback: return as-is
	return input;
}

/** Get cached API key for a project ID */
export function getApiKey(projectId: string): string | null {
	const creds = readCredentials();
	return creds[projectId] || null;
}

/** Save API key for a project ID */
export function saveApiKey(projectId: string, apiKey: string): void {
	const creds = readCredentials();
	creds[projectId] = apiKey;
	writeCredentials(creds);
}

/** Get the config directory path (for display) */
export function getConfigPath(): string {
	return getCredentialsPath();
}
