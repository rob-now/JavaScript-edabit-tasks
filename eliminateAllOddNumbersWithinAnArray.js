function noOdds(arr) {
    return arr.filter(function(even){
        return even % 2 === 0;
    });
}

console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8]));