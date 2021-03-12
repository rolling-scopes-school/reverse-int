module.exports = function reverse(n) {
    return (
        parseFloat(
            n
            .toString()
            .split('')
            .reverse()
            .join('')
        )
    )
}
