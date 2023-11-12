function distNum(arr) {
	let unN = [];

	for (let num of arr) {
		if (!unN.includes(num)) {
			unN.push(num);
		}
	}
	console.log(unN.join(` `));
}
distNum([7, 8, 9, 7, 2, 3, 4, 1, 2]);
