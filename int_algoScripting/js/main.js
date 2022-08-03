// Pig Latin

/*

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

*/

// Solution

function translatePigLatin(str) {
  let consonantRegex = /^[^aeoui]+/;
  let matchConsonant = str.match(consonantRegex);
  return matchConsonant !== null
    ? str.replace(consonantRegex, "").concat(matchConsonant).concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
