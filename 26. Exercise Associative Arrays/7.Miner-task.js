function minerTask(arr) {
	let resources = {};

	for (let i = 0; i < arr.length; i += 2) {
		let resource = arr[i];
		let qty = Number(arr[i + 1]);

		if (resource in resources) {
			resources[resource] += qty; // enter the resources object and take the key resource, then take his qty
		} else {
			resources[resource] = qty;
		}
	}
	let entries = Object.entries(resources);

	for ([resName, resQty] of entries) {
		console.log(`${resName} -> ${resQty}`);
	}
}
minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
