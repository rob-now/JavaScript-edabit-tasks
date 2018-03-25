/*
Create a function that takes an array of numbers and returns the mean average (fixed to two decimal places).

Rules
- Return mean average.
- Round to two decimal places.

Examples
[1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3] ➞ 2.54
[2, 3, 2, 3] ➞ 2.50
[3, 3, 3, 3, 3] ➞ 3.00

Notes
You can expect an integer ranging from 0 to 10000.
 */

function mean(arr) {
    let meanAvg = arr.reduce(function (a, b) {
        return (a + b);
    }) / arr.length;
    return parseFloat(meanAvg.toFixed(2));
}

console.log(mean([30, 40, 20, 100, 30]));