function convertObject(jsonString) {
	let parsedJSON = JSON.parse(jsonString);

	console.log(parsedJSON);
}
convertObject('{"name": "George", "age": 40, "town": "Sofia"}');
