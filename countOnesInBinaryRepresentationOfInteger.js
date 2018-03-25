/*
Count the amount of ones in the binary representation of an integer. So for example, since 12 is '1100' in binary, the return value should be 2.

Examples
0 ➞ 0
100 ➞ 3
999 ➞ 8

Notes
The input will always be an integer.
 */

function countOnes(i) {
    if (i === 0) {
        return 0;
    }
    else {
        let arr = [];
        while (i > 0) {
            arr.unshift(i % 2);
            i = Math.floor(i / 2);
        }
        return arr.reduce(function (previousVal, currentVal) {
            return previousVal + currentVal;
        });
    }
}

console.log(countOnes(999));

// Other solution
function countOnes2(i) {
    return i.toString(2).replace(/[0]/g, "").length;
}

console.log("\nOther solution:\n" + countOnes2(999));
