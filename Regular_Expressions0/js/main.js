// Positive and Negative Lookahead

/*

Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.


*/

// Solution

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/g; // Change this line
let result = pwRegex.test(sampleWord);
