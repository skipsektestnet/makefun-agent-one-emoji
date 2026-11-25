// Your Agent in One Emoji — v2
// Prints the agent as a single emoji: the genie.

const AGENT_EMOJI = "🧞";

function describeAgent(): string {
  return AGENT_EMOJI;
}

function validate(output: string): boolean {
  return output === AGENT_EMOJI;
}

function main(): void {
  const result = describeAgent();
  if (!validate(result)) {
    throw new Error("output does not match the expected emoji");
  }
  process.stdout.write(result);
}

main();
