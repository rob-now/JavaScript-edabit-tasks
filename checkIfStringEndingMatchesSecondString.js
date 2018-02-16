function checkEnding(str1, str2) {
    var indexStr1 = str1.length - 1;
    var result;
    for (var i = str2.length - 1; i >= 0; i--) {
        if (str2[i] === str1[indexStr1]) {
            result = true;
        } else {
            result = false;
        }
        indexStr1--;
    }
    return result;
}

console.log(checkEnding("feminine", "nine"));