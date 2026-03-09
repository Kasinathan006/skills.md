export function formatError(error: unknown): string {
	if (error instanceof Error) {
		return error.message;
	}
	return String(error);
}

export function printJson(value: unknown): void {
	console.log(JSON.stringify(value, null, 2));
}

export function print(message: string): void {
	console.log(message);
}

export function printError(message: string): void {
	console.error(message);
}
