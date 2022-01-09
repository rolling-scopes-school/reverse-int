module.exports = function reverse (n) {
  let numb = String(n).split('');
  let str = '';
  if(n < 0){
    let N = Math.abs(n);
    let numb = String(N).split('');
    return String(numb.reverse().join(''))
  }else  return String(numb.reverse().join(''))
}

