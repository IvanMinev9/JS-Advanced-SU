function book(arr) {
	let book = {};

	for (let el of arr) {
		let [name, phone] = el.split(` `);

		book[name] = phone;
	}
	let entry = Object.entries(book);

	for (let [name, phone] of entry) {
		console.log(`${name} -> ${phone}`);
	}
}
book([
	"Tim 0834212554",
	"Peter 0877547887",
	"Bill 0896543112",
	"Tim 0876566344",
]);
book(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);

function solve(input) {
	let pb = {};

	let parsed = input.map((el) => el.split(` `));

	pb = Object.fromEntries(parsed);

	console.log(Object.entries(pb)).join(` -> `).join(`\n`);
}
solve([
	"Tim 0834212554",
	"Peter 0877547887",
	"Bill 0896543112",
	"Tim 0876566344",
]);

solve(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);
