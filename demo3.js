function encryptMessages(inputArray) {
  const messageCount = parseInt(inputArray[0], 10);
  const results = [];

  for (let i = 1; i <= messageCount; i++) {
    const message = inputArray[i];
    const pattern =
      /^([*@])([A-Z][a-z]{2,})(\1): \[([A-Za-z])\]\|\[([A-Za-z])\]\|\[([A-Za-z])\]\|$/;
    const match = message.match(pattern);

    if (match) {
      const tag = match[2];
      const charCodes = [match[4], match[5], match[6]].map((char) =>
        char.charCodeAt(0)
      );
      results.push(`${tag}: ${charCodes.join(" ")}`);
    } else {
      results.push("Valid message not found!");
    }
  }

  return results;
}

// Example usage:
const inputs = [
  "3",
  "*Request*: [I]|[s]|[i]|",
  "*Taggy@: [73]|[73]|[73]|", // This message is invalid and should not be encrypted
  "Should be valid @Taggy@: [v]|[a]|[l]|", // This message is missing the closing "|"
];

console.log(encryptMessages(inputs).join("\n"));
