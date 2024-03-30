function heros(arr) {
	let heroes = [];

	for (let element of arr) {
		element = element.split(" / ");

		let heroName = element.shift();
		let level = element.shift();
		let items = element
			.join("")
			.split(", ")
			.sort((a, b) => b.localeCompare(b));

		let hero = {
			name: heroName,
			level: Number(level),
			items: items,
		};

		heroes.push(hero);
	}

	let heroesAscending = [];
	heroesAscending.push(heroes.shift());

	for (let hero of heroes) {
		let level = hero.level;

		if (level < heroesAscending[0].level) {
			heroesAscending.unshift(hero);
		} else if (level > heroesAscending[heroesAscending.length - 1].level) {
			heroesAscending.push(hero);
		}
	}

	for (let hero of heroesAscending) {
		console.log(
			`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(
				", "
			)}`
		);
	}
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
