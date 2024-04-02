function meet(arr) {
	let appointments = {};
	for (let el of arr) {
		let [weekDay, name] = el.split(` `);

		if (appointments.hasOwnProperty(weekDay)) {
			console.log(`Conflict on ${weekDay}!`);
			continue;
		} else {
			console.log(`Scheduled for ${weekDay}`);
		}

		appointments[weekDay] = name;
	}
	let entry = Object.entries(appointments);
	for (let [day, name] of entry) {
		console.log(`${day} -> ${name}`);
	}
}
meet(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);

console.log(`------------`);
meet([
	"Friday Bob",
	"Saturday Ted",
	"Monday Bill",
	"Monday John",
	"Wednesday George",
]);
