function solve(arr) {
	for (let epmName of arr) {
		let objEpm = { name: epmName, personalNumber: epmName.length };
		console.log(
			`Name: ${objEpm.name} -- Personal Number: ${objEpm.personalNumber}`
		);
	}
}
solve([
	"Silas Butler",
	"Adnaan Buckley",
	"Juan Peterson",
	"Brendan Villarreal",
]);

solve(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
