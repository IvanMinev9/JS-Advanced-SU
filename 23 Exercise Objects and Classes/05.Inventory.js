function heros(arr) {
	let herosInfo = [];

	for (let el of arr) {
		let [heroName, level, inv] = el.split(` / `);

		let objHeros = {
			hero: heroName,
			level: level,
			items: inv,
		};
		herosInfo.push(objHeros);
	}

	herosInfo.sort((a, b) => a.level - b.level);
	herosInfo.map((element) =>
		console.log(
			`Hero: ${element.hero}\nlevel => ${element.level}\nitems => ${element.items}`
		)
	);
}
heros([
	"Isacc / 25 / Apple, GravityGun",
	"Derek / 12 / BarrelVest, DestructionSword",
	"Hes / 1 / Desolator, Sentinel, Antara",
]);
heros([
	"Batman / 2 / Banana, Gun",
	"Superman / 18 / Sword",
	"Poppy / 28 / Sentinel, Antara",
]);
