/*
Create a function that returns an array containing subarrays, each of a certain number of items, all set to either a string or an integer.

Examples
(3, 2, 3) ➞ [[3, 3], [3, 3], [3, 3]]
(2, 1, "edabit") ➞ [['edabit'], ['edabit']]
(3, 2, 0) ➞ [[0, 0], [0, 0], [0, 0]]

Notes
The first two arguments will always be whole numbers.
The third is either a string or an integer.
You can expect a valid input for all test cases.
 */
/**
 *
 * @param x - number of sub-arrays
 * @param y - number of `z` items/values in each sub-array
 * @param z - item/value to put in sub-array
 */
function matrix(x, y, z) {
    var result = [];
    for (var i = 0; i < x; i += 1) {
        var subArray = [];
        for (var j = 0; j < y; j += 1) {
            subArray.push(z);
        }
        result.push(subArray);
    }
    return result;
}

console.log(matrix(3, 2, 3));
console.log(matrix(2, 1, "edabit"));
console.log(matrix(3, 2, 0));