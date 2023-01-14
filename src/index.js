
module.exports = 
function reverse(n) {
    let Massive = String(n).split('');

    if (Massive[0] === '-') {
        n = Massive.splice(1, (Massive.length -1)).reverse().join('');
        // console.log(n);
        return n;
    } else {

        n = Massive.reverse().join('');
        return n;
    }
}

// console.log(reverse(-1234567));



