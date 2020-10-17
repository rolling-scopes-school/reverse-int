module.exports = function reverse (n) {
  let str = Math.abs(n).toString();
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
      reverseStr = `${reverseStr}${str[i]}`
  }

  return Number(reverseStr);
}
