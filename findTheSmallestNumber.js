function findSmallestNum(arr) {
    arr.sort(function (a, b) {
       return a - b;
    });
    return arr.shift();
}

console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]));