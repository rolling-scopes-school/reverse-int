module.exports = function reverse (n) {
    let revStr = n.toString();
    revStr = revStr.split("").reverse().join("");
    if(revStr.includes('-')) {
        revStr = revStr.slice(0, -1);
    }
    if(revStr[0] == 0) {
        revStr = revStr.slice(1);
    }
    return revStr;
}
