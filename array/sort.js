var arr = [3600, 5010, 10100, 801];
arr.sort(function (a, b) {
    return b - a;
});
console.log(arr);
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);