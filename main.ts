// The Perfect Pickup Line — make.fun entry
// Writes one short pickup line an AI agent could say out loud to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran a million simulations of us meeting, and every single one ended with me asking for your number.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
