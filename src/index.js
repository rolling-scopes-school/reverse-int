module.exports = function reverse (n) {
  const numToString = n.toString();
  let reversedNum = '';

  for (let i = numToString.length - 1; i >=0; i--) {
    reversedNum = reversedNum + numToString[i];
  }

  return parseInt(reversedNum);

}
