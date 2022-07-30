// Find the Longest Word in a String

/*

Return the length of the longest word in the provided sentence.

Your response should be a number.

*/

function findLongestWordLength(str) {
  let spliceStr = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < spliceStr.length; i++) {
    if (spliceStr[i].length > longestWord) {
      longestWord = spliceStr[i].length;
    }
  }
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
