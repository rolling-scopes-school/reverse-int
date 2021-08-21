module.exports = function reverse (n) {
if (n<0) {n=-n;}
    
let result = 0;
let middle = 0;

    while (n>0) {
        middle = n % 10;
        result = result * 10 + middle;
        n = Math.floor(n / 10); 
    }

  return result;
}

