module.exports = function reverse (n) {
    n = Math.abs(n)
    var result = '';
    var i = n.toString().length;
    while (i > 0) {
        result = result + n.toString()[i-1]
        i -= 1;
    }
    return result
}
