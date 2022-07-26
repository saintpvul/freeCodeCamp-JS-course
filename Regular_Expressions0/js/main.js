// Specify Exact Number of Matches

/*

Change the regex timRegex to match the word Timber only when it has four letter m's.


*/

// Solution

let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i; // Change this line
let result = timRegex.test(timStr);
