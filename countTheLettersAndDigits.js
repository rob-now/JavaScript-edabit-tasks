/*
Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.

Examples
"Hello World" ➞ {"LETTERS":  10, "DIGITS": 0}
"H3ll0 Wor1d" ➞ {"LETTERS":  7, "DIGITS": 3}
"149990" ➞ {"LETTERS": 0, "DIGITS": 6}

Notes
- Tests contain only alphanumeric characters.
- Spaces are not letters.
- All tests contain valid strings.
 */

function countAll(str) {
  var findLetters = str.match(/[A-Z]/gi);
  var findDigits = str.match(/[0-9]/gi);

  return {
    LETTERS: findLetters === null ? 0 : findLetters.length,
    DIGITS: findDigits === null ? 0 : findDigits.length
  }
}

console.log(countAll('Hello'), {'LETTERS': 5, 'DIGITS': 0});
console.log(countAll('137'), {'LETTERS': 0, 'DIGITS': 3});
console.log(countAll('H3LL0'), {'LETTERS': 3, 'DIGITS': 2});
console.log(countAll('149990'), {'LETTERS': 0, 'DIGITS': 6});
console.log(countAll('edabit 2018'), {'LETTERS': 6, 'DIGITS': 4}, 'Spaces are not letters.');
console.log(countAll('    '), {'LETTERS': 0, 'DIGITS': 0});