import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const docsDir = join(__dirname, "..", "docs");

export type DocName =
	| "all-skills"
	| "server-api"
	| "code-components"
	| "property-controls"
	| "component-examples";

export function readDoc(name: DocName): string {
	return readFileSync(join(docsDir, `${name}.md`), "utf-8").trimEnd();
}

export const skillTopics: readonly DocName[] = [
	"code-components",
	"property-controls",
	"component-examples",
];

export function isSkillTopic(topic: string): topic is DocName {
	return skillTopics.some((name) => name === topic);
}
