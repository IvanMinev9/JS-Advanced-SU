function store(arr) {
	let map = new Map();

	for (let el of arr) {
		let [name, qty] = el.split(` `);
		qty = Number(qty);

		if (!map.has(name)) {
			map.set(name, qty);
		} else {
			let currQty = map.get(name);
			currQty += qty;
			map.set(name, currQty);
		}
	}
	for (let [name, qty] of map) {
		console.log(`${name} -> ${qty}`);
	}
}
store(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
store(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
