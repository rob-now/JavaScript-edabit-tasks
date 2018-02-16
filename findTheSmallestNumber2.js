function findSmallestNum(arr) {
    var num = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < num) {
            num = arr[i];
        }
    }
    return num;
}

console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]));