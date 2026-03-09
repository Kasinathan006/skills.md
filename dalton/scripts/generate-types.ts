/**
 * Generates types-data.ts from the framer-api declaration file.
 * Run with: make generate-types
 */

import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

// --- Output data model ---

interface TypeMember {
	name: string;
	type: string;
	description: string;
	optional: boolean;
}

interface TypeInfo {
	name: string;
	description: string;
	kind: "interface" | "alias";
	members?: TypeMember[];
	extends?: string[];
	alias?: string;
	references: string[];
}

interface MethodInfo {
	name: string;
	category: string;
	signature: string;
	description: string;
	references: string[];
}

interface ClassInfo {
	name: string;
	description: string;
}

// --- Parsed declarations ---

interface Declarations {
	classes: Map<string, ts.ClassDeclaration>;
	interfaces: Map<string, ts.InterfaceDeclaration>;
	typeAliases: Map<string, ts.TypeAliasDeclaration>;
	consts: Map<string, string>;
	classParents: Map<string, string>;
	extendedClasses: Set<string>;
}

// --- Constants ---

const SKIP_TYPES = new Set([
	"Promise",
	"Map",
	"Set",
	"Array",
	"Record",
	"Partial",
	"Required",
	"Pick",
	"Omit",
	"Readonly",
	"void",
	"string",
	"number",
	"boolean",
	"null",
	"undefined",
	"never",
	"unknown",
	"any",
	"Buffer",
	"Uint8Array",
	"AsyncGenerator",
	"Generator",
	"Iterator",
	"Iterable",
	"IterableIterator",
	"NodeId",
	"Unsubscribe",
]);

const FRAMER_API_DTS = path.resolve(
	import.meta.dirname,
	"../node_modules/framer-api/dist/index.d.ts",
);
const OUTPUT_PATH = path.resolve(import.meta.dirname, "../src/types-data.ts");

// --- AST utilities ---

function getJSDocComment(node: ts.Node, sourceFile: ts.SourceFile): string {
	const ranges = ts.getLeadingCommentRanges(
		sourceFile.getFullText(),
		node.getFullStart(),
	);
	if (!ranges) return "";
	for (const range of ranges) {
		const text = sourceFile.getFullText().slice(range.pos, range.end);
		if (text.startsWith("/**")) {
			return text
				.replace(/^\/\*\*\s*/, "")
				.replace(/\s*\*\/$/, "")
				.split("\n")
				.map((line) => line.replace(/^\s*\*\s?/, ""))
				.join("\n")
				.trim();
		}
	}
	return "";
}

function cleanDescription(node: ts.Node, sourceFile: ts.SourceFile): string {
	return getJSDocComment(node, sourceFile);
}

/** Returns member name if it should be included in docs, null otherwise. */
function getExposableName(
	member: ts.ClassElement | ts.TypeElement,
	sourceFile: ts.SourceFile,
): string | null {
	if (ts.isConstructorDeclaration(member)) return null;
	const name = member.name?.getText(sourceFile);
	if (!name || name.startsWith("#") || name.startsWith("subscribe"))
		return null;
	if (getJSDocComment(member, sourceFile).includes("@deprecated")) return null;
	const ok =
		ts.isMethodDeclaration(member) ||
		ts.isMethodSignature(member) ||
		ts.isGetAccessor(member) ||
		ts.isPropertyDeclaration(member) ||
		ts.isPropertySignature(member);
	return ok ? name : null;
}

/** Collapse multi-line type text into a single line. */
function collapseType(text: string): string {
	return text.replace(/\s+/g, " ");
}

function getMethodSignature(
	member: ts.ClassElement,
	sourceFile: ts.SourceFile,
): string {
	const name = member.name?.getText(sourceFile) || "";

	if (ts.isMethodDeclaration(member) || ts.isMethodSignature(member)) {
		const params = member.parameters
			.map(
				(p) =>
					`${p.name.getText(sourceFile)}${p.questionToken ? "?" : ""}: ${collapseType(p.type?.getText(sourceFile) ?? "any")}`,
			)
			.join(", ");
		return `${name}(${params}): ${collapseType(member.type?.getText(sourceFile) ?? "void")}`;
	}

	if (
		ts.isGetAccessor(member) ||
		ts.isPropertyDeclaration(member) ||
		ts.isPropertySignature(member)
	) {
		return `${name}: ${collapseType(member.type?.getText(sourceFile) ?? "any")}`;
	}

	return name;
}

function getExtendsClause(
	declaration: ts.InterfaceDeclaration,
	sourceFile: ts.SourceFile,
): string[] {
	const parents: string[] = [];
	for (const clause of declaration.heritageClauses ?? []) {
		if (clause.token === ts.SyntaxKind.ExtendsKeyword) {
			for (const t of clause.types)
				parents.push(t.expression.getText(sourceFile));
		}
	}
	return parents;
}

// --- Type reference collection ---

function collectTypeRefs(
	typeNode: ts.TypeNode | undefined,
	sourceFile: ts.SourceFile,
	out: Set<string>,
) {
	if (!typeNode) return;

	if (ts.isTypeReferenceNode(typeNode)) {
		const name = typeNode.typeName.getText(sourceFile);
		if (!SKIP_TYPES.has(name)) out.add(name);
		for (const arg of typeNode.typeArguments ?? [])
			collectTypeRefs(arg, sourceFile, out);
	} else if (ts.isArrayTypeNode(typeNode)) {
		collectTypeRefs(typeNode.elementType, sourceFile, out);
	} else if (
		ts.isUnionTypeNode(typeNode) ||
		ts.isIntersectionTypeNode(typeNode)
	) {
		for (const t of typeNode.types) collectTypeRefs(t, sourceFile, out);
	} else if (ts.isTupleTypeNode(typeNode)) {
		for (const el of typeNode.elements) collectTypeRefs(el, sourceFile, out);
	} else if (ts.isParenthesizedTypeNode(typeNode)) {
		collectTypeRefs(typeNode.type, sourceFile, out);
	} else if (ts.isTypeOperatorNode(typeNode)) {
		collectTypeRefs(typeNode.type, sourceFile, out);
	}
}

function collectMemberRefs(
	member: ts.TypeElement | ts.ClassElement,
	sourceFile: ts.SourceFile,
	out: Set<string>,
) {
	if (ts.isMethodDeclaration(member) || ts.isMethodSignature(member)) {
		for (const p of member.parameters) collectTypeRefs(p.type, sourceFile, out);
		collectTypeRefs(member.type, sourceFile, out);
	} else if (
		ts.isPropertyDeclaration(member) ||
		ts.isPropertySignature(member) ||
		ts.isGetAccessor(member)
	) {
		collectTypeRefs(member.type, sourceFile, out);
	}
}

// --- Method extraction ---

function extractMethods(
	members: ts.NodeArray<ts.ClassElement> | ts.NodeArray<ts.TypeElement>,
	category: string,
	sourceFile: ts.SourceFile,
	requireDocs = true,
): MethodInfo[] {
	const methods: MethodInfo[] = [];
	for (const member of members) {
		const name = getExposableName(member, sourceFile);
		if (!name) continue;

		const doc = getJSDocComment(member, sourceFile);
		if (requireDocs && !doc) continue;
		if (doc.includes("@internal")) continue;

		const refs = new Set<string>();
		collectMemberRefs(
			member as ts.TypeElement & ts.ClassElement,
			sourceFile,
			refs,
		);

		methods.push({
			name,
			category,
			signature: getMethodSignature(member as ts.ClassElement, sourceFile),
			description: doc,
			references: [...refs],
		});
	}
	return methods;
}

/** Look up JSDoc for a member from an interface and its parent chain. */
function findInterfaceDoc(
	memberName: string,
	declaration: ts.InterfaceDeclaration,
	allInterfaces: Map<string, ts.InterfaceDeclaration>,
	sourceFile: ts.SourceFile,
): string {
	for (const member of declaration.members) {
		if (member.name?.getText(sourceFile) === memberName) {
			const doc = getJSDocComment(member, sourceFile);
			if (doc) return doc;
		}
	}
	for (const parent of getExtendsClause(declaration, sourceFile)) {
		const parentDeclaration = allInterfaces.get(parent);
		if (parentDeclaration) {
			const doc = findInterfaceDoc(
				memberName,
				parentDeclaration,
				allInterfaces,
				sourceFile,
			);
			if (doc) return doc;
		}
	}
	return "";
}

/** Extract methods from a class, including undocumented members that have docs in implemented interfaces. */
function extractClassMethods(
	classDeclaration: ts.ClassDeclaration,
	category: string,
	sourceFile: ts.SourceFile,
	allInterfaces: Map<string, ts.InterfaceDeclaration>,
): MethodInfo[] {
	const methods = extractMethods(
		classDeclaration.members,
		category,
		sourceFile,
	);
	const included = new Set(methods.map((m) => m.name));

	// Find implemented interface names
	const implNames: string[] = [];
	for (const clause of classDeclaration.heritageClauses ?? []) {
		if (clause.token === ts.SyntaxKind.ImplementsKeyword) {
			for (const t of clause.types)
				implNames.push(t.expression.getText(sourceFile));
		}
	}
	if (implNames.length === 0) return methods;

	// Pick up undocumented class members that have docs in implemented interfaces
	for (const member of classDeclaration.members) {
		const name = getExposableName(member, sourceFile);
		if (!name || included.has(name)) continue;

		let doc = "";
		for (const implName of implNames) {
			const interfaceDeclaration = allInterfaces.get(implName);
			if (!interfaceDeclaration) continue;
			doc = findInterfaceDoc(
				name,
				interfaceDeclaration,
				allInterfaces,
				sourceFile,
			);
			if (doc) break;
		}
		if (!doc || doc.includes("@internal")) continue;

		const refs = new Set<string>();
		collectMemberRefs(
			member as ts.TypeElement & ts.ClassElement,
			sourceFile,
			refs,
		);

		methods.push({
			name,
			category,
			signature: getMethodSignature(member as ts.ClassElement, sourceFile),
			description: doc,
			references: [...refs],
		});
		included.add(name);
	}

	return methods;
}

// --- Structured type extraction ---

function extractInterfaceData(
	declaration: ts.InterfaceDeclaration,
	sourceFile: ts.SourceFile,
) {
	const parents = getExtendsClause(declaration, sourceFile);
	const members: TypeMember[] = [];
	const refs = new Set<string>();

	for (const parent of parents) {
		if (!SKIP_TYPES.has(parent)) refs.add(parent);
	}

	for (const member of declaration.members) {
		if (!ts.isPropertySignature(member) && !ts.isMethodSignature(member))
			continue;
		const name = member.name?.getText(sourceFile);
		if (!name) continue;

		let type = "";
		if (ts.isPropertySignature(member) && member.type) {
			type = member.type.getText(sourceFile);
		} else if (ts.isMethodSignature(member)) {
			const params = member.parameters
				.map(
					(p) =>
						`${p.name.getText(sourceFile)}${p.questionToken ? "?" : ""}: ${p.type?.getText(sourceFile) ?? "any"}`,
				)
				.join(", ");
			type = `(${params}) => ${member.type?.getText(sourceFile) ?? "void"}`;
		}

		members.push({
			name,
			type,
			description: cleanDescription(member, sourceFile),
			optional: !!member.questionToken,
		});
		collectMemberRefs(member, sourceFile, refs);
	}

	return { members, extends: parents, references: [...refs] };
}

function extractTypeAliasData(
	declaration: ts.TypeAliasDeclaration,
	sourceFile: ts.SourceFile,
	consts: Map<string, string>,
) {
	let alias = declaration.type.getText(sourceFile).replace(/\s*\/\/.*$/gm, "");
	if (
		ts.isTypeQueryNode(declaration.type) &&
		ts.isIdentifier(declaration.type.exprName)
	) {
		alias = consts.get(declaration.type.exprName.text) ?? alias;
	}
	const refs = new Set<string>();
	collectTypeRefs(declaration.type, sourceFile, refs);
	return { alias, references: [...refs] };
}

// --- Main pipeline ---

function parseDeclarations(sourceFile: ts.SourceFile): Declarations {
	const declarations: Declarations = {
		classes: new Map(),
		interfaces: new Map(),
		typeAliases: new Map(),
		consts: new Map(),
		classParents: new Map(),
		extendedClasses: new Set(),
	};

	function visit(node: ts.Node) {
		if (ts.isClassDeclaration(node) && node.name) {
			const name = node.name.text;
			declarations.classes.set(name, node);
			for (const clause of node.heritageClauses ?? []) {
				if (clause.token === ts.SyntaxKind.ExtendsKeyword) {
					for (const t of clause.types) {
						const parent = t.expression.getText(sourceFile);
						declarations.classParents.set(name, parent);
						declarations.extendedClasses.add(parent);
					}
				}
			}
		}
		if (ts.isInterfaceDeclaration(node) && node.name)
			declarations.interfaces.set(node.name.text, node);
		if (ts.isTypeAliasDeclaration(node) && node.name)
			declarations.typeAliases.set(node.name.text, node);
		if (ts.isVariableStatement(node)) {
			for (const d of node.declarationList.declarations) {
				if (!ts.isIdentifier(d.name)) continue;
				const text =
					d.initializer?.getText(sourceFile) ?? d.type?.getText(sourceFile);
				if (text) declarations.consts.set(d.name.text, text);
			}
		}
		ts.forEachChild(node, visit);
	}
	visit(sourceFile);
	return declarations;
}

function getParentChain(
	className: string,
	classParents: Map<string, string>,
): string[] {
	const chain: string[] = [];
	let current = classParents.get(className);
	while (current) {
		chain.push(current);
		current = classParents.get(current);
	}
	return chain;
}

/** Recursively extract methods from an interface and all its parents. */
function extractInterfaceMethodsRecursive(
	interfaceName: string,
	category: string,
	declarations: Declarations,
	sourceFile: ts.SourceFile,
	visited = new Set<string>(),
): MethodInfo[] {
	if (visited.has(interfaceName)) return [];
	visited.add(interfaceName);

	const interfaceDecl = declarations.interfaces.get(interfaceName);
	if (!interfaceDecl) return [];

	const methods = extractMethods(
		interfaceDecl.members,
		category,
		sourceFile,
		false,
	);

	for (const parent of getExtendsClause(interfaceDecl, sourceFile)) {
		methods.push(
			...extractInterfaceMethodsRecursive(
				parent,
				category,
				declarations,
				sourceFile,
				visited,
			),
		);
	}

	return methods;
}

/** Parse the enabledMethods const to find blocked method names (value: false). */
function resolveBlockedMethods(declarations: Declarations): Set<string> {
	const blocked = new Set<string>();
	const text = declarations.consts.get("enabledMethods");
	if (text) {
		for (const match of text.matchAll(/(\w+)\s*:\s*false/g)) {
			blocked.add(match[1]);
		}
	}
	return blocked;
}

/** Extract $framerApiOnly methods from the class with their remapped public names. */
function extractApiOnlyMethods(
	declarations: Declarations,
	sourceFile: ts.SourceFile,
	referencedTypes: Set<string>,
): MethodInfo[] {
	const methods: MethodInfo[] = [];

	// Parse $framerApiOnly to get the set of public names
	const apiOnlyText = declarations.consts.get("$framerApiOnly");
	if (!apiOnlyText) return methods;
	const apiOnlyNames = new Set<string>();
	for (const match of apiOnlyText.matchAll(/readonly\s+(\w+)/g)) {
		apiOnlyNames.add(match[1]);
	}
	if (apiOnlyNames.size === 0) return methods;

	// Find matching computed-property methods in FramerPluginAPI classes
	for (const [className, classDeclaration] of declarations.classes) {
		if (!className.startsWith("FramerPluginAPI")) continue;
		for (const member of classDeclaration.members) {
			const memberName = member.name?.getText(sourceFile);
			if (!memberName) continue;
			const match = memberName.match(/\[\$framerApiOnly\.(\w+)\]/);
			if (!match) continue;
			const publicName = match[1];
			if (!apiOnlyNames.has(publicName)) continue;

			const refs = new Set<string>();
			collectMemberRefs(
				member as ts.TypeElement & ts.ClassElement,
				sourceFile,
				refs,
			);
			for (const ref of refs) referencedTypes.add(ref);

			const sig = getMethodSignature(member as ts.ClassElement, sourceFile);
			const doc = getJSDocComment(member, sourceFile)
				.replace(/@internal[^\n]*/g, "")
				.trim();

			methods.push({
				name: publicName,
				category: "framer",
				signature: sig.replace(memberName, publicName),
				description: doc,
				references: [...refs],
			});
		}
	}

	return methods;
}

function collectAllMethods(
	declarations: Declarations,
	sourceFile: ts.SourceFile,
) {
	const allMethods: MethodInfo[] = [];
	const allClasses: ClassInfo[] = [];
	const seen = new Set<string>();
	const referencedTypes = new Set<string>();

	function addMethods(methods: MethodInfo[]) {
		for (const m of methods) {
			const key = `${m.category}.${m.name}`;
			if (!seen.has(key)) {
				seen.add(key);
				allMethods.push(m);
			}
		}
	}

	function collectRefsFromMembers(
		members: ts.NodeArray<ts.ClassElement> | ts.NodeArray<ts.TypeElement>,
	) {
		for (const member of members)
			collectMemberRefs(member, sourceFile, referencedTypes);
	}

	// 1. Non-Framer classes (with inheritance)
	for (const [className, classDeclaration] of declarations.classes) {
		if (className.startsWith("FramerPluginAPI")) continue;

		if (
			declarations.extendedClasses.has(className) &&
			!declarations.classParents.has(className)
		)
			continue;

		allClasses.push({
			name: className,
			description: cleanDescription(classDeclaration, sourceFile),
		});

		const ownMethods = extractClassMethods(
			classDeclaration,
			className,
			sourceFile,
			declarations.interfaces,
		);
		collectRefsFromMembers(classDeclaration.members);

		for (const parentName of getParentChain(
			className,
			declarations.classParents,
		)) {
			const parentDeclaration = declarations.classes.get(parentName);
			if (!parentDeclaration) continue;
			const parentMethods = extractClassMethods(
				parentDeclaration,
				className,
				sourceFile,
				declarations.interfaces,
			);
			for (const parentMethod of parentMethods) {
				if (!ownMethods.some((m) => m.name === parentMethod.name))
					ownMethods.push(parentMethod);
			}
			collectRefsFromMembers(parentDeclaration.members);
		}

		addMethods(ownMethods);
	}

	// 2. Framer type: methods from the Framer = A & B & C & D intersection
	const framerAlias = declarations.typeAliases.get("Framer");
	if (framerAlias && ts.isIntersectionTypeNode(framerAlias.type)) {
		allClasses.push({ name: "framer", description: "" });
		const blockedMethods = resolveBlockedMethods(declarations);

		for (const typeNode of framerAlias.type.types) {
			if (!ts.isTypeReferenceNode(typeNode)) continue;
			const name = typeNode.typeName.getText(sourceFile);

			// Direct interfaces (e.g. FramerConnectionMethods, FramerScreenshotMethods)
			const interfaceDecl = declarations.interfaces.get(name);
			if (interfaceDecl) {
				// Collect refs from this interface and all parent interfaces
				// (mirrors the recursive method extraction below)
				const refVisited = new Set<string>();
				const refQueue = [name];
				while (refQueue.length > 0) {
					const ifaceName = refQueue.pop();
					if (!ifaceName) continue;
					if (refVisited.has(ifaceName)) continue;
					refVisited.add(ifaceName);
					const iface = declarations.interfaces.get(ifaceName);
					if (!iface) continue;
					collectRefsFromMembers(iface.members);
					for (const parent of getExtendsClause(iface, sourceFile)) {
						refQueue.push(parent);
					}
				}
				addMethods(
					extractInterfaceMethodsRecursive(
						name,
						"framer",
						declarations,
						sourceFile,
					),
				);
				continue;
			}

			// AvailablePluginMethods = Omit<FramerPluginAPIAlpha, BlockedMethods>
			// Extract from the class hierarchy, filtering out blocked methods.
			if (name === "AvailablePluginMethods") {
				for (const [className, classDeclaration] of declarations.classes) {
					if (!className.startsWith("FramerPluginAPI")) continue;
					if (
						declarations.extendedClasses.has(className) &&
						!declarations.classParents.has(className)
					)
						continue;

					const ownMethods = extractClassMethods(
						classDeclaration,
						"framer",
						sourceFile,
						declarations.interfaces,
					);
					collectRefsFromMembers(classDeclaration.members);

					for (const parentName of getParentChain(
						className,
						declarations.classParents,
					)) {
						const parentDecl = declarations.classes.get(parentName);
						if (!parentDecl) continue;
						const parentMethods = extractClassMethods(
							parentDecl,
							"framer",
							sourceFile,
							declarations.interfaces,
						);
						for (const pm of parentMethods) {
							if (!ownMethods.some((m) => m.name === pm.name))
								ownMethods.push(pm);
						}
						collectRefsFromMembers(parentDecl.members);
					}

					addMethods(ownMethods.filter((m) => !blockedMethods.has(m.name)));
				}
				continue;
			}

			// FramerApiOnlyMethods: remap $framerApiOnly computed-property methods
			if (name === "FramerApiOnlyMethods") {
				addMethods(
					extractApiOnlyMethods(declarations, sourceFile, referencedTypes),
				);
			}
		}
	}

	return { methods: allMethods, classes: allClasses, referencedTypes };
}

/** Transitive closure: expand all referenced types into structured TypeInfo. */
function collectAllTypes(
	referencedTypes: Set<string>,
	declarations: Declarations,
	sourceFile: ts.SourceFile,
): TypeInfo[] {
	const types: TypeInfo[] = [];
	const processed = new Set<string>();
	const queue = new Set(referencedTypes);

	while (queue.size > 0) {
		const name = queue.values().next().value as string;
		queue.delete(name);
		if (processed.has(name) || declarations.classes.has(name)) continue;
		processed.add(name);

		const interfaceDeclaration = declarations.interfaces.get(name);
		const alias = declarations.typeAliases.get(name);

		if (interfaceDeclaration) {
			const data = extractInterfaceData(interfaceDeclaration, sourceFile);
			const info: TypeInfo = {
				name,
				description: cleanDescription(interfaceDeclaration, sourceFile),
				kind: "interface",
				references: data.references,
			};
			if (data.members.length > 0) info.members = data.members;
			if (data.extends.length > 0) info.extends = data.extends;
			types.push(info);
			for (const ref of data.references) queue.add(ref);
		} else if (alias) {
			const data = extractTypeAliasData(alias, sourceFile, declarations.consts);
			types.push({
				name,
				description: cleanDescription(alias, sourceFile),
				kind: "alias",
				alias: data.alias,
				references: data.references,
			});
			for (const ref of data.references) queue.add(ref);
		}
	}

	return types;
}

function buildOutput(
	methods: MethodInfo[],
	classes: ClassInfo[],
	types: TypeInfo[],
): string {
	types.sort((a, b) => a.name.localeCompare(b.name));
	classes.sort((a, b) => a.name.localeCompare(b.name));
	methods.sort((a, b) =>
		a.category !== b.category
			? a.category.localeCompare(b.category)
			: a.name.localeCompare(b.name),
	);

	const typesRecord: Record<string, TypeInfo> = {};
	for (const t of types) typesRecord[t.name.toLowerCase()] = t;

	const classesRecord: Record<string, ClassInfo> = {};
	for (const c of classes) classesRecord[c.name.toLowerCase()] = c;

	const methodsByCategory: Record<string, MethodInfo[]> = {};
	for (const m of methods) {
		const key = m.category.toLowerCase();
		if (!methodsByCategory[key]) methodsByCategory[key] = [];
		methodsByCategory[key].push(m);
	}

	const stringify = (value: unknown) => JSON.stringify(value, null, "\t");

	return `// Auto-generated from framer-api declaration file. Do not edit manually.
// Run: npx tsx scripts/generate-types.ts

export interface TypeMember {
	name: string
	type: string
	description: string
	optional: boolean
}

export interface TypeInfo {
	name: string
	description: string
	kind: "interface" | "alias"
	members?: TypeMember[]
	extends?: string[]
	alias?: string
	references: string[]
}

export interface MethodInfo {
	name: string
	category: string
	signature: string
	description: string
	references: string[]
}

export interface ClassInfo {
	name: string
	description: string
}

export const types: Record<string, TypeInfo> = ${stringify(typesRecord)}

export const classes: Record<string, ClassInfo> = ${stringify(classesRecord)}

export const methodsByCategory: Record<string, MethodInfo[]> = ${stringify(methodsByCategory)}

/** Get a method by Category.methodName */
export function getMethod(query: string): MethodInfo | undefined {
	const [category, methodName] = query.split(".", 2)
	if (!methodName) return undefined
	const methods = methodsByCategory[category.toLowerCase()]
	return methods?.find(m => m.name === methodName)
}

/** Get class info and all its methods */
export function getClass(name: string): { info: ClassInfo; methods: MethodInfo[] } | undefined {
	const info = classes[name.toLowerCase()]
	if (!info) return undefined
	const methods = methodsByCategory[name.toLowerCase()] ?? []
	return { info, methods }
}

/** Get a type definition by name */
export function getType(name: string): TypeInfo | undefined {
	return types[name.toLowerCase()]
}
`;
}

function main() {
	console.log("Parsing:", FRAMER_API_DTS);
	if (!fs.existsSync(FRAMER_API_DTS)) {
		console.error(
			"Declaration file not found. Run 'make build' in framer-api first.",
		);
		process.exit(1);
	}

	const source = fs.readFileSync(FRAMER_API_DTS, "utf-8");
	const sourceFile = ts.createSourceFile(
		"index.d.ts",
		source,
		ts.ScriptTarget.Latest,
		true,
	);
	const declarations = parseDeclarations(sourceFile);
	const { methods, classes, referencedTypes } = collectAllMethods(
		declarations,
		sourceFile,
	);
	const types = collectAllTypes(referencedTypes, declarations, sourceFile);
	const output = buildOutput(methods, classes, types);

	fs.writeFileSync(OUTPUT_PATH, output);
	console.log(`Generated ${OUTPUT_PATH} with ${methods.length} methods`);
}

main();
