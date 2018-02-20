/*
Create a function that takes an array of arrays with numbers.
Return a new (single) array with the largest numbers of each.

Examples
[[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]] ➞ [7, 90, 2]
[[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]] ➞ [-34, -2, 7]
[[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]] ➞ [0.7634, 9.32, 9]

Notes
- Watch out for negative integers.
 */

function findLargestNums(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var max = arr[i][0];
        for (var j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
        result.push(max);
    }
    return result;
}

console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));