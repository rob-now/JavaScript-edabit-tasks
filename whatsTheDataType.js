/*
Create a function that returns the data type of a given variable. These are the eight data types this challenge will be testing for:
String
Number
Array
Date
Boolean
Null
Undefined
Object

Examples
dataType([1, 2, 3, 4]) ➞ "array"
dataType({key: "value"}) ➞ "object"
dataType("This is an example string.") ➞ "string"
dataType(new Date()) ➞ "date"

Notes
Don't forget to return the name of the data type as a lowercase string. For example, return "array" and not Array or ARRAY.
 */

function dataType(value) {
    if (Array.isArray(value)) {
        return 'array';
    }
    else if (value instanceof Date) {
        return 'date';
    }
    else if (value === null) {
        return 'null'
    }
    else if (value instanceof Object) {
        return 'object';
    }
    else return typeof value;
}

console.log(dataType("This is an example string."));
console.log(dataType(100));
console.log(dataType([1, 2, 3, 4]));
console.log(dataType(new Date()));
console.log(dataType(true));
console.log(dataType(null));
console.log(dataType(undefined));
console.log(dataType({key: "value"}));
