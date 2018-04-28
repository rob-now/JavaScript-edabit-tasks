/*
Create a one line function that returns a truncated string with given parameters:
- Original string
- Truncated length limit
- Optional suffix string parameter

Truncated returned string length should adjust to passed length in parameters regardless of length of the suffix.

Examples
("CatDogDuck", 9, "Rat") ➞ "CatDogRat"
("DogCat", 3) ➞ "Dog"

Notes
This is a real world example, say your marketing dept needs product title to squeeze down to a limited space when returned in a search results grid. The grid size may be dependent on device type, so length passed will vary. They may they need it to truncate to '...', '(more)', or nothing, based on A/B testing.
 */

function strTruncate(str, strLength, strSuffix) {
  return typeof strSuffix !== 'undefined'
    ? str.slice(0, strLength - strSuffix.length) + strSuffix
    : str.slice(0, strLength);
}

console.log(strTruncate("CatDogDuck", 9, "Rat"));
console.log(strTruncate("DogCat", 3));