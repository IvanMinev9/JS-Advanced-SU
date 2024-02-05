function solve(product, qty) {
	let result = ``;
	let price = 0;

	switch (product) {
		case `coffee`:
			price = 1.5 * qty;
			break;
		case `water`:
			price = 1.0;
			break;
		case `coke`:
			price = 1.4;
			break;
		case `snacks`:
			price = 2.0;
		default:
			break;
	}

	console.log(result.toFixed(2));
}
solve("water", 5);
solve("coffee", 2);
