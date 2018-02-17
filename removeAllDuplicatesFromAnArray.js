/*
Create a function that accepts an array as an argument.
Remove all duplicate items from the array and return the new array.

Rules
- Remove duplicate items from array.
- New array should be sequentially the same as old array, minus duplicate items.

Examples
["John", "Taylor", "John"] ➞ ["John", "Taylor"]
[1, 0, 1, 0] ➞ [1, 0]
['The', 'big', 'cat'] ➞ ['The', 'big', 'cat']

Notes
- Test cases contain arrays with both strings and numbers.
- Is case sensitive.
 */

function removeDups(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                arr.splice(j, 1, null);
            }
        }
    }
    return arr.filter(Boolean);
}

console.log(removeDups(["John", "Taylor", "John", "Taylor", "Mark", "Taylor", "John", "Taylor"]));