module.exports = function reverse (n) {
    let str = String(n);
    let newStr ='';
    for(let i = str.length; i > 0; i--){
      newStr = newStr + str[i-1];
    }
    return parseInt(newStr);
}
