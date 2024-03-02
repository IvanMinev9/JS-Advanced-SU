function search(nums, threeNums) {
	let [numsCount, dellCount, searchedNum] = threeNums;
	let count = 0;

	let newNums = nums.splice(0, numsCount);
	newNums.splice(0, dellCount);

	for (let num of newNums) {
		if (searchedNum == num) {
			count++;
		}
	}
	console.log(`Number ${searchedNum} occurs ${count} times.`);
}
search([5, 2, 3, 4, 1, 6], [5, 2, 3]);
console.log(`-------------------------------`);
search([7, 1, 5, 8, 2, 7], [3, 1, 5]);
