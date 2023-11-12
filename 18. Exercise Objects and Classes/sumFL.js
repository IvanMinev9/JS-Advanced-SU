function solve(arr) {
	let wagons = arr[0].split(` `).map(Number);
	let capacity = Number(arr[1]);

	for (let i = 2; i < arr.length; i++) {
		let command = arr[i];
		let tokes = command.split(` `);

		if (tokes[0] == `Add`) {
			let pass = Number(tokes[1]);
			wagons.push(pass);
		} else {
			let pass = Number(tokes[0]);

			for (let index = 0; index < wagons.length; index++) {
				if (wagons[index] + pass <= capacity) {
					wagons[index] += pass;
					break;
				}
			}
		}
	}
	console.log(wagons.join(` `));
}
solve(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
