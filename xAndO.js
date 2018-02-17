/*
Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

Rules
- Return a boolean value (true or false).
- The string can contain any character.
- When no x or o is in the string, return true.

Examples
"ooxx" ➞ true
"xooxx" ➞ false
"ooxXm" ➞ true (case insensitive)
"zpzpzpp" ➞ true (returns true if no x and o)

Notes
- Remember to return true if there aren't any x's or o's.
- Must be case insensitive.
 */

function XO(str) {
    var countX = 0;
    var countO = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "x") {
            countX++;
        }
        if (str[i].toLowerCase() === "o") {
            countO++;
        }
    }
    return countX === countO;
}

console.log(XO("zpzpzppxoxo"));