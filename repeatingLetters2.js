function doubleChar(str) {
    var arr = str.split("");
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] += arr[i];
        arr2.push(arr[i]);
    }
    return arr2.join("");
}

console.log(doubleChar("Hello World!"));