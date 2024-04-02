function adrBook(arr) {
	let book = {};

	for (let el of arr) {
		let [name, address] = el.split(`:`);

		book[name] = address;
	}

	let entry = Object.entries(book).sort((a, b) => a[0].localeCompare(b[0]));

	for (let el of entry) {
		let [name, adr] = el;
		console.log(`${name} -> ${adr}`);
	}
}
adrBook([
	"Tim:Doe Crossing",
	"Bill:Nelson Place",
	"Peter:Carlyle Ave",
	"Bill:Ornery Rd",
]);
console.log(`--------------`);
adrBook([
	"Bob:Huxley Rd",
	"John:Milwaukee Crossing",
	"Peter:Fordem Ave",
	"Bob:Redwing Ave",
	"George:Mesta Crossing",
	"Ted:Gateway Way",
	"Bill:Gateway Way",
	"John:Grover Rd",
	"Peter:Huxley Rd",
	"Jeff:Gateway Way",
	"Jeff:Huxley Rd",
]);
