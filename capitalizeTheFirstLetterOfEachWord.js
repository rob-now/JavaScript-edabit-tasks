/*
Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

Examples
"This is a title" ➞ "This Is A Title"
"capitalize every word" ➞ "Capitalize Every Word"
"I Like Pizza" ➞ "I Like Pizza"
"PIZZA PIZZA PIZZA" ➞ "PIZZA PIZZA PIZZA"

Notes
You can expect a valid string for each test case.
 */

function makeTitle(str) {
  return str.split(' ').map(
    word =>
      word.substr(0, 1).toUpperCase()
      + word.substr(1)
  ).join(' ');
}


console.log(makeTitle('the first letter of every word is capitalized'));
console.log(makeTitle("Don't count your ChiCKens BeFore They HatCh"));
console.log(makeTitle("I am a title"));
console.log(makeTitle("I AM A TITLE"));