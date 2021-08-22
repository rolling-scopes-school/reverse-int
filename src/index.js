module.exports = function reverse (n) {
    n = n < 0 ? n * -1 : n;
    let initArr = String(n).split('');
    initArr.reverse;
    let result = initArr.join('');
   
    return Number(result);
}
