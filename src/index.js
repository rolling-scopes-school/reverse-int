module.exports = function reverse (n) {
  let str = n.toString();
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return parseInt(newStr);
}
