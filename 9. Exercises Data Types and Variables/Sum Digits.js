function sumDigits(number) {
	let numAsString = String(number);
	let sum = 0;

	for (let i = 0; i < numAsString.length; i++) {
		sum += Number(numAsString[i]);
	}
	console.log(sum);
}
sumDigits(245678);
