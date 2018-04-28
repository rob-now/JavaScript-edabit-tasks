/*
Create a function that returns true if a number is a prime, and false if it is not. A prime is a natural number that is only divisible by 1 and itself.

Examples:
7 ➞ true
9 ➞ false
10 ➞ false
 */

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log("1", isPrime(1));
console.log("2", isPrime(2));
console.log("3", isPrime(3));
console.log("4", isPrime(4));
console.log("9", isPrime(9));