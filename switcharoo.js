/*
Given a string of varying length, write a function that accepts this string and returns a new string that swaps the first and last characters except under two conditions:
1. If the length of the string is less than 2 OR the argument is not a string, return "Incompatible.".
2. If the first and last characters are the same, return "Two's a pair.".

Examples
"Cat, dog, and mouse." ➞ ".at, dog, and mouseC"
"ada" ➞ "Two's a pair."
"z" ➞ "Incompatible."
 */

function flipEndChars(str) {
  if (str.length < 2 || typeof str !== 'string') {
    return "Incompatible.";
  }
  else if (str.substr(0, 1) === str.substr(str.length - 1)) {
    return "Two's a pair.";
  }
  else {
    return str.substr(str.length - 1) + str.substr(1, str.length - 2) + str.substr(0, 1);
  }
}

console.log(flipEndChars("Cat, dog, and mouse."));
console.log(flipEndChars(""));
console.log(flipEndChars("ada"));
