// Spinal Tap Case

/*

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/

// Solution

function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

spinalCase("This Is Spinal Tap");
