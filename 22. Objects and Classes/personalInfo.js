function personF(firstName, lName, age) {
	let person = {
		firstName: firstName,
		lastName: lName,
		age: age,
	};

	return person;
}
let info = personF(`Peter`, `Pan`, 20);
console.log(info);
