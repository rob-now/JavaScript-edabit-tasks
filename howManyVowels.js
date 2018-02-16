function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    var count = 0;
    for (var i = 0; i < vowels.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (str[j] === vowels[i]) {
                count++;
            }
        }
    }
    return count;
}

console.log(countVowels("Prediction"));