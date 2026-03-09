import type { Framer } from "framer-api";
import { connectionPool } from "./connection-pool.js";

export interface SessionInfo {
	id: string;
	projectId: string;
	stateKeys: string[];
}

export interface Session {
	id: string;
	projectId: string;
	apiKey: string;
	state: Record<string, unknown>;
}

export class SessionManager {
	private sessions = new Map<string, Session>();

	async create(projectId: string, apiKey: string): Promise<string> {
		// Find the lowest available ID
		let id = 1;
		while (this.sessions.has(String(id))) {
			id++;
		}

		const session: Session = {
			id: String(id),
			projectId,
			apiKey,
			state: {},
		};

		// Acquire connection from pool (creates or reuses)
		await connectionPool.acquire(projectId, apiKey, session);

		this.sessions.set(String(id), session);
		return String(id);
	}

	list(): SessionInfo[] {
		return Array.from(this.sessions.values()).map((session) => ({
			id: session.id,
			projectId: session.projectId,
			stateKeys: Object.keys(session.state),
		}));
	}

	get(id: string): Session | undefined {
		return this.sessions.get(id);
	}

	getFramer(session: Session): Framer | null {
		return connectionPool.getConnection(session.projectId);
	}

	async reconnect(session: Session): Promise<Framer | null> {
		return connectionPool.reconnect(session.projectId);
	}

	async destroy(id: string): Promise<void> {
		const session = this.sessions.get(id);
		if (!session) {
			return;
		}

		await connectionPool.release(session.projectId, session);
		this.sessions.delete(id);
	}

	async destroyAll(): Promise<void> {
		for (const id of this.sessions.keys()) {
			await this.destroy(id);
		}
	}
}

export const sessionManager = new SessionManager();
