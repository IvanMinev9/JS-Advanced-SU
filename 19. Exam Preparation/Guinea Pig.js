function pig(values) {
	let food = Number(values[0]) * 1000;
	let hay = Number(values[1]) * 1000;
	let cover = Number(values[2]) * 1000;
	let pigWeight = Number(values[3]) * 1000;
	let coverSpend = pigWeight / 3;

	for (let i = 1; i <= 30; i++) {
		food -= 300;
		if (i % 2 == 0) {
			hay -= food * 0.05;
		}
		if (i % 3 == 0) {
			cover -= coverSpend;
		}
		if (food <= 0 || hay <= 0 || cover <= 0) {
			console.log(`Merry must go to the pet store!`);
			return;
		}
	}
	console.log(
		`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
			2
		)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
	);
}

pig(["10", "5", "5.2", "1"]);
pig(["9", "5", "5.2", "1"]);
pig(["1", "1.5", "3", "1.5"]);
