module.exports = function reverse (n) {
  n = Math.abs(n).toString().split('').reverse().join('')
  n = Number(n)
  return n
}
