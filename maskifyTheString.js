/*
Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.

Your task is to create a function that takes a string, transforms all but the last four characters into '#' and returns the new masked string.

Examples
"4556364607935616" ➞ "############5616"
"64607935616" ➞ "#######5616"
"1" ➞ "1"
"" ➞ ""

Notes
- The maskify function must accept a string of any length.
 */

function maskify(str) {
    // Defining how many characters at the end of str won't be masked
    const unmaskCount = 4;

    return (str.length > unmaskCount)
        ? "#".repeat(str.length - unmaskCount) + str.substr(str.length - unmaskCount)
        : str;
}

console.log(maskify("554665765@#%$$#%DFHHB935616"));
console.log(maskify("1234"));