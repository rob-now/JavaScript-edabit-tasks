/*
Create a function that accepts an array of 10 integers (between 0 and 9) and returns a string of those numbers in the form of a phone number.

Examples
[1, 2, 3, 4, 5, 6, 7, 8, 9, 0] ➞ "(123) 456-7890"
[5, 1, 9, 5, 5, 5, 4, 4, 6, 8] ➞ "(519) 555-4468"
[3, 4, 5, 5, 0, 1, 2, 5, 2, 7] ➞ "(345) 501-2527"

Notes
- Don't forget the space after the closing parenthese.
 */

function formatPhoneNumber(numbers) {
    var str = "";
    return str.concat("(" + numbers.slice(0, 3).join("") + ") "
        + numbers.slice(3, 6).join("") + "-"
        + numbers.slice(6).join(""));
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));