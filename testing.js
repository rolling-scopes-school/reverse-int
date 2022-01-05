module.exports = function reverse(n) {
    let positive = n > 0;
    let reversed = n.toString().split("").reverse().join("");
    return  positive ? parseInt(reversed)  : parseInt(reversed ) * -1;

}

