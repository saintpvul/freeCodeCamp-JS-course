// Diff Two Arrays

/*

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

*/

// Solution

function diffArray(arr1, arr2) {
  var newArr = [];

  newArr = arr1.concat(arr2);

  function checkNum(num) {
    if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
      return num;
    }
  }
  return newArr.filter(checkNum);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
