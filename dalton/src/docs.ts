import type { TypeInfo } from "./types-data.js";
import { getClass, getMethod, getType } from "./types-data.js";

function formatDocComment(text: string, indent = ""): string {
	const lines = text.split("\n");
	if (lines.length === 1) {
		return `${indent}/** ${text} */`;
	}
	return [
		`${indent}/**`,
		...lines.map((line) => (line ? `${indent} * ${line}` : `${indent} *`)),
		`${indent} */`,
	].join("\n");
}

function formatClass(
	name: string,
	description: string,
	methods: { signature: string; description: string }[],
): string {
	const lines: string[] = [];
	if (description) lines.push(formatDocComment(description));
	lines.push(`class ${name} {`);
	let first = true;
	for (const method of methods) {
		if (method.signature.startsWith("[")) continue;
		if (!first) lines.push("");
		first = false;
		if (method.description)
			lines.push(formatDocComment(method.description, "\t"));
		lines.push(`\t${method.signature}`);
	}
	lines.push("}");
	return lines.join("\n");
}

export function formatType(type: TypeInfo): string {
	const doc = type.description ? `${formatDocComment(type.description)}\n` : "";

	if (type.kind === "alias") {
		return `${doc}type ${type.name} = ${type.alias}`;
	}

	const extendsStr =
		type.extends && type.extends.length > 0
			? ` extends ${type.extends.join(", ")}`
			: "";

	if (!type.members || type.members.length === 0) {
		return `${doc}interface ${type.name}${extendsStr} {}`;
	}

	const lines: string[] = [];
	for (const member of type.members) {
		if (member.description)
			lines.push(formatDocComment(member.description, "\t"));
		const opt = member.optional ? "?" : "";
		lines.push(`\t${member.name}${opt}: ${member.type}`);
	}
	return `${doc}interface ${type.name}${extendsStr} {\n${lines.join("\n")}\n}`;
}

function expandReferences(refs: string[], seen: Set<string>): string[] {
	const result: string[] = [];
	for (const refName of refs) {
		if (seen.has(refName)) continue;
		seen.add(refName);

		const typeData = getType(refName);
		if (typeData) {
			result.push(formatType(typeData));
			result.push(...expandReferences(typeData.references, seen));
			continue;
		}

		const classData = getClass(refName);
		if (classData) {
			result.push(
				formatClass(
					classData.info.name,
					classData.info.description,
					classData.methods,
				),
			);
		}
	}
	return result;
}

/**
 * Render docs for the given queries. Returns { lines, errors }.
 * Empty queries = list framer methods.
 */
export function renderDocs(queries: string[]): {
	lines: string[];
	errors: string[];
} {
	const lines: string[] = [];
	const errors: string[] = [];

	if (queries.length === 0) {
		queries = ["framer"];
	}

	for (let i = 0; i < queries.length; i++) {
		const query = queries[i];
		if (i > 0) lines.push("");

		if (query.includes(".")) {
			// Method lookup: show definition + expand all referenced types
			const method = getMethod(query);
			if (!method) {
				errors.push(
					`Method '${query}' not found. Use 'framer docs' to list all.`,
				);
				return { lines, errors };
			}
			if (method.description) lines.push(formatDocComment(method.description));
			lines.push(`${method.category}.${method.signature}`);

			const seen = new Set<string>();
			for (const typeDef of expandReferences(method.references, seen)) {
				lines.push(`\n${typeDef}`);
			}
		} else {
			// Class lookup: show full class, no type expansion
			const classData = getClass(query);
			if (classData) {
				lines.push(
					formatClass(
						classData.info.name,
						classData.info.description,
						classData.methods,
					),
				);
			} else {
				// Type lookup: show definition + expand all referenced types
				const typeData = getType(query);
				if (typeData) {
					lines.push(formatType(typeData));

					const seen = new Set<string>([typeData.name]);
					for (const typeDef of expandReferences(typeData.references, seen)) {
						lines.push(`\n${typeDef}`);
					}
				} else {
					errors.push(`'${query}' not found. Use 'framer docs' to list all.`);
					return { lines, errors };
				}
			}
		}
	}

	return { lines, errors };
}
