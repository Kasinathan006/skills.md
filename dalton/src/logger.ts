import fs from "node:fs";
import os from "node:os";
import path from "node:path";

function getLogPath(): string {
	if (process.env.XDG_STATE_HOME) {
		return path.join(process.env.XDG_STATE_HOME, "framer", "relay.log");
	}
	if (process.platform === "win32") {
		return path.join(
			process.env.APPDATA || os.homedir(),
			"framer",
			"relay.log",
		);
	}
	return path.join(os.homedir(), ".local", "state", "framer", "relay.log");
}

const logPath = getLogPath();
let initialized = false;

function ensureLogDir(): void {
	if (initialized) return;
	const dir = path.dirname(logPath);
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}
	initialized = true;
}

export function log(message: string): void {
	ensureLogDir();
	const timestamp = new Date().toISOString();
	fs.appendFileSync(logPath, `${timestamp} ${message}\n`);
}

export function getLogFile(): string {
	return logPath;
}
