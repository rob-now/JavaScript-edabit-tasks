/*
Create a function that takes a string, removes all "special" characters (e.g. !@#$%^&\*) and returns the new string. The only non-alphanumeric characters allowed are dashes (-) and underscores (_).

Examples
"The quick brown fox!" ➞ "The quick brown fox"
"%fd76$fd(-)6GvKlO." ➞ "fd76fd-6GvKlO"
"D0n$c sed 0di0 du1" ➞ "D0nc sed 0di0 du1"
 */

function removeSpecialCharacters(str) {
    return str.match(/[A-Za-z0-9\s_-]/g).join("");
}

console.log(removeSpecialCharacters("D0n$c sed 0di0 du1"));