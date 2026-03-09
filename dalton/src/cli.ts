import { Command } from "commander";
import { extractProjectId, getApiKey, saveApiKey } from "./config.js";
import { renderDocs } from "./docs.js";
import { client, ensureRelayServer, VERSION } from "./relay-client.js";
import { isSkillTopic, readDoc, skillTopics } from "./skill-docs.js";
import { formatError, print, printError, printJson } from "./utils.js";

const program = new Command();

program.name("framer").version(VERSION).description("Framer Server API CLI");

async function readStdin(): Promise<string> {
	const chunks: Buffer[] = [];
	for await (const chunk of process.stdin) {
		chunks.push(chunk);
	}
	return Buffer.concat(chunks).toString("utf-8");
}

// Default command - execute code
program
	.option("-s, --session <id>", "Session ID (required for code execution)")
	.option("-e, --eval <code>", "Code to execute (or pipe via stdin)")
	.action(async (options) => {
		const { session: sessionId, eval: evalCode } = options;

		let code = evalCode;
		if (!code && !process.stdin.isTTY) {
			code = await readStdin();
		}

		if (!code) {
			program.help();
			return;
		}

		if (!sessionId) {
			printError("Error: -s/--session is required.");
			printError(
				"Run `framer session new <projectUrl> <apiKey>` first to get a session ID.",
			);
			process.exit(1);
		}

		try {
			await ensureRelayServer({ logger: { log: print } });

			const result = await client.exec.mutate({
				sessionId: String(sessionId),
				code,
				cwd: process.cwd(),
			});

			for (const line of result.output) {
				print(line);
			}

			if (result.error) {
				printError(`Error: ${result.error}`);
				process.exit(1);
			}
		} catch (err) {
			printError(`Execution failed: ${formatError(err)}`);
			process.exit(1);
		}
	});

// Session commands
const session = program.command("session").description("Manage sessions");

session
	.command("new <projectUrl> [apiKey]")
	.description("Create a new session and print the session ID")
	.action(async (projectUrlArg: string, apiKeyArg?: string) => {
		try {
			const projectId = extractProjectId(projectUrlArg);
			let apiKey = apiKeyArg;

			if (!apiKey) {
				const cached = getApiKey(projectId);
				if (cached) {
					apiKey = cached;
				} else {
					printError("No API key provided and none cached for this project.");
					printError("");
					printError("Usage: framer session new <projectUrl> <apiKey>");
					process.exit(1);
				}
			} else {
				saveApiKey(projectId, apiKey);
			}

			await ensureRelayServer({ logger: { log: print } });

			const result = await client.createSession.mutate({
				projectId,
				apiKey,
			});

			print(result.id);
		} catch (err) {
			printError(`Failed to create session: ${formatError(err)}`);
			process.exit(1);
		}
	});

session
	.command("list")
	.description("List all active sessions")
	.action(async () => {
		try {
			await ensureRelayServer({ logger: { log: print } });

			const sessions = await client.listSessions.query();

			if (sessions.length === 0) {
				print("No active sessions");
				return;
			}

			printJson(sessions);
		} catch (err) {
			printError(`Failed to list sessions: ${formatError(err)}`);
			process.exit(1);
		}
	});

session
	.command("destroy <sessionId>")
	.description("Destroy a session")
	.action(async (sessionId: string) => {
		try {
			await ensureRelayServer({ logger: { log: print } });

			await client.destroySession.mutate({ sessionId });
			print(`Session ${sessionId} destroyed`);
		} catch (err) {
			printError(`Failed to destroy session: ${formatError(err)}`);
			process.exit(1);
		}
	});

// Relay server commands
const relay = program.command("relay").description("Manage the relay server");

relay
	.command("stop")
	.description("Stop the relay server")
	.action(async () => {
		try {
			await client.shutdown.mutate();
			print("Relay server stopped");
		} catch {
			print("Relay server is not running");
		}
	});

relay
	.command("restart")
	.description("Restart the relay server")
	.action(async () => {
		try {
			await client.shutdown.mutate();
			print("Stopped old relay server");
		} catch {
			// Server wasn't running
		}

		await new Promise((resolve) => setTimeout(resolve, 500));
		await ensureRelayServer({ logger: { log: print } });
	});

// Skill command
program
	.command("skill [topic]")
	.description("Output skill documentation")
	.action((topic?: string) => {
		if (!topic) {
			print(readDoc("server-api"));
			print("");
			print(readDoc("all-skills"));
			return;
		}

		if (!isSkillTopic(topic)) {
			const available = ["(no argument)", ...skillTopics];
			printError(`Unknown skill topic: ${topic}`);
			printError(`Available topics: ${available.join(", ")}`);
			process.exit(1);
		}

		print(readDoc(topic));
		print("");
		print(readDoc("all-skills"));
	});

// Docs command
program
	.command("docs [queries...]")
	.description(
		"Look up API documentation. Use: docs, docs ClassName, docs Class.method, or docs TypeName",
	)
	.action((queries: string[]) => {
		const { lines, errors } = renderDocs(queries);
		for (const line of lines) print(line);
		if (errors.length > 0) {
			for (const error of errors) printError(error);
			process.exit(1);
		}
	});

program.parse();
