/*
Your job is to create a function that accepts a string as its only argument.
The function will return true if the email is valid and false if it's not. Super simple.

Rules
- The string must contain an " @ " character.
- The string must contain a " . " character.
- The "@" character must have a minimum of one character in front of it.
    * e@edabit.com is valid while @edabit.com is invalid.
- The " . " and the "@" must be in the appropriate places.
    * hello.email@com is invalid while john.smith@email.com is valid.
If the string passes these tests, it will be considered a valid email.

Examples
'@gmail.com' ➞ false
'hello.gmail@com' ➞ false
'gmail' ➞ false
'hello@gmail' ➞ false
'hello@edabit.com' ➞ true
'' ➞ false (an empty string)

Notes
Email validation can get more complicated than what we're going for here, but this challenge will satisfy 95% of use cases. If you're unsure of something, check out the lab tests to understand exactly what's being evaluated.
 */

function validateEmail(str) {
    const at = str.indexOf("@");
    const dot = str.lastIndexOf(".");
    // Counting the number of "@" in str; there should be only 1 occurrence
    var atChars = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "@") {
            atChars++;
        }
    }
    return (atChars === 1 && at !== 0 && at < dot && dot !== -1 && dot !== str.length - 1);
}

console.log(validateEmail("a.e@email.com"));