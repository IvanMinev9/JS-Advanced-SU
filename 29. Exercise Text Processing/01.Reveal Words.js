function reveal(wordsString, wordReveal) {
	let words = wordsString.split(`, `);

	for (let word of words) {
		let repCount = word.length;

		let starCount = `*`.repeat(repCount);
		wordReveal = wordReveal.replace(starCount, word);
	}
	console.log(wordReveal);
}
reveal(
	"great",
	"softuni is ***** place for learning new programming languages"
);
