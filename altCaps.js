function alternatingCaps(str) {
    var arr = str.toLowerCase().split('');
    return arr.map(function (currentValue, index) {
        return index % 2 === 0 ? currentValue.toUpperCase() : currentValue;
    }).join('');
}

console.log(alternatingCaps('alternating caps'));
console.log(alternatingCaps("Hello, what's your name?"));