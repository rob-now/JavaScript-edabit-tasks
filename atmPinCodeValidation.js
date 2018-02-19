/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.

Examples
"1234" ➞ true
"12345" ➞ false
"a234" ➞ false
"" ➞ false

Notes
- Some test cases contain special characters.
- Empty strings must return false.
 */

function validatePIN(pin) {
    return (/^(\d{4}|\d{6})$/g.test(pin));
}

console.log(validatePIN("1234"));
console.log(validatePIN("123456"));