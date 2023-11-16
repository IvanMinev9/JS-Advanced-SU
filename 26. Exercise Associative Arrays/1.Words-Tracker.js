function tracker(arr) {
	let occur = {};
	let theWords = arr.shift().split(` `);

	for (let word of theWords) {
		occur[word] = 0;
	}

	for (let word of arr) {
		if (word in occur) {
			occur[word]++;
		}
	}
	let entries = Object.entries(occur).sort((a, b) => b[1] - a[1]);

	for (let [word, count] of entries) {
		console.log(`${word} - ${count}`);
	}
}
tracker([
	"this sentence",
	"In",
	"this",
	"sentence",
	"you",
	"have",
	"to",
	"count",
	"the",
	"occurrences",
	"of",
	"the",
	"words",
	"this",
	"and",
	"sentence",
	"because",
	"this",
	"is",
	"your",
	"task",
]);
