function inventoryHero(arr) {
	let heroInfo = [];

	for (let element of arr) {
		let [heroName, heroLevel, inventory] = element.split(` / `);

		let objJHero = { hero: heroName, level: heroLevel, items: inventory };
		heroInfo.push(objJHero);
	}
	for (let el of heroInfo) {
		let [heroName, heroLevel, inventory] = el;
		console.log(heroName);
	}
}
inventoryHero([
	"Isacc / 25 / Apple, GravityGun",
	"Derek / 12 / BarrelVest, DestructionSword",
	"Hes / 1 / Desolator, Sentinel, Antara",
]);
inventoryHero([
	"Batman / 2 / Banana, Gun",
	"Superman / 18 / Sword",
	"Poppy / 28 / Sentinel, Antara",
]);
