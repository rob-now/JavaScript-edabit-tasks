/*
Create a function that takes a string (the string to truncate) and a number (the maximum length of the truncated string) as arguments and returns the truncated string at the given length.

Examples
("Lorem ipsum dolor sit amet.", 11)  ➞  "Lorem ipsum"
("Lorem ipsum dolor sit amet.", 16)  ➞  "Lorem ipsum"
("Lorem ipsum dolor sit amet.", 17)  ➞  "Lorem ipsum dolor"

// Only whole words
("Lorem ipsum", 11)  ➞  "Lorem"

Notes
To "truncate" means "to shorten by cutting off the top or end".
If a word is trucated in the middle, discard it in the output (see 4th example above).
 */

function truncate(string, length) {
  const arr = string.split(' ');
  const sliced = string.slice(0, length).split(' ');
  return sliced.filter(
    (slice, index) =>
      slice === arr[index]
  ).join(' ');
}

console.log(truncate('Lorem ipsum dolor sit amet.', 11));
console.log(truncate('Lorem ipsum dolor sit amet.', 16));
console.log(truncate('Lorem ipsum dolor sit amet.', 0));
console.log(truncate('', 30));