import { readFileSync } from "node:fs"
import { defineConfig } from "tsup"

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"))

// biome-ignore lint/style/noDefaultExport: tsup requires default export
export default defineConfig(options => {
	const isProd = !options.watch
	const isCi = process.env.CI === "true"

	const common = {
		format: ["esm"] as const,
		outDir: "dist",
		dts: true,
		tsconfig: "tsconfig.json",
		minify: false,
		sourcemap: isProd ? false : ("inline" as const),
		treeshake: isProd,
		target: "node24" as const,
		platform: "node" as const,
		splitting: false,
		keepNames: true,
		define: {
			__VERSION__: JSON.stringify(pkg.version),
		},
		silent: isCi,
	}

	return [
		// CLI entry point (with shebang)
		{
			...common,
			entry: ["src/cli.ts"],
			clean: true,
			banner: {
				js: `#!/usr/bin/env node\n/* @framer/ai CLI v${pkg.version} */`,
			},
		},
		// Relay server entry point (no shebang, spawned by node)
		{
			...common,
			entry: ["src/start-relay-server.ts"],
			clean: false,
			banner: {
				js: `/* @framer/ai relay server v${pkg.version} */`,
			},
		},
	]
})
