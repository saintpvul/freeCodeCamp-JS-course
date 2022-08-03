//  Use the some Method to Check that Any Elements in an Array Meet a Criteria

/*

Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

*/

// Solution

function checkPositive(arr) {
  // Only change code below this line
  return arr.some((v) => v > 0);

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
