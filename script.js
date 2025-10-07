function stringChop(str, size) {
  // Return empty array if input is invalid
  if (!str) return [];

  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String:");
const size = Number(prompt("Enter Chunk Size:"));
alert(stringChop(str, size));
