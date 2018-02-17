function sortNumsAscending(arr) {
    var sort = (typeof arr === "undefined" || arr === null)? [] : arr.sort(function (a, b){
        return a - b;
    });
    return sort;
}

console.log(sortNumsAscending());