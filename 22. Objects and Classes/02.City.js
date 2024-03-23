function cityVibes(city) {
	let townInfo = Object.keys(city);

	for (let entrA of townInfo) {
		console.log(`${entrA} -> ${city[entrA]}`);
	}
}
cityVibes({
	name: "Plovdiv",
	area: 389,
	population: 1162358,
	country: "Bulgaria",
	postCode: "4000",
});
cityVibes({
	name: "Sofia",
	area: 492,
	population: 1238438,
	country: "Bulgaria",
	postCode: "1000",
});

//https://www.youtube.com/watch?v=NH8dR2VXFho
