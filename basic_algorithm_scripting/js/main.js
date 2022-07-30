// Repeat a String Repeat a String

/*

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

*/

function repeatStringNumTimes(str, num) {
  let repeatStr = "";
  while (num > 0) {
    repeatStr += str;
    num--;
  }
  return repeatStr;
}

repeatStringNumTimes("abc", 3);

function repeatStrNumTimes(str, num) {
  let emptyStr = "";
  if (num <= 0) return "";

  if (num === 1) return str;
  else return (emptyStr = str + repeatStrNumTimes(str, num - 1));
}
