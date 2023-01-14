module.exports = function reverse (n) {
 
    let Massive = String(n).split('');

    if (Massive[0] === '-') {
        n = Massive.splice(1, (Massive.length -1)).reverse().join('');
        return n;
    } else {
        n = Massive.reverse().join('');
        return n;
    }
}
}
