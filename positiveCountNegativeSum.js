function countPosSumNeg(nums) {
    return Array.isArray(nums) && nums.length > 0
        ? Array(
            nums.filter(
                function (currentValue) {
                    return currentValue > 0;
                }
            ).length
            ,
            nums.filter(
                function (currentValue) {
                    return currentValue < 0;
                }
            ).reduce(
                function (currentValue, nextValue) {
                    return currentValue + nextValue;
                }
            )
        )
        : [];
}

console.log(countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPosSumNeg([]));