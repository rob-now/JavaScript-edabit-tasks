/*
Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

Examples
true ➞ false
false ➞ true
0 ➞ "boolean expected"
null ➞ "boolean expected"

Notes
If the input is not a boolean, return the string "boolean expected".
 */

const reverse = bool =>
  typeof bool === 'boolean' ? !bool : 'boolean expected';

console.log(reverse(false), true);
console.log(reverse(true), false);
console.log(reverse(0), "boolean expected");
console.log(reverse(null), "boolean expected");
console.log(reverse(undefined), "boolean expected");
console.log(reverse({}), "boolean expected");