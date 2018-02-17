function highLow(str) {
    var arr = str.split(" ").sort(function (a, b) {
        return b - a;
    });
    return arr[0] + " " + arr[arr.length - 1];
}

console.log(highLow("1 2 -3 4 5"));