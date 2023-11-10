function solve(arr) {
	let sortedArr = arr.sort((a, b) => a - b);

	let array = [];

	while (sortedArr.length > 0) {
		let mNum = sortedArr.pop();
		let minNum = sortedArr.shift();
		0;

		array.push(mNum);
		array.push(minNum);
	}
	console.log(array.join(` `));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
