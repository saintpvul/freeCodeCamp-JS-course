// Convert HTML Entities

/*

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*/

// Solution

function convertHTML(str) {
  let regex = /[<|>|&|"|']/g;
  let replaceStr = str.replace(regex, function (match) {
    if (match === "<") {
      return "&lt;";
    } else if (match === ">") {
      return "&gt;";
    } else if (match === "&") {
      return "&amp;";
    } else if (match === '"') {
      return "&quot;";
    } else if (match === "'") {
      return "&apos;";
    }
  });
  return replaceStr;
}

convertHTML("Dolce & Gabbana");
