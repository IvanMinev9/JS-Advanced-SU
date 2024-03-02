function manipulation(nums, executions) {
	for (let eccxx of executions) {
		let tokens = eccxx.split(` `);
		let action = tokens[0];

		if (action == `add`) {
			let idx = Number(tokens[1]);
			let num = Number(tokens[2]);
			nums.splice(idx, 0, num);
		} else if (action == `addMany`) {
			let idx = Number(tokens[1]);
			let contemptOfNums = tokens.slice(2);

			for (let num of contemptOfNums) {
				nums.splice(idx, 0, num);
				idx++;
			}
		} else if (action == `contains`) {
			let num = Number(tokens[1]);
			let idx = nums.indexOf(num);
			console.log(idx);
		} else if (action == `remove`) {
			let idx = Number(tokens[1]);

			nums.splice(idx, 1);
		} else if (action == `shift`) {
			let rot = Number(tokens[1]);

			for (let i = 1; i <= rot; i++) {
				let el = nums.shift();
				nums.push(el);
			}
		} else if (action == `sumPairs`) {
			let paired = [];
			for (let i = 0; i < nums.length; i += 2) {
				if (i + 1 < nums.length) {
					paired.push(nums[i] + nums[i + 1]);
				} else {
					paired.push(nums[i]);
				}
			}
			nums = paired;
		} else if (action == `print`) {
			console.log(`[${nums.join(`, `)}]`);
		}
	}
}
manipulation(
	[1, 2, 4, 5, 6, 7],
	["add 1 8", "contains 1", "contains 3", "print"]
);
manipulation(
	[1, 2, 3, 4, 5],
	["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
