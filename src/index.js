module.exports = function reverse (n) {
    n = Math.abs(n);
    let x = n.toString(10);
    let y = x[2] + x[1] + x[0];
    return parseInt(y, 10);
}
