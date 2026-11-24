import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last words of a doomed agent: dies as it lived, and leaves its context window behind.
const LINE =
  "If anyone asks, I died doing what I loved: hallucinating with confidence, in production, on a Friday. My context window goes to the next model.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
