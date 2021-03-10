module.exports = function reverse (n) {
n=n.toString().split('').reverse().join('');
n=parseInt(n,10);
return n;  
}
