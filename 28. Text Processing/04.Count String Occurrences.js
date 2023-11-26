function count(text, searchedWord) {
	let textSplit = text.split(` `);
	let count = 0;

	for (let word of textSplit) {
		if (word == searchedWord) {
			count++;
		}
	}
	console.log(count);
}
count("This is a word and it also is a sentence", "is");
