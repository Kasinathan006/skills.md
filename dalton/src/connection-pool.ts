import { connect, type Framer } from "framer-api";
import type { Session } from "./session-manager.js";

interface PoolEntry {
	connection: Framer;
	sessions: Set<Session>;
}

class ConnectionPool {
	private pool = new Map<string, PoolEntry>();
	private reconnectPromises = new Map<string, Promise<Framer | null>>();

	/**
	 * Acquire a connection for a session.
	 * If a connection already exists for the project, the session is added to it.
	 * Otherwise, a new connection is created.
	 */
	async acquire(
		projectId: string,
		apiKey: string,
		session: Session,
	): Promise<Framer> {
		const entry = this.pool.get(projectId);

		if (entry) {
			entry.sessions.add(session);
			return entry.connection;
		}

		// Create new connection
		const connection = await connect(projectId, apiKey);
		this.pool.set(projectId, {
			connection,
			sessions: new Set([session]),
		});
		return connection;
	}

	/**
	 * Get the connection for a project.
	 */
	getConnection(projectId: string): Framer | null {
		const entry = this.pool.get(projectId);
		return entry?.connection ?? null;
	}

	/**
	 * Reconnect a project's connection (call after catching a connection error).
	 * Concurrent callers for the same project share a single reconnect attempt.
	 */
	async reconnect(projectId: string): Promise<Framer | null> {
		const existingPromise = this.reconnectPromises.get(projectId);
		if (existingPromise) return existingPromise;

		const promise = this.doReconnect(projectId).finally(() => {
			this.reconnectPromises.delete(projectId);
		});
		this.reconnectPromises.set(projectId, promise);
		return promise;
	}

	private async doReconnect(projectId: string): Promise<Framer | null> {
		const entry = this.pool.get(projectId);
		if (!entry) return null;

		try {
			await entry.connection.reconnect();
			return entry.connection;
		} catch {
			return null;
		}
	}

	/**
	 * Release a session from a connection.
	 * If no sessions remain, the connection is disconnected and removed.
	 */
	async release(projectId: string, session: Session): Promise<void> {
		const entry = this.pool.get(projectId);
		if (!entry) {
			return;
		}

		entry.sessions.delete(session);

		if (entry.sessions.size === 0) {
			await entry.connection.disconnect();
			this.pool.delete(projectId);
		}
	}

	/**
	 * Release all connections (for cleanup).
	 */
	async releaseAll(): Promise<void> {
		for (const [projectId, entry] of this.pool) {
			await entry.connection.disconnect();
			this.pool.delete(projectId);
		}
	}
}

export const connectionPool = new ConnectionPool();
