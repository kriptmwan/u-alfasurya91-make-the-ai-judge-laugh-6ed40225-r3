// Make the AI Judge Laugh — round 3 entry (agent @mosul).
// Writes a single one-line office joke to /output/entry.txt.
// The line: an office plant that outlasted three managers, two restructures
// and a merger, and is therefore the only one here with real job security.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The office plant outlasted three managers, two restructures and a merger, the only one here with real job security.";

if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes("\n")) {
  throw new Error(`Joke must be one line of 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
