function provision(stock, deliveryProducts) {
	let products = {};

	for (let i = 0; i < stock.length; i += 2) {
		let nameProduct = stock[i];
		let qty = Number(stock[i + 1]);

		products[nameProduct] = qty;
	}

	for (let add = 0; add < deliveryProducts.length; add += 2) {
		let nameProduct = deliveryProducts[add];
		let qty = Number(deliveryProducts[add + 1]);

		if (nameProduct in products) {
			products[nameProduct] += qty;
		} else {
			products[nameProduct] = qty;
		}
	}
	let kvps = Object.entries(products);
	for (let entry of kvps) {
		console.log(`${entry[0]} -> ${entry[1]}`);
	}
}
provision(
	["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
	["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
