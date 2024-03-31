function catalogue(arr) {
	let product = [];

	for (let el of arr) {
		let [name, price] = el.split(` : `);
		price = Number(price);

		product.push({ name, price });
	}
	let sortedPro = product.sort((a, b) => a.name.localeCompare(b.name));

	let currLet = ``;
	for (let el of sortedPro) {
		let firstLet = el.name[0];

		if (currLet != firstLet) {
			currLet = firstLet;
			console.log(currLet);
		}
		console.log(`  ${el.name}: ${el.price}`);
	}
}
catalogue([
	"Appricot : 20.4",
	"Fridge : 1500",
	"TV : 1499",
	"Deodorant : 10",
	"Boiler : 300",
	"Apple : 1.25",
	"Anti-Bug Spray : 15",
	"T-Shirt : 10",
]);
catalogue(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);
