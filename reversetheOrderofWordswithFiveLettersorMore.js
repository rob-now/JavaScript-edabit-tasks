/*
Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples
"Reverse" ➞ "esreveR"
"This is a typical sentence." ➞ "This is a lacipyt .ecnetnes"
"The dog is big." ➞ "The dog is big."

Notes
You can expect a valid string to be provided for each test case.
 */

function reverse(str) {
    return str.split(' ').map(
        function (element) {
            return element.length >= 5 ? element.split('').reverse().join('') : element;
        }
    ).join(' ');
}

console.log(reverse('This is a typical sentence.'));
console.log(reverse('The big cat.'));