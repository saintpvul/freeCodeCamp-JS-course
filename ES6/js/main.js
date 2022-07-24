//  Mutate an Array Declared with const

/*

An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.


*/

const s0 = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  let popS = s0.pop();
  let unshiftPop = s0.unshift(popS);
  return s0;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

const s1 = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s1[0] = 2;
  s1[1] = 5;
  s1[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
