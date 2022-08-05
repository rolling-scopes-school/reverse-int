module.exports = function reverse (n) {
  return [...`${Math.abs(n)}`].reverse().join('');
}
