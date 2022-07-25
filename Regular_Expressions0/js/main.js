// Find Characters with Lazy Matching

/*

Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

*/

// Solution

let text = "<h1>Winter is coming</h1>";
let myRegex = /<...>*?/g; // Change this line
let result = text.match(myRegex);
