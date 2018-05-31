/*
Create a function that calls an object property with procedural like style.

Examples
magic.replace("azerty", "a", "A") ➞ "Azerty"
magic.length("hello word") ➞ 10
magic.trim("  javascript is awesome  ") ➞ "javascript is awesome"
magic.slice([1, 2, 3, 4, 5], 2, 4) ➞ [ 3, 4 ]
 */

let magic = (() => ({
    trim: str => str.trim(),
    length: str => str.length,
    slice: (arr, startIdx, endIdx) =>
      arr.slice(startIdx, endIdx),
    replace: (str, letterToReplace, letter) =>
      str.replace(letterToReplace, letter)
  })
)();

console.log(magic.trim("  javascript is awesome  "), "javascript is awesome");
console.log(magic.length("hello word"), 10);
console.log(magic.slice([1, 2, 3, 4, 5], 2, 4)[0], 3);
console.log(magic.slice([1, 2, 3, 4, 5], 2, 4)[1], 4);
console.log(magic.replace("azerty", "a", "A"), "Azerty");