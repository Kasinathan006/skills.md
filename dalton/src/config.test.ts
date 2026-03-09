import { describe, expect, it } from "vitest";
import { extractProjectId } from "./config.js";

describe("extractProjectId", () => {
	it("returns project ID unchanged if already an ID", () => {
		expect(extractProjectId("iZuj7ckK08dqHwgH0GtT")).toBe(
			"iZuj7ckK08dqHwgH0GtT",
		);
	});

	it("extracts ID from full project URL", () => {
		expect(
			extractProjectId(
				"https://framer.com/projects/Asirox-copy--iZuj7ckK08dqHwgH0GtT-iInDP",
			),
		).toBe("iZuj7ckK08dqHwgH0GtT");
	});

	it("extracts ID from URL with query params", () => {
		expect(
			extractProjectId(
				"https://framer.com/projects/Asirox-copy--iZuj7ckK08dqHwgH0GtT-iInDP?node=xxx",
			),
		).toBe("iZuj7ckK08dqHwgH0GtT");
	});

	it("extracts ID from URL with fragment", () => {
		expect(
			extractProjectId(
				"https://framer.com/projects/Asirox-copy--iZuj7ckK08dqHwgH0GtT-iInDP#section",
			),
		).toBe("iZuj7ckK08dqHwgH0GtT");
	});

	it("handles URL with simple project name", () => {
		expect(
			extractProjectId("https://framer.com/projects/Website--aabbccdd1122"),
		).toBe("aabbccdd1122");
	});

	it("handles project name with hyphens", () => {
		expect(
			extractProjectId(
				"https://framer.com/projects/my-cool-site--abc123def456",
			),
		).toBe("abc123def456");
	});

	it("handles URL with multiple -- separators in name", () => {
		expect(
			extractProjectId("https://framer.com/projects/test--name--xyz789"),
		).toBe("xyz789");
	});
});
