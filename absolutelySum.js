function getAbsSum(arr){
    var absSum = 0;
    for (var i = 0; i < arr.length; i++) {
        absSum += Math.abs(arr[i]);
    }
    return absSum;
}

console.log(getAbsSum([2, -1, 4, 8, 10]));