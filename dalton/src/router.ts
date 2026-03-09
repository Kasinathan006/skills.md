import { initTRPC, TRPCError } from "@trpc/server";
import { z } from "zod";
import { executeWithReconnect } from "./execute.js";
import { log } from "./logger.js";
import { VERSION } from "./relay-client.js";
import { sessionManager } from "./session-manager.js";

const t = initTRPC.create();

export const appRouter = t.router({
	version: t.procedure.query(() => {
		return { version: VERSION };
	}),

	listSessions: t.procedure.query(() => {
		return sessionManager.list();
	}),

	createSession: t.procedure
		.input(z.object({ projectId: z.string(), apiKey: z.string() }))
		.mutation(async ({ input }) => {
			const id = await sessionManager.create(input.projectId, input.apiKey);
			log(`session.new id=${id} project=${input.projectId}`);
			return { id };
		}),

	destroySession: t.procedure
		.input(z.object({ sessionId: z.string() }))
		.mutation(async ({ input }) => {
			await sessionManager.destroy(input.sessionId);
			log(`session.destroy id=${input.sessionId}`);
		}),

	exec: t.procedure
		.input(
			z.object({
				sessionId: z.string(),
				code: z.string(),
				cwd: z.string().optional(),
			}),
		)
		.mutation(async ({ input }) => {
			const { sessionId, code, cwd } = input;

			const session = sessionManager.get(sessionId);
			if (!session) {
				throw new TRPCError({
					code: "NOT_FOUND",
					message: `Session ${sessionId} not found`,
				});
			}

			log(
				`exec session=${sessionId} code=${JSON.stringify(code).slice(0, 100)}`,
			);

			const framer = sessionManager.getFramer(session);
			if (!framer) {
				return {
					output: [] as string[],
					error: "Failed to get connection for session",
				};
			}

			const result = await executeWithReconnect(
				session,
				framer,
				code,
				{ cwd },
				() => sessionManager.reconnect(session),
			);

			if (result.error) {
				log(`exec.error session=${sessionId} error="${result.error}"`);
			}

			return result;
		}),

	shutdown: t.procedure.mutation(() => {
		log("shutdown requested");
		setTimeout(() => {
			process.exit(0);
		}, 100);
	}),
});

export type AppRouter = typeof appRouter;
