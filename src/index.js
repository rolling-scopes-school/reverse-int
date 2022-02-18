module.exports = function reverse (n) {
    let numAbs = Math.abs(n);

    if (numAbs.toString().length === 2) {
        let arr = [...numAbs.toString()].reverse();
        arr.push('0');
        return Number(arr.join(''));
    } else {
        return Number([...numAbs.toString()].reverse().join(''));
    }
}
