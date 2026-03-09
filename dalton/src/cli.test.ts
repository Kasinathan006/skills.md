import { execFileSync } from "node:child_process";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { version } from "../package.json";

const cliPath = path.resolve("dist/cli.js");

function cli(args: string[]): {
	stdout: string;
	stderr: string;
	exitCode: number;
} {
	try {
		const stdout = execFileSync("node", [cliPath, ...args], {
			timeout: 5000,
			encoding: "utf-8",
			stdio: ["pipe", "pipe", "pipe"],
		});
		return { stdout, stderr: "", exitCode: 0 };
	} catch (err) {
		const e = err as { stdout: string; stderr: string; status: number };
		return {
			stdout: e.stdout ?? "",
			stderr: e.stderr ?? "",
			exitCode: e.status ?? 1,
		};
	}
}

describe("cli e2e", () => {
	describe("docs", () => {
		it("shows framer class with no arguments", () => {
			const { stdout, exitCode } = cli(["docs"]);
			expect(exitCode).toBe(0);
			expect(stdout).toContain("class framer {");
			expect(stdout).toContain("getCollections");
			expect(stdout).not.toMatch(/\t\[/);
		});

		it("shows class methods and properties", () => {
			const { stdout, exitCode } = cli(["docs", "Collection"]);
			expect(exitCode).toBe(0);
			expect(stdout).toContain("class Collection {");
			expect(stdout).toContain("getFields(): Promise<Field[]>");
			expect(stdout).toContain("addItems(");
			// Properties should appear alongside methods
			expect(stdout).toContain("managedBy: CollectionManagedBy");
		});

		it("shows method with inlined types", () => {
			const { stdout, exitCode } = cli(["docs", "Collection.getFields"]);
			expect(exitCode).toBe(0);
			expect(stdout).toMatchSnapshot();
		});

		it("looks up a type by name", () => {
			const { stdout, exitCode } = cli(["docs", "Field"]);
			expect(exitCode).toBe(0);
			expect(stdout).toMatchSnapshot();
		});

		it("handles multiple queries", () => {
			const { stdout, exitCode } = cli([
				"docs",
				"Collection.getFields",
				"Field",
			]);
			expect(exitCode).toBe(0);
			// Both should be present
			expect(stdout).toContain("Collection.getFields(): Promise<Field[]>");
			expect(stdout).toContain("type Field =");
		});

		it("exits 1 when mixing valid and invalid queries", () => {
			const { stdout, stderr, exitCode } = cli([
				"docs",
				"Field",
				"NonExistent",
			]);
			expect(exitCode).toBe(1);
			expect(stdout).toContain("type Field =");
			expect(stderr).toContain("not found");
		});

		it("exits 1 for unknown method", () => {
			const { stderr, exitCode } = cli(["docs", "Collection.nonExistent"]);
			expect(exitCode).toBe(1);
			expect(stderr).toContain("not found");
		});

		it("exits 1 for unknown class or type", () => {
			const { stderr, exitCode } = cli(["docs", "NonExistent"]);
			expect(exitCode).toBe(1);
			expect(stderr).toContain("not found");
		});

		it("includes API-only methods in framer class listing", () => {
			const { stdout, exitCode } = cli(["docs"]);
			expect(exitCode).toBe(0);
			expect(stdout).toContain("publish(): Promise<PublishResult>");
			expect(stdout).toContain("deploy(");
			expect(stdout).toContain("getDeployments(): Promise<Deployment[]>");
		});
	});

	describe("skill", () => {
		it("outputs server API docs with no topic", () => {
			const { stdout, exitCode } = cli(["skill"]);
			expect(exitCode).toBe(0);
			expect(stdout).toContain("## CLI Usage");
			expect(stdout).toContain("## All Skills");
		});

		it("outputs code component docs", () => {
			const { stdout, exitCode } = cli(["skill", "code-components"]);
			expect(exitCode).toBe(0);
			expect(stdout).toContain("# Framer Code Components");
			expect(stdout).toContain("## All Skills");
		});

		it("outputs property controls docs", () => {
			const { stdout, exitCode } = cli(["skill", "property-controls"]);
			expect(exitCode).toBe(0);
			expect(stdout).toContain("# Framer Property Controls");
			expect(stdout).toContain("## All Skills");
		});

		it("outputs component examples docs", () => {
			const { stdout, exitCode } = cli(["skill", "component-examples"]);
			expect(exitCode).toBe(0);
			expect(stdout).toContain("# Framer Code Component Examples");
			expect(stdout).toContain("## All Skills");
		});

		it("exits 1 for unknown topic", () => {
			const { stderr, exitCode } = cli(["skill", "nonexistent"]);
			expect(exitCode).toBe(1);
			expect(stderr).toContain("Unknown skill topic");
			expect(stderr).toContain("code-components");
		});
	});

	describe("version", () => {
		it("prints version with --version", async () => {
			const { stdout, exitCode } = await cli(["--version"]);

			expect(exitCode).toBe(0);
			expect(stdout.trim()).toBe(version);
		});
	});

	describe("help", () => {
		it("prints help with --help", async () => {
			const { stdout, exitCode } = await cli(["--help"]);

			expect(exitCode).toBe(0);
			expect(stdout).toContain("Framer Server API CLI");
			expect(stdout).toContain("docs");
			expect(stdout).toContain("session");
		});
	});
});
