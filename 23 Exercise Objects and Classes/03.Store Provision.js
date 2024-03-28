function provision(localStock, orderedProducts) {
	let products = {};

	for (let i = 0; i < localStock.length; i += 2) {
		let productName = localStock[i];
		let qty = Number(localStock[i + 1]);

		products[productName] = qty;
	}

	for (let j = 0; j < orderedProducts.length; j += 2) {
		let productName = orderedProducts[j];
		let qty = Number(orderedProducts[j + 1]);

		if (productName in products) {
			products[productName] += qty;
		} else {
			products[productName] = qty;
		}
	}
	let entries = Object.entries(products);
	for (let entry of entries) {
		let [prodName, qty] = entry;
		console.log(`${prodName} -> ${qty}`);
	}
}
provision(
	["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

	["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

console.log(`--------------`);
provision(
	["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
	["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
