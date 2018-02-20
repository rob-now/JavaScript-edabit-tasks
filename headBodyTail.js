/*
Write a function that takes four string arguments. You will be comparing the first string to the three next strings. Verify if the first string starts with the second string, includes the third string, and ends with the fourth string. If the first string passes all checks, return the string "My head, body, and tail.", otherwise, return "Incomplete.".

Examples
"Onomatopeia", "on", "mato", "ia" ➞ "Incomplete."
"Centipede", "Cent", "tip", "pede" ➞ "My head, body, and tail."

Notes
- You'll always get four strings as arguments.
 */

function verifySubstrs(mainStr, head, body, tail) {
    if (mainStr.startsWith(head)
        && mainStr.includes(body)
        && mainStr.endsWith(tail)) {
        return "My head, body, and tail.";
    } else {
        return "Incomplete.";
    }
}

console.log(verifySubstrs("Onomatopeia", "on", "mato", "ia"));