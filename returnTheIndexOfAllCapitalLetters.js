/*
Create a function that takes a single string as argument and returns an ordered list containing the indexes of all capital letters in the string.

Examples
"eDaBiT" ➞ [1, 3, 5]
"eQuINoX" ➞ [1, 3, 4, 6]
"determine" ➞ []
"STRIKE" ➞ [0, 1, 2, 3, 4, 5]
"sUn" ➞ [1]

Notes
Return an empty array if no uppercase letters are found in the string.
Special characters ($#@%) and numbers will be included in some test cases.
 */

function indexOfCaps(str) {
  const arr = str.split('');
  return arr.map(
    (letter, index) =>
      [index, letter]).filter(
    arr =>
      arr[1].match(/[A-Z]/)
  ).map(arr => arr[0]);
}

console.log("1:", indexOfCaps("eDaBiTaD"));
console.log("2:", indexOfCaps("STRIKE"));
console.log("3:", indexOfCaps("determine"));
console.log("4:", indexOfCaps("@xCE#8S#i*$en"));