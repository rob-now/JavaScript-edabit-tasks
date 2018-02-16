function findLargestNum(arr) {
    var num = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr [i] > num) {
            num = arr[i];
        }
    }
    return num;
}

console.log(findLargestNum([300, 200, 600, 150]));