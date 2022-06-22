module.exports = function reverse (n) {
    const module = Math.abs(n);
  const arr = module.toString().split('').reverse();
  const str = arr.join('');
  const num = +str;
  return num;
}
