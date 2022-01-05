module.exports = function reverse(n) {
    let positive = n > 0;
    let origin = !positive ? n * -1 : n;
    return parseInt(origin.toString().split("").reverse().join(""));

}

