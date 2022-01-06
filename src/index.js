module.exports = function reverse (n) {
    if (n > 0) {
   return Array.from(n.toString()).reverse().join('')
    } else if (n < 0) {
        return  (Array.from(n.toString()).reverse().join('')).slice(0, -1)
    }
}
