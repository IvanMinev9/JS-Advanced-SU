function city(cityInfo) {
	let keys = Object.keys(cityInfo);
	for (let entriesInfo of keys) {
		console.log(entriesInfo, `->`, cityInfo[entriesInfo]);
	}
}
city({
	name: "Sofia",
	area: 492,
	population: 1238438,
	country: "Bulgaria",
	postCode: "1000",
});

function solve(cityD) {
	for (let [prop, value] of Object.entries(cityD)) {
		console.log(prop, `->`, value);
	}
}
solve({
	name: "Sofia",
	area: 492,
	population: 1238438,
	country: "Bulgaria",
	postCode: "1000",
});
