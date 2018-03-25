/*
Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.

Examples
123 ➞ 321
1254859723 ➞ 9875543221
73065 ➞ 76530

Gotchas
You can expect a non-negative number for all test cases.
 */

function sortDescending(num) {
    return Number(num.toString().split("").sort(function (a, b) {
        return b - a;
    }).join(""));
}

console.log(sortDescending(123));