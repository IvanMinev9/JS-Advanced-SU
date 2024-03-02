function manipulation(nums, executions) {
	for (let command of executions) {
		let tokens = command.split(` `);
		let action = tokens[0];

		if (action == `add`) {
			let idx = Number(tokens[1]);
			let num = Number(tokens[2]);

			nums.splice(idx, 0, num);
		} else if (action == `addMany`) {
			let idx = Number(tokens[1]);
			let numsToAdd = tokens.slice(2);

			for (let num of numsToAdd) {
				nums.splice(idx, 0, num);
			}
		} else if (action == `contains`) {
			let num = Number(tokens[1]);

			let idx = nums.indexOf(num);

			console.log(idx);
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
