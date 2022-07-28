// Reverse a String

/*

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

*/

function reverseString(str) {
  let toArr = str.split('');
  let reverse = toArr.reverse();
  let toStr = reverse.join('');
  return toStr;
}

reverseString("hello");
