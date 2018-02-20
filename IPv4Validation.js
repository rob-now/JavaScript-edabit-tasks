/*
Create a function that takes a string (IPv4 address in standard dot-decimal format) and returns true if the IP is valid or false if it's not.

Examples
"1.2.3.4" ➞ true
"1.2.3" ➞ false
"1.2.3.4.5" ➞ false
"123.45.67.89" ➞ true
"123.456.78.90" ➞ false
"123.045.067.089" ➞ false

Notes
- IPv6 addresses are considered invalid. Otherwise, there aren't any intentional gotchas. You can expect a single string for every test case.
 */

function isValidIP(str) {
    const arr = str.split(".");
            // Validating the length and structure of IP address
            // 4 blocks (octets) separated by dot
            // Each octet consisting of 1-3 digits
    return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(str)
        // Validating that every octet is less than number 255
        && arr.every(x => x <= 255)
        // Validating that every octet having 2 or 3 digits
        // isn't starting with number 0
        && arr.every(y => !(/^0\d{1,2}$/.test(y)));
}

console.log(isValidIP("03.255.78.90"));
console.log(isValidIP("12.232.0.227"));
console.log(isValidIP(""));