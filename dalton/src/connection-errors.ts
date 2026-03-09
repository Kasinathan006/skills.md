// Errors from framer-api that indicate a dead connection
const CONNECTION_ERROR_PATTERNS = [
	"Connection closed", // FramerAPIError PROJECT_CLOSED
	"Connection to the server was closed", // FramerAPIError PROJECT_CLOSED
	"Connection timeout after", // FramerAPIError TIMEOUT
	"No connection to the server", // FramerAPIError INTERNAL
	"WebSocket upgrade failed", // WebSocket handshake failure
	"Session is not connected", // Our own check in executor.ts
	"Execution timed out after", // Likely dead connection
	"Session expired", // Server-side session expiry
];

export function isConnectionError(errorMessage: string): boolean {
	return CONNECTION_ERROR_PATTERNS.some((pattern) =>
		errorMessage.includes(pattern),
	);
}
