/*
Create a function that takes an object and returns the keys and values as separate arrays.

Examples
{a: 1, b: 2, c: 3} ➞ [["a", "b", "c"], [1, 2, 3]]
{a: "Apple", b: "Microsoft", c: "Google"} ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
{key1: true, key2: false, key3: undefined} ➞ [["key1", "key2", "key3"], [true, false, undefined]]

Notes
You can expect all test cases to contain valid objects.
 */
/**
 *
 * @param obj
 */
function keysAndValues(obj) {
    var result = [];
    var keys = [];
    var values = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)){
            keys.push(key);
            values.push(obj[key]);
        }
    }
    result.push(keys, values);
    return result;
}

console.log(keysAndValues({a: 1, b: 2, c: 3}));
console.log(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"}));
console.log(keysAndValues({key1: true, key2: false, key3: undefined}));