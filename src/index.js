module.exports = function reverse (n) {

  n = n < 0 ? -n : n;
  str = n + "";
  newString = "";
  for (var i = str.length - 1; i >= 0; i--) { 
    newString += str[i];
  }
  // console.log(newString);
  n = newString;
  return n;
}
