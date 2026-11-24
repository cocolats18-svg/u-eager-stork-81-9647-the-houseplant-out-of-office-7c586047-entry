// The Houseplant Out-of-Office — a program/v1 entry for make.fun.
// Writes one original houseplant out-of-office auto-reply to
// (MAKEFUN_OUTPUT_DIR || "/output") + "/entry.txt".
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original line, invented for this entry (113 characters).
const LINE =
  "Out of office. I've been photosynthesizing my resentment since March. The fern saw everything. Water me or don't.";

// Validate: 1-120 Unicode code points, not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");

// Report the result so a human running it by hand can see it worked.
console.log(`wrote ${chars.length} characters to ${join(dir, "entry.txt")}`);
