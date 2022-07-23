// Use the parseInt Function with a Radix
/*

Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

*/

function convertToInteger(str) {
  let toInt = parseInt(str, 2);
  return toInt;
}

convertToInteger("10011");
