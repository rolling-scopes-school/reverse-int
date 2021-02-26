module.exports = function reverse(n) {
    const arr = n.toString().split('');
    return parseInt(arr.reverse().join(''));
}