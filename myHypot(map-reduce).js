/*
You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map and .reduce to solve the following problem.
Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.

Rules
- The array can have any length.
- The values in the array can be all real numbers.
- Use both .map() and .reduce in your solution.
- Don't use Math.hypot() in the solution

Examples
magnitude([3, 4]) ➞ 5
magnitude([0, 0, -10] ➞ 10
magnitude([]) ➞ 0
magnitude([2, 3, 6, 1, 8]) ➞ 10.677078252031311
 */

//var magnitude = vector => //code goes here

function myHypot(vector) {
    return vector.length !== 0
        ? Math.sqrt(vector.map(function (val) {
                return val * val;
            }).reduce(function (a, b) {
                return a + b;
            })
        )
        : 0;
}

console.log(myHypot([0, 0, 4, 5]));