function solve(arr) {
	// let copy = [];
	// let obj = {};

	// for (let element of arr) {
	//     let converted = JSON.parse(element);
	//     if (typeof converted === 'object') {
	//         for (let key in converted) {
	//             obj[key] = converted[key];
	//         }
	//     }

	// }
	// for (let key in obj) {
	//     copy.push(`Term: ${key} => Definition: ${obj[key]}`)

	// }

	let array = input.reduce((acc, curr, i) => {
		let term = Object.keys(JSON.parse(curr))[0];
		let text = Object.values(JSON.parse(curr))[0];
		acc.push({ [term]: text });

		return acc;
	}, []);

	let copy = array
		.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))
		.map((el) => {
			return `Term: ${Object.keys(el)[0]} => ${Object.values(el)[0]}`;
		})
		.join("\n");

	return copy;
}
