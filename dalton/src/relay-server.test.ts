import type http from "node:http";
import { createTRPCClient, httpLink } from "@trpc/client";
import {
	afterAll,
	afterEach,
	beforeAll,
	describe,
	expect,
	it,
	vi,
} from "vitest";

vi.mock("./connection-pool.js", () => ({
	connectionPool: {
		acquire: vi.fn().mockResolvedValue({}),
		getConnection: vi.fn().mockReturnValue(null),
		reconnect: vi.fn().mockResolvedValue(null),
		release: vi.fn().mockResolvedValue(undefined),
		releaseAll: vi.fn().mockResolvedValue(undefined),
	},
}));

vi.mock("./logger.js", () => ({
	log: vi.fn(),
}));

vi.mock("./execute.js", () => ({
	executeWithReconnect: vi.fn(),
}));

import { connectionPool } from "./connection-pool.js";
import { executeWithReconnect } from "./execute.js";
import { startRelayServer } from "./relay-server.js";
import type { AppRouter } from "./router.js";
import { sessionManager } from "./session-manager.js";

describe("relay server", () => {
	let server: http.Server;
	let port: number;
	let client: ReturnType<typeof createTRPCClient<AppRouter>>;

	beforeAll(async () => {
		server = await startRelayServer(0);
		const addr = server.address() as { port: number };
		port = addr.port;
		client = createTRPCClient<AppRouter>({
			links: [httpLink({ url: `http://127.0.0.1:${port}` })],
		});
	});

	afterEach(async () => {
		await sessionManager.destroyAll();
		vi.clearAllMocks();
	});

	afterAll(() => {
		server.close();
	});

	describe("version", () => {
		it("returns the server version", async () => {
			const result = await client.version.query();

			expect(result).toHaveProperty("version");
			expect(typeof result.version).toBe("string");
		});

		it("returns 404 for unknown non-tRPC routes", async () => {
			const response = await fetch(`http://127.0.0.1:${port}/unknown`);

			expect(response.status).toBe(404);
		});
	});

	describe("session lifecycle", () => {
		it("starts with no sessions", async () => {
			const sessions = await client.listSessions.query();

			expect(sessions).toEqual([]);
		});

		it("creates a session", async () => {
			const { id } = await client.createSession.mutate({
				projectId: "proj1",
				apiKey: "key1",
			});

			expect(id).toBe("1");
			expect(connectionPool.acquire).toHaveBeenCalledWith(
				"proj1",
				"key1",
				expect.objectContaining({ projectId: "proj1" }),
			);
		});

		it("lists created sessions", async () => {
			await client.createSession.mutate({
				projectId: "proj1",
				apiKey: "key1",
			});
			await client.createSession.mutate({
				projectId: "proj2",
				apiKey: "key2",
			});

			const sessions = await client.listSessions.query();

			expect(sessions).toHaveLength(2);
			expect(sessions).toEqual(
				expect.arrayContaining([
					expect.objectContaining({ projectId: "proj1" }),
					expect.objectContaining({ projectId: "proj2" }),
				]),
			);
		});

		it("destroys a session", async () => {
			const { id } = await client.createSession.mutate({
				projectId: "proj1",
				apiKey: "key1",
			});

			await client.destroySession.mutate({ sessionId: id });

			const sessions = await client.listSessions.query();
			expect(sessions).toEqual([]);
		});

		it("reuses the lowest available session ID", async () => {
			const s1 = await client.createSession.mutate({
				projectId: "proj1",
				apiKey: "key1",
			});
			const s2 = await client.createSession.mutate({
				projectId: "proj2",
				apiKey: "key2",
			});

			expect(s1.id).toBe("1");
			expect(s2.id).toBe("2");

			await client.destroySession.mutate({ sessionId: "1" });

			const s3 = await client.createSession.mutate({
				projectId: "proj3",
				apiKey: "key3",
			});

			expect(s3.id).toBe("1");
		});

		it("shares a connection for sessions on the same project", async () => {
			await client.createSession.mutate({
				projectId: "proj1",
				apiKey: "key1",
			});
			await client.createSession.mutate({
				projectId: "proj1",
				apiKey: "key1",
			});

			expect(connectionPool.acquire).toHaveBeenCalledTimes(2);
			// Both calls use the same projectId — the pool reuses the connection
			expect(connectionPool.acquire).toHaveBeenNthCalledWith(
				1,
				"proj1",
				"key1",
				expect.objectContaining({ id: "1" }),
			);
			expect(connectionPool.acquire).toHaveBeenNthCalledWith(
				2,
				"proj1",
				"key1",
				expect.objectContaining({ id: "2" }),
			);
		});
	});

	describe("exec", () => {
		it("returns error for non-existent session", async () => {
			await expect(
				client.exec.mutate({ sessionId: "999", code: "test" }),
			).rejects.toThrow();
		});

		it("executes code and returns output", async () => {
			const mockFramer = {};
			vi.mocked(connectionPool.getConnection).mockReturnValue(
				mockFramer as never,
			);
			vi.mocked(executeWithReconnect).mockResolvedValue({
				output: ["hello world"],
			});

			const { id } = await client.createSession.mutate({
				projectId: "proj1",
				apiKey: "key1",
			});

			const result = await client.exec.mutate({
				sessionId: id,
				code: 'console.log("hello world")',
			});

			expect(result.output).toEqual(["hello world"]);
			expect(result.error).toBeUndefined();
		});

		it("returns error when no connection available", async () => {
			vi.mocked(connectionPool.getConnection).mockReturnValue(null);

			const { id } = await client.createSession.mutate({
				projectId: "proj1",
				apiKey: "key1",
			});

			const result = await client.exec.mutate({
				sessionId: id,
				code: "test",
			});

			expect(result.output).toEqual([]);
			expect(result.error).toBe("Failed to get connection for session");
		});

		it("returns error when code throws", async () => {
			const mockFramer = {};
			vi.mocked(connectionPool.getConnection).mockReturnValue(
				mockFramer as never,
			);
			vi.mocked(executeWithReconnect).mockResolvedValue({
				output: [],
				error: "ReferenceError: x is not defined",
			});

			const { id } = await client.createSession.mutate({
				projectId: "proj1",
				apiKey: "key1",
			});

			const result = await client.exec.mutate({
				sessionId: id,
				code: "x()",
			});

			expect(result.output).toEqual([]);
			expect(result.error).toBe("ReferenceError: x is not defined");
		});
	});

	describe("input validation", () => {
		it("rejects createSession with missing fields", async () => {
			await expect(
				// @ts-expect-error testing invalid input
				client.createSession.mutate({ projectId: "proj1" }),
			).rejects.toThrow();
		});

		it("rejects exec with missing code", async () => {
			await expect(
				// @ts-expect-error testing invalid input
				client.exec.mutate({ sessionId: "1" }),
			).rejects.toThrow();
		});

		it("rejects exec with unknown fields", async () => {
			await expect(
				client.exec.mutate({
					sessionId: "1",
					code: "test",
					// @ts-expect-error testing invalid input
					bogus: true,
				}),
			).rejects.toThrow();
		});
	});
});
