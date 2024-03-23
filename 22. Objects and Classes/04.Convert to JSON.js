function convert(fName, lName, hairColor) {
	let person = {
		name: fName,
		lastName: lName,
		hairColor: hairColor,
	};
	let personString = JSON.stringify(person);
	console.log(personString);
}
convert("George", "Jones", "Brown");
convert("Peter", "Smith", "Blond");
