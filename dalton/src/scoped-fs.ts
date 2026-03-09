import fs from "node:fs";
import os from "node:os";
import path from "node:path";

/**
 * A sandboxed fs wrapper that restricts all file operations to allowed directories.
 * Any attempt to access files outside the allowed directories will throw an EPERM error.
 *
 * By default, allows access to:
 * - Current working directory (process.cwd())
 * - /tmp
 * - os.tmpdir()
 */
export class ScopedFS {
	private allowedDirs: string[];

	constructor(allowedDirs?: string[]) {
		const defaultDirs = [process.cwd(), "/tmp", os.tmpdir()];
		const dirs = allowedDirs ?? defaultDirs;
		this.allowedDirs = [...new Set(dirs.map((d) => path.resolve(d)))];
	}

	private isPathAllowed(resolved: string): boolean {
		return this.allowedDirs.some((dir) => {
			return resolved === dir || resolved.startsWith(dir + path.sep);
		});
	}

	private resolvePath(filePath: string): string {
		const resolved = path.resolve(filePath);

		if (!this.isPathAllowed(resolved)) {
			const error = new Error(
				`EPERM: operation not permitted, access outside allowed directories: ${filePath}`,
			) as NodeJS.ErrnoException;
			error.code = "EPERM";
			error.errno = -1;
			error.syscall = "access";
			error.path = filePath;
			throw error;
		}
		return resolved;
	}

	// Sync methods

	readFileSync = (
		filePath: fs.PathOrFileDescriptor,
		options?: unknown,
	): unknown => {
		const resolved = this.resolvePath(filePath.toString());
		return fs.readFileSync(resolved, options as fs.ObjectEncodingOptions);
	};

	writeFileSync = (
		filePath: fs.PathOrFileDescriptor,
		data: unknown,
		options?: unknown,
	): void => {
		const resolved = this.resolvePath(filePath.toString());
		fs.writeFileSync(
			resolved,
			data as string | NodeJS.ArrayBufferView,
			options as fs.WriteFileOptions,
		);
	};

	appendFileSync = (
		filePath: fs.PathOrFileDescriptor,
		data: unknown,
		options?: unknown,
	): void => {
		const resolved = this.resolvePath(filePath.toString());
		fs.appendFileSync(
			resolved,
			data as string | Uint8Array,
			options as fs.WriteFileOptions,
		);
	};

	readdirSync = (dirPath: fs.PathLike, options?: unknown): unknown => {
		const resolved = this.resolvePath(dirPath.toString());
		return fs.readdirSync(resolved, options as fs.ObjectEncodingOptions);
	};

	mkdirSync = (dirPath: fs.PathLike, options?: unknown): unknown => {
		const resolved = this.resolvePath(dirPath.toString());
		return fs.mkdirSync(resolved, options as fs.MakeDirectoryOptions);
	};

	rmdirSync = (dirPath: fs.PathLike, options?: unknown): void => {
		const resolved = this.resolvePath(dirPath.toString());
		fs.rmdirSync(resolved, options as fs.RmDirOptions);
	};

	unlinkSync = (filePath: fs.PathLike): void => {
		const resolved = this.resolvePath(filePath.toString());
		fs.unlinkSync(resolved);
	};

	statSync = (filePath: fs.PathLike, options?: unknown): unknown => {
		const resolved = this.resolvePath(filePath.toString());
		return fs.statSync(resolved, options as fs.StatOptions);
	};

	lstatSync = (filePath: fs.PathLike, options?: unknown): unknown => {
		const resolved = this.resolvePath(filePath.toString());
		return fs.lstatSync(resolved, options as fs.StatOptions);
	};

	existsSync = (filePath: fs.PathLike): boolean => {
		try {
			const resolved = this.resolvePath(filePath.toString());
			return fs.existsSync(resolved);
		} catch {
			return false;
		}
	};

	accessSync = (filePath: fs.PathLike, mode?: number): void => {
		const resolved = this.resolvePath(filePath.toString());
		fs.accessSync(resolved, mode);
	};

	copyFileSync = (src: fs.PathLike, dest: fs.PathLike, mode?: number): void => {
		const resolvedSrc = this.resolvePath(src.toString());
		const resolvedDest = this.resolvePath(dest.toString());
		fs.copyFileSync(resolvedSrc, resolvedDest, mode);
	};

	renameSync = (oldPath: fs.PathLike, newPath: fs.PathLike): void => {
		const resolvedOld = this.resolvePath(oldPath.toString());
		const resolvedNew = this.resolvePath(newPath.toString());
		fs.renameSync(resolvedOld, resolvedNew);
	};

	rmSync = (filePath: fs.PathLike, options?: fs.RmOptions): void => {
		const resolved = this.resolvePath(filePath.toString());
		fs.rmSync(resolved, options);
	};

	// Stream methods

	createReadStream = (
		filePath: fs.PathLike,
		options?: unknown,
	): fs.ReadStream => {
		const resolved = this.resolvePath(filePath.toString());
		return fs.createReadStream(resolved, options as BufferEncoding);
	};

	createWriteStream = (
		filePath: fs.PathLike,
		options?: unknown,
	): fs.WriteStream => {
		const resolved = this.resolvePath(filePath.toString());
		return fs.createWriteStream(resolved, options as BufferEncoding);
	};

	// Promise-based API (fs.promises equivalent)
	get promises() {
		return {
			readFile: async (filePath: fs.PathLike, options?: unknown) => {
				const resolved = this.resolvePath(filePath.toString());
				return fs.promises.readFile(
					resolved,
					options as fs.ObjectEncodingOptions,
				);
			},
			writeFile: async (
				filePath: fs.PathLike,
				data: unknown,
				options?: unknown,
			) => {
				const resolved = this.resolvePath(filePath.toString());
				return fs.promises.writeFile(
					resolved,
					data as string | Uint8Array,
					options as fs.ObjectEncodingOptions,
				);
			},
			appendFile: async (
				filePath: fs.PathLike,
				data: unknown,
				options?: unknown,
			) => {
				const resolved = this.resolvePath(filePath.toString());
				return fs.promises.appendFile(
					resolved,
					data as string | Uint8Array,
					options as fs.ObjectEncodingOptions,
				);
			},
			readdir: async (dirPath: fs.PathLike, options?: unknown) => {
				const resolved = this.resolvePath(dirPath.toString());
				return fs.promises.readdir(
					resolved,
					options as fs.ObjectEncodingOptions,
				);
			},
			mkdir: async (dirPath: fs.PathLike, options?: unknown) => {
				const resolved = this.resolvePath(dirPath.toString());
				return fs.promises.mkdir(resolved, options as fs.MakeDirectoryOptions);
			},
			rmdir: async (dirPath: fs.PathLike, options?: unknown) => {
				const resolved = this.resolvePath(dirPath.toString());
				return fs.promises.rmdir(resolved, options as fs.RmDirOptions);
			},
			unlink: async (filePath: fs.PathLike) => {
				const resolved = this.resolvePath(filePath.toString());
				return fs.promises.unlink(resolved);
			},
			stat: async (filePath: fs.PathLike, options?: unknown) => {
				const resolved = this.resolvePath(filePath.toString());
				return fs.promises.stat(resolved, options as fs.StatOptions);
			},
			access: async (filePath: fs.PathLike, mode?: number) => {
				const resolved = this.resolvePath(filePath.toString());
				return fs.promises.access(resolved, mode);
			},
			copyFile: async (src: fs.PathLike, dest: fs.PathLike, mode?: number) => {
				const resolvedSrc = this.resolvePath(src.toString());
				const resolvedDest = this.resolvePath(dest.toString());
				return fs.promises.copyFile(resolvedSrc, resolvedDest, mode);
			},
			rename: async (oldPath: fs.PathLike, newPath: fs.PathLike) => {
				const resolvedOld = this.resolvePath(oldPath.toString());
				const resolvedNew = this.resolvePath(newPath.toString());
				return fs.promises.rename(resolvedOld, resolvedNew);
			},
			rm: async (filePath: fs.PathLike, options?: fs.RmOptions) => {
				const resolved = this.resolvePath(filePath.toString());
				return fs.promises.rm(resolved, options);
			},
		};
	}

	constants = fs.constants;
}
