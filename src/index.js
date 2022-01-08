module.exports = function reverse (n) {
    let num1 = n.toString().split('');
    if(num1[0]==='-')
    {
       let j= parseInt(num1);
       j*=-1;
       return j;
    }l
    let num = num1.reverse().join('');
    return parseInt(num);
    
   
   
}
