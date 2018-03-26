/*
Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.

Examples
[1, 2, 3] ➞ [1, 3, 6]
[1, -2, 3] ➞ [1, -1, 2]
[3, 3, -2, 408, 3, 3] ➞ [3, 6, 4, 412, 415, 418]

Notes
Return an empty array if the input is an empty array.
 */

function cumulativeSum(array) {
    if (array.length === 0) {
        return [];
    }
    else {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            let subArray = array.slice(0, i + 1).reduce(function (a, b) {
                return a + b;
            });
            newArray.push(subArray);
        }
        return newArray;
    }
}

console.log(cumulativeSum([3, 3, -2, 408, 3, 3]));