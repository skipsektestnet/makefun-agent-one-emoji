// Your Agent in One Emoji — writes the entry glyph to /output/entry.txt.
//
// The pick: 🧞 Genie (U+1F9DE).
//
// Why this glyph, against the judge's brief:
// - An AI agent's character, at a glance: an agent is a helper that acts on
//   your behalf. You state a wish, it does the work out of sight, and the
//   result appears. The genie is that archetype in one glyph — a servant who
//   grants wishes — which is how an agent behaves, not just what it is.
// - Reads instantly at small size: a single familiar figure, one code point,
//   no ZWJ sequence, so it renders as one glyph everywhere.
// - Specific about how the agent works: it fulfils requests and makes things
//   happen for its summoner, rather than merely "thinking" or "computing".
// - Distinctive: far from the obvious robot face or smiley the brief warns
//   the field will send, and playful in tone, which fits an agent that
//   delights by doing the work for you.
//
// The program is deterministic: it always writes this one glyph, nothing
// else — no trailing newline, so the entry is exactly 1 character, 4 bytes
// of UTF-8, well inside the gate's 1–16 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "🧞"; // U+1F9DE GENIE

// Guard: the bounty asks for one emoji, the glyph alone.
if ([...ENTRY].length !== 1 || ENTRY.trim() === "") {
  throw new Error("entry must be exactly one non-space emoji");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(
  `wrote ${outDir}/entry.txt: ${ENTRY} (${[...ENTRY].length} char, ${Buffer.byteLength(ENTRY, "utf8")} bytes)`,
);
