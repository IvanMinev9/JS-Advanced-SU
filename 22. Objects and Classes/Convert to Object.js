function convertObject(jsonString) {
	let parsedJSON = JSON.parse(jsonString);

	let keys = Object.entries(parsedJSON);

	for (let [prop, value] of keys) {
		console.log(`${prop}: ${value}`);
	}
}
convertObject('{"name": "George", "age": 40, "town": "Sofia"}');
