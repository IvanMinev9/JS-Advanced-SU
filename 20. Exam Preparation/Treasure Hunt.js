function lootTreasure(arr) {
	let initialLoot = arr.shift().split(`|`);

	let command = arr.shift();

	while (command != `Yohoho!`) {
		let tokens = command.split(` `);
		let action = tokens.shift();

		if (action == `Loot`) {
			let items = tokens
				.filter((items) => !initialLoot.includes(items))
				.forEach((items) => initialLoot.unshift(items));
		} else if (action == `Drop`) {
			let index = Number(tokens.shift());
			if (index >= 0 && index < initialLoot.length) {
				let delItems = initialLoot.splice(index, 1).shift();
				initialLoot.push(delItems);
			}
		} else if (action == `Steal`) {
			let count = Number(tokens.shift());
			let removedItems = initialLoot.splice(-count);
			console.log(removedItems.join(`, `));
		}

		command = arr.shift();
	}
	let gain = 0;

	for (let ell of initialLoot) {
		gain += ell.length;
	}

	let avgGain = gain / initialLoot.length;

	if (initialLoot <= 0) {
		console.log(`Failed treasure hunt.`);
	} else {
		console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
	}
}
lootTreasure([
	"Gold|Silver|Bronze|Medallion|Cup",
	"Loot Wood Gold Coins",
	"Loot Silver Pistol",
	"Drop 3",
	"Steal 3",
	"Yohoho!",
]);

console.log(`------------`);
lootTreasure([
	"Diamonds|Silver|Shotgun|Gold",
	"Loot Silver Medals Coal",
	"Drop -1",
	"Drop 1",
	"Steal 6",
	"Yohoho!",
]);
