function detonate(nums, bombNum) {
	let [bomb, power] = bombNum;

	while (nums.includes(bomb)) {
		let index = nums.indexOf(bomb);
		nums.splice(Math.max(0, index - power), power * 2 + 1, 0);
	}
	let sum = 0;

	for (let num of nums) {
		sum += num;
	}
	console.log(sum);
}
detonate([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
detonate([1, 4, 4, 2, 8, 9, 1], [9, 3]);
