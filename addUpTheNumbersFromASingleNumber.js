function addUp(num) {
    var result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }
    return result;
}

console.log(addUp(13));