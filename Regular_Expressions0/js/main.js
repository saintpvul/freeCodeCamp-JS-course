// Ignore Case While Matching

/*

Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

*/

// Solution

let myString = "freeCodeCamp";
let fccRegex = /FrEEcOdEcamP/i; // Change this line
let result = fccRegex.test(myString);
