/*
The museum of incredible dull things wants to get rid of some exhibitions. Betty, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating. However, just as she finished rating all exhibitions, she's off to an important meeting, so she asks you to write a program that tells her the ratings of the items after the lowest one is removed.

Rules
Create a function that takes an array of numbers and remove the smallest value. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array, return an empty array.

Examples
[1, 2, 3, 4, 5] ➞ [2, 3, 4, 5]
[5, 3, 2, 1, 4] ➞ [5, 3, 2, 4]
[2, 2, 1, 2, 1] ➞ [2, 2, 2, 1]

Notes
Don't change the order of the items that are left.
 */

function removeSmallest(arr) {
  arr.splice(
    arr.indexOf(
      Math.min.apply(null, arr)
    ), 1
  );
  return arr;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
