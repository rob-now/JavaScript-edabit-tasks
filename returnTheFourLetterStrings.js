function isFourLetters(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt", "Rob", "Kate"]));