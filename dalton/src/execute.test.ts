import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import type { Framer } from "framer-api";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { execute, executeWithReconnect } from "./execute.js";
import type { Session } from "./session-manager.js";

vi.mock("./logger.js", () => ({
	log: vi.fn(),
}));

function createSession(overrides?: Partial<Session>): Session {
	return {
		id: "1",
		projectId: "proj1",
		apiKey: "key1",
		state: {},
		...overrides,
	};
}

const mockFramer = {} as Framer;

describe("executor", () => {
	describe("console", () => {
		it("captures console.log output", async () => {
			const session = createSession();
			const result = await execute(session, mockFramer, 'console.log("hello")');

			expect(result.output).toEqual(["hello"]);
			expect(result.error).toBeUndefined();
		});

		it("captures console.error with prefix", async () => {
			const session = createSession();
			const result = await execute(session, mockFramer, 'console.error("bad")');

			expect(result.output).toEqual(["[ERROR] bad"]);
		});

		it("captures console.warn with prefix", async () => {
			const session = createSession();
			const result = await execute(
				session,
				mockFramer,
				'console.warn("careful")',
			);

			expect(result.output).toEqual(["[WARN] careful"]);
		});

		it("captures multiple log calls", async () => {
			const session = createSession();
			const result = await execute(
				session,
				mockFramer,
				'console.log("a"); console.log("b"); console.log("c")',
			);

			expect(result.output).toEqual(["a", "b", "c"]);
		});

		it("formats objects as JSON", async () => {
			const session = createSession();
			const result = await execute(
				session,
				mockFramer,
				"console.log({ x: 1, y: 2 })",
			);

			expect(JSON.parse(result.output[0])).toEqual({ x: 1, y: 2 });
		});
	});

	describe("state", () => {
		it("can read and write state", async () => {
			const session = createSession();
			const result = await execute(
				session,
				mockFramer,
				"state.count = 42; console.log(state.count)",
			);

			expect(result.output).toEqual(["42"]);
		});

		it("persists state across executions", async () => {
			const session = createSession();

			await execute(session, mockFramer, 'state.name = "alice"');

			const result = await execute(
				session,
				mockFramer,
				"console.log(state.name)",
			);

			expect(result.output).toEqual(["alice"]);
		});

		it("persists complex state across executions", async () => {
			const session = createSession();

			await execute(
				session,
				mockFramer,
				"state.items = []; state.items.push(1); state.items.push(2)",
			);

			const result = await execute(
				session,
				mockFramer,
				"state.items.push(3); console.log(state.items.length)",
			);

			expect(result.output).toEqual(["3"]);
		});

		it("isolates state between sessions", async () => {
			const session1 = createSession({ id: "1" });
			const session2 = createSession({ id: "2" });

			await execute(session1, mockFramer, 'state.who = "session1"');
			await execute(session2, mockFramer, 'state.who = "session2"');

			const r1 = await execute(session1, mockFramer, "console.log(state.who)");
			const r2 = await execute(session2, mockFramer, "console.log(state.who)");

			expect(r1.output).toEqual(["session1"]);
			expect(r2.output).toEqual(["session2"]);
		});
	});

	describe("globals", () => {
		it("exposes the framer connection", async () => {
			const framer = { testMarker: "present" } as unknown as Framer;
			const session = createSession();
			const result = await execute(
				session,
				framer,
				"console.log(framer.testMarker)",
			);

			expect(result.output).toEqual(["present"]);
		});

		it("exposes Buffer", async () => {
			const session = createSession();
			const result = await execute(
				session,
				mockFramer,
				'console.log(Buffer.from("hi").toString("hex"))',
			);

			expect(result.output).toEqual(["6869"]);
		});

		it("exposes URL", async () => {
			const session = createSession();
			const result = await execute(
				session,
				mockFramer,
				'const u = new URL("https://example.com/path"); console.log(u.pathname)',
			);

			expect(result.output).toEqual(["/path"]);
		});

		it("exposes crypto", async () => {
			const session = createSession();
			const result = await execute(
				session,
				mockFramer,
				"console.log(typeof crypto.randomUUID)",
			);

			expect(result.output).toEqual(["function"]);
		});

		it("exposes setTimeout", async () => {
			const session = createSession();
			const result = await execute(
				session,
				mockFramer,
				'await new Promise(r => setTimeout(r, 10)); console.log("done")',
			);

			expect(result.output).toEqual(["done"]);
		});

		it("exposes fetch", async () => {
			const session = createSession();
			const result = await execute(
				session,
				mockFramer,
				"console.log(typeof fetch)",
			);

			expect(result.output).toEqual(["function"]);
		});
	});

	describe("require", () => {
		it("allows requiring allowed modules", async () => {
			const session = createSession();
			const result = await execute(
				session,
				mockFramer,
				'const path = require("path"); console.log(path.join("a", "b"))',
			);

			expect(result.output).toEqual([path.join("a", "b")]);
		});

		it("allows requiring with node: prefix", async () => {
			const session = createSession();
			const result = await execute(
				session,
				mockFramer,
				'const os = require("node:os"); console.log(typeof os.platform)',
			);

			expect(result.output).toEqual(["function"]);
		});

		it("rejects disallowed modules", async () => {
			const session = createSession();
			const result = await execute(
				session,
				mockFramer,
				'require("child_process")',
			);

			expect(result.error).toBe(
				'Module "child_process" is not allowed. Allowed: path, url, fs, fs/promises, crypto, buffer, util, os',
			);
		});
	});

	describe("errors", () => {
		it("returns error for undefined variable", async () => {
			const session = createSession();
			const result = await execute(session, mockFramer, "nonExistentVariable");

			expect(result.error).toBe(
				"ReferenceError: nonExistentVariable is not defined",
			);
		});

		it("returns error for syntax errors", async () => {
			const session = createSession();
			const result = await execute(session, mockFramer, "const 123 = 'bad'");

			expect(result.error).toBe("Unexpected number");
		});

		it("captures output before an error", async () => {
			const session = createSession();
			const result = await execute(
				session,
				mockFramer,
				'console.log("before"); throw new Error("boom")',
			);

			expect(result.output).toEqual(["before"]);
			expect(result.error).toBe("Error: boom");
		});
	});

	describe("executeWithReconnect", () => {
		it("returns result on success", async () => {
			const session = createSession();
			const framer = {
				eval: vi.fn().mockResolvedValue(undefined),
			} as unknown as Framer;
			const reconnect = vi.fn();

			const result = await executeWithReconnect(
				session,
				framer,
				'console.log("ok")',
				{},
				reconnect,
			);

			expect(result.output).toEqual(["ok"]);
			expect(result.error).toBeUndefined();
			expect(reconnect).not.toHaveBeenCalled();
		});

		it("retries on connection error and succeeds", async () => {
			const session = createSession();
			const deadFramer = {
				run: () => {
					throw new Error("Connection closed");
				},
			} as unknown as Framer;
			const freshFramer = {
				run: () => "ok",
			} as unknown as Framer;
			const reconnect = vi.fn().mockResolvedValue(freshFramer);

			const result = await executeWithReconnect(
				session,
				deadFramer,
				"console.log(framer.run())",
				{},
				reconnect,
			);

			expect(reconnect).toHaveBeenCalledTimes(1);
			expect(result.output).toEqual(["ok"]);
			expect(result.error).toBeUndefined();
		});

		it("returns error when reconnect returns null", async () => {
			const session = createSession();
			const deadFramer = {
				run: () => {
					throw new Error("Connection closed");
				},
			} as unknown as Framer;
			const reconnect = vi.fn().mockResolvedValue(null);

			const result = await executeWithReconnect(
				session,
				deadFramer,
				"framer.run()",
				{},
				reconnect,
			);

			expect(reconnect).toHaveBeenCalledTimes(1);
			expect(result.error).toBe("Connection lost and failed to reconnect");
		});

		it("returns error when retry also fails", async () => {
			const session = createSession();
			const deadFramer = {
				run: () => {
					throw new Error("Connection closed");
				},
			} as unknown as Framer;
			const alsoDeadFramer = {
				run: () => {
					throw new Error("Connection closed");
				},
			} as unknown as Framer;
			const reconnect = vi.fn().mockResolvedValue(alsoDeadFramer);

			const result = await executeWithReconnect(
				session,
				deadFramer,
				"framer.run()",
				{},
				reconnect,
			);

			expect(reconnect).toHaveBeenCalledTimes(1);
			expect(result.error).toBe("Connection closed");
		});

		it("does not retry on non-connection errors", async () => {
			const session = createSession();
			const reconnect = vi.fn();

			const result = await executeWithReconnect(
				session,
				mockFramer,
				"nonExistentVariable",
				{},
				reconnect,
			);

			expect(result.error).toBe(
				"ReferenceError: nonExistentVariable is not defined",
			);
			expect(reconnect).not.toHaveBeenCalled();
		});
	});

	describe("sandboxed filesystem", () => {
		let cwdDir: string;
		/** Escape backslashes so paths are safe inside JS string literals */
		const esc = (p: string) => p.replace(/\\/g, "\\\\");

		beforeAll(() => {
			cwdDir = fs.mkdtempSync(path.join(os.tmpdir(), "executor-fs-test-"));
		});

		afterAll(() => {
			fs.rmSync(cwdDir, { recursive: true, force: true });
		});

		it("can write to cwd", async () => {
			const session = createSession();
			const filePath = path.join(cwdDir, "cwd-test.txt");
			const result = await execute(
				session,
				mockFramer,
				`const fs = require("fs");
				fs.writeFileSync("${esc(filePath)}", "cwd write");
				console.log(fs.readFileSync("${esc(filePath)}", "utf-8"))`,
				{ cwd: cwdDir },
			);

			expect(result.error).toBeUndefined();
			expect(result.output).toEqual(["cwd write"]);
		});

		it("can write to os.tmpdir()", async () => {
			const session = createSession();
			const uniqueName = `dalton-tmpdir-test-${Date.now()}.txt`;
			const tmpFilePath = path.join(os.tmpdir(), uniqueName);
			try {
				const result = await execute(
					session,
					mockFramer,
					`const fs = require("fs");
					const os = require("os");
					const filePath = os.tmpdir() + "/${uniqueName}";
					fs.writeFileSync(filePath, "tmpdir write");
					console.log(fs.readFileSync(filePath, "utf-8"))`,
					{ cwd: cwdDir },
				);

				expect(result.error).toBeUndefined();
				expect(result.output).toEqual(["tmpdir write"]);
			} finally {
				try {
					fs.unlinkSync(tmpFilePath);
				} catch {}
			}
		});

		it("can write to /tmp", async () => {
			const session = createSession();
			const uniqueName = `dalton-tmp-test-${Date.now()}.txt`;
			const tmpFilePath = `/tmp/${uniqueName}`;
			try {
				const result = await execute(
					session,
					mockFramer,
					`const fs = require("fs");
					fs.writeFileSync("/tmp/${uniqueName}", "tmp write");
					console.log(fs.readFileSync("/tmp/${uniqueName}", "utf-8"))`,
					{ cwd: cwdDir },
				);

				expect(result.error).toBeUndefined();
				expect(result.output).toEqual(["tmp write"]);
			} finally {
				try {
					fs.unlinkSync(tmpFilePath);
				} catch {}
			}
		});

		it("cannot write outside allowed directories", async () => {
			const session = createSession();
			const result = await execute(
				session,
				mockFramer,
				'const fs = require("fs"); fs.writeFileSync("/var/evil.txt", "bad")',
				{ cwd: cwdDir },
			);

			expect(result.error).toContain("EPERM");
		});

		it("blocks path traversal with ..", async () => {
			const session = createSession();
			const traversalPath = path.join(cwdDir, "..", "..", "etc", "passwd");
			const result = await execute(
				session,
				mockFramer,
				`const fs = require("fs"); fs.readFileSync("${esc(traversalPath)}", "utf-8")`,
				{ cwd: cwdDir },
			);

			expect(result.error).toContain("EPERM");
		});
	});
});
