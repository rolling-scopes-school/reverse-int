module.exports = function reverse (n) {

	let arr = String(Math.abs(n)).split('')

	let result =arr.reverse()
	
	return +result.join("")
}
