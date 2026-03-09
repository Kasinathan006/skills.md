import http from "node:http";
import { createHTTPHandler } from "@trpc/server/adapters/standalone";
import { log } from "./logger.js";
import { RELAY_PORT, VERSION } from "./relay-client.js";
import { appRouter } from "./router.js";

const trpcHandler = createHTTPHandler({ router: appRouter });

export async function startRelayServer(
	port: number = RELAY_PORT,
): Promise<http.Server> {
	const server = http.createServer((req, res) => {
		trpcHandler(req, res);
	});

	return new Promise((resolve, reject) => {
		server.on("error", reject);
		server.listen(port, "127.0.0.1", () => {
			log(`started v${VERSION} on port ${port}`);
			resolve(server);
		});
	});
}
