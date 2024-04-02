function adrBook(arr) {
	let book = {};

	for (let el of arr) {
		console.log(el);
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
