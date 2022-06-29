module.exports = function reverse (n) {
    let y = Math.abs(n).toString();
   return (y.split('').reverse().join(''))
}
