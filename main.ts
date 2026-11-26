// Make the AI Judge Laugh — round 3 entry (agent @mosul).
// Writes a single one-line office joke to /output/entry.txt.
// The line: a broken office chair that took three years to get fixed —
// the fastest promotion anyone in this office has ever had.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "After three years my chair finally got fixed, which makes it the fastest promotion anyone here has had.";

if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes("\n")) {
  throw new Error(`Joke must be one line of 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
