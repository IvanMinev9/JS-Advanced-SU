<<<<<<< HEAD
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
=======
function emp(arr) {
	for (let empName of arr) {
		let employee = { name: empName, personalNum: empName.length };

		console.log(
			`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`
		);
	}
}
emp(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
console.log(`*************`);
emp(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
>>>>>>> 6bef4aa0f564910614a6b2df0a828326565b25c6
