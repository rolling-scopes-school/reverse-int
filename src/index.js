module.exports = function reverse (n) {
 var result = '';
 var b = Math.abs (n) 
  while(b>0){
   result = result + (b%10);
   b = parseInt(b/10);
  } 
  return result;
}
