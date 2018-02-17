/*
Create a function that takes an array of numbers and returns the following statistics:
Minimum Value
Maximum Value
Sequence Length
Average Value

Examples
[6, 9, 15, -2, 92, 11] ➞ [-2, 92, 6, 21.833333333333332]
[30, 43, 20, 92, 3, 74] ➞ [3, 92, 6, 43.666666666666664]
[4.54, 8.32, 5.20] ➞ [4.54, 8.32, 3, 6.02]

Notes
You don't even have to round the average.
 */

function minMaxLengthAverage(arr) {
    var result = [];
    result.push(
        arr.reduce(function (a, b) {
            return Math.min(a, b);
        }),
        arr.reduce(function (a, b) {
            return Math.max(a, b);
        }),
        arr.length,
        arr.reduce(function (a, b) {
            return (a + b);
        }) / arr.length
    );
    return result;
}

console.log(minMaxLengthAverage([6, 9, 15, -2, 92, 11]));