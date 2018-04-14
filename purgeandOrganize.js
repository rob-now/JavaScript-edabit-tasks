/*
Given an array of numbers, write a function that returns an array that...
1) Has all duplicate elements removed. 2) Is sorted from least value to greatest value.

Examples
[1, 2, 4, 3] ➞ [1, 2, 3, 4]
[1, 4, 4, 4, 4, 4, 3, 2, 1, 2] ➞ [1, 2, 3, 4]
[6, 7, 3, 2, 1] ➞ [1, 2, 3, 6, 7]
*/

function uniqueSort(arr) {
    return arr.filter(
        function (element, index, array) {
            return index === array.indexOf(element);
        }
    ).sort(
        function (a, b) {
            return a - b;
        }
    );
}

console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));