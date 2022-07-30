// Chunky Monkey

/*

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

*/

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) newArr.push(arr[i]);
    else {
      newArr.push(arr[i]);
      result.push(newArr);
      newArr = [];
    }
  }

  if (newArr.length !== 0) result.push(newArr);
  return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
