module.exports = function reverse (n) {
    let i = n.toString().split('').reverse().join('');
    return parseInt(i);
}
