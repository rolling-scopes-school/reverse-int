module.exports = function reverse (n) {
  let arr = parseInt(String(n).split('').reverse().join(''));
    return arr;
}
