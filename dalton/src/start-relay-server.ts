import { log } from "./logger.js";
import { RELAY_PORT, VERSION } from "./relay-client.js";
import { startRelayServer } from "./relay-server.js";

process.title = "framer-relay-server";

process.on("uncaughtException", (err) => {
	log(`uncaught exception: ${err.message}`);
	console.error("Uncaught Exception:", err);
	process.exit(1);
});

process.on("unhandledRejection", (reason) => {
	log(`unhandled rejection: ${reason}`);
	console.error("Unhandled Rejection:", reason);
	process.exit(1);
});

async function main() {
	const server = await startRelayServer(RELAY_PORT);
	console.log(`Framer relay server v${VERSION} running on port ${RELAY_PORT}`);

	process.on("SIGINT", () => {
		log("shutdown SIGINT");
		console.log("\nShutting down...");
		server.close();
		process.exit(0);
	});

	process.on("SIGTERM", () => {
		log("shutdown SIGTERM");
		console.log("\nShutting down...");
		server.close();
		process.exit(0);
	});
}

main().catch((err) => {
	log(`startup failed: ${err.message}`);
	console.error("Failed to start relay server:", err);
	process.exit(1);
});
