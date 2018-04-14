function letterCheck(arr) {
    var arr1 = arr[0].toLowerCase().split('');
    var arr2 = arr[1].toLowerCase().split('');
    var falsy = 0;
    for (var i = 0; i < arr2.length; i += 1) {

        if (arr1.indexOf(arr2[i]) === -1) {
            falsy += 1;
        }
    }
    return falsy === 0;
}

console.log(letterCheck(["trances", "nectar"]));
console.log(letterCheck(["THE EYES", "they see"]));
console.log(letterCheck(["arches", "later"]));


/*return arr2.forEach(function(element) {
    console.log(element);
    if (arr1.indexOf(element) === -1) {
        return false;
    }
    else {
        return true;
    }
});*/
// console.log('tar'.indexOf('t'));