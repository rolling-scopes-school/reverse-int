module.exports = function reverse (n) {
    let init = n < 0 ? n * -1 : n;
    let initArr = String(init).split('');
    initArr.reverse();
    let result = initArr.join('');
   
    return Number(result);

}
