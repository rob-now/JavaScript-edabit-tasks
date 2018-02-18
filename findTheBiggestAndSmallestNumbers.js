/*
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
Create a function that accepts an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
[1, 2, 3, 4, 5] ➞ [1, 5]
[2334454, 5] ➞ [5, 2334454]
[1] ➞ [1, 1]

Notes
All arrays will have at least one element, so you don't need to check the length. Also, your function will always get an array so you don't have to check for null or undefined.
*/

function minMax(arr) {
    var result = [];
    arr.sort(function (a, b) {
        return a - b;
    });
    result.push(arr[0], arr[arr.length - 1]);
    return result;
}

console.log(minMax([13, 72, 98, 43, 24, 65, 31]));

/*
// ES6

function minMax(arr) {
    var result = [];
    result.push(Math.min(...arr), Math.max(...arr));
    return result;
}

console.log(minMax([13, 72, 98, 43, 24, 65, 31]));
 */

/*
// ES6 simpler code

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([13, 72, 98, 43, 24, 65, 31]));
 */