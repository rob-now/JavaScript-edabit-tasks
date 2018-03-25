/*
Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

Examples
"test" ➞ "es"
"testing" ➞ "t"
"middle" ➞ "dd"
"A" ➞ "A"

Notes
All test cases contain a single word (as a string).
 */

function getMiddle(str) {
    // Common var
    var strHalfLength = (str.length / 2);
    // Even
    if (str.length % 2 === 0) {
        return str.substr(strHalfLength - 1, 2);
    }
    // Odd
    else {
        return str.substr(Math.floor(strHalfLength), 1);
    }
}

console.log(getMiddle("middle"));