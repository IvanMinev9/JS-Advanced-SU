function warship(arr) {
	let pirateShip = arr[0].split(`>`).map(Number);
	let warShip = arr[1].split(`>`).map(Number);
	let maxCap = Number(arr[2]);
	let critical = maxCap * 0.2;

	for (let info of arr) {
		let tokens = info.split(` `);
		let command = tokens.shift();

		if (command == `Retire`) {
			break;
		} else if (command == `Fire`) {
			let index = Number(tokens[0]);
			let damage = Number(tokens[1]);

			if (index < 0 || index >= warShip.length) {
				continue;
			}

			warShip[index] -= damage;

			if (warShip[index] <= 0) {
				console.log(`You won! The enemy ship has sunken.`);
				return;
			}
		} else if (command == `Defend`) {
			let startIndex = Number(tokens[0]);
			let endIndex = Number(tokens[1]);
			let damage = Number(tokens[2]);

			if (
				startIndex < 0 ||
				startIndex >= pirateShip.length ||
				endIndex < 0 ||
				endIndex >= pirateShip.length
			) {
				continue;
			}
			for (let i = startIndex; i <= endIndex; i++) {
				pirateShip[i] -= damage;

				if (pirateShip[i] < 0) {
					console.log(`You lost! The pirate ship has sunken.`);
					return;
				}
			}
		} else if (command == `Repair`) {
			let index = Number(tokens[0]);
			let repair = Number(tokens[1]);
			pirateShip[index] += repair;
			if (pirateShip[index] > maxCap) {
				pirateShip[index] = maxCap;
			}
		} else if (command == `Status`) {
			let damaged = pirateShip.filter((section) => section < critical);
			console.log(`${damaged.length} sections need repair.`);
		}
	}

	let pirateShipStatus = 0;
	let warShipStatus = 0;

	for (let section of pirateShip) {
		pirateShipStatus += section;
	}

	for (let section of warShip) {
		warShipStatus += section;
	}
	console.log(`Pirate ship status: ${pirateShipStatus}`);
	console.log(`Warship status: ${warShipStatus}`);
}
warship([
	"12>13>11>20>66",
	"12>22>33>44>55>32>18",
	"70",
	"Fire 2 11",
	"Fire 8 100",
	"Defend 3 6 11",
	"Defend 0 3 5",
	"Repair 1 33",
	"Status",
	"Retire",
]);
console.log(`-/-/-/-//-/`);
warship([
	"2>3>4>5>2",
	"6>7>8>9>10>11",
	"20",
	"Status",
	"Fire 2 3",
	"Defend 0 4 11",
	"Repair 3 18",
	"Retire",
]);
