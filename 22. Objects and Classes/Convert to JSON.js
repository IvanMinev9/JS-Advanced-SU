function convertToJSON(firstName, lastName, hairColor) {
	let obEl = {
		name: firstName,
		lastName: lastName,
		hairColor: hairColor,
	};

	let jsonString = JSON.stringify(obEl);
	console.log(jsonString);
}
convertToJSON("George", "Jones", "Brown");
