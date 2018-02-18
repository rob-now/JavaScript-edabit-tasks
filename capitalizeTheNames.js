/*
Create a function that takes an array of names and returns an array with the first letter capitalized.

Rules
- Return an array.
- Don't change the order of the original array.
Examples

["mavis", "senaida", "letty"] ➞ ["Mavis", "Senaida", "Letty"]
["samuel", "MABELLE", "letitia", "meridith"] ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
["Slyvia", "Kristal", "Sharilyn", "Calista"] ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]

Notes
- Notice in the second example above, "MABELLE" is returned as "Mabelle".
 */

function capMe(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].substr(0, 1).toUpperCase() + arr[i].substr(1).toLowerCase();
    }
    return arr;
}

console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]));