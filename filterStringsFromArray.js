function filterArray(arr) {
    return arr.filter(function(val){
       return typeof val === "number";
    });
}

console.log(filterArray([1, 2, "aasf", "1", "123", 123]));