// Title Case a Sentence

/*

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

*/

function titleCase(str) {
  let toLow = str.toLowerCase();
  let splittedArr = toLow.split(" ");
  for (let i = 0; i < splittedArr.length; i++) {
    splittedArr[i] =
      splittedArr[i].charAt(0).toUpperCase() + splittedArr[i].slice(1);
  }
  let joinArr = splittedArr.join(" ");
  return joinArr;
}

titleCase("I'm a little tea pot");
