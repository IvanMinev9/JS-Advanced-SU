function jsOn(string) {
	let parsed = JSON.parse(string);
	let keys = Object.entries(parsed);
	for (let [prop, value] of keys) {
		console.log(`${prop}: ${value}`);
	}
}
jsOn('{"name": "George", "age": 40, "town": "Sofia"}');
jsOn('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
