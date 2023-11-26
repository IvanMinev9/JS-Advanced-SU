function users(arr) {
	let compUsers = {};

	for (let companyUserInfo of arr) {
		let [company, userId] = companyUserInfo.split(` -> `);

		if (company in compUsers) {
			if (!compUsers[company].includes(userId)) {
				compUsers[company].push(userId);
			}
		} else {
			compUsers[company] = [userId];
		}
	}

	let entries = Object.entries(compUsers).sort((a, b) =>
		a[0].localeCompare(b[0])
	);

	for (let [name, userIds] of entries) {
		console.log(name);
		userIds.forEach((id) => console.log(`-- ${id}`));
	}
}
users([
	"SoftUni -> AA12345",
	"SoftUni -> BB12345",
	"Microsoft -> CC12345",
	"HP -> BB12345",
]);
