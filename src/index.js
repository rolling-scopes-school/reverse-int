module.exports = function reverse (n) {
    if (n < 0){
        let f = Math.abs(n);
       return Number(f.toString().split('').reverse().join(''))
  
    }
    return Number(n.toString().split('').reverse().join(''))
  
}
