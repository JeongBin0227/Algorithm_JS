function commaizeNumber(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(commaizeNumber(10000))