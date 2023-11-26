function censored(text, str) {
	let censor = `*`.repeat(str.length);
	let result = text;

	while (result.includes(str)) {
		result = result.replace(str, censor);
	}
	console.log(result);
}

censored("A small sentence with some words", "small");
