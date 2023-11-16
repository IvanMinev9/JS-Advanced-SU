function cards(arr) {
	let playerNameNDeck = {};
	let powerValues = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10 };
	let typeValues = { S: 4, H: 3, D: 2, C: 1 };

	for (let playerDeck of arr) {
		let [playerName, cardsAsString] = playerDeck.split(`: `);
		let cards = cardsAsString.split(`, `);

		if (playerName in playerNameNDeck) {
			playerNameNDeck[playerName].push(...cards);
		} else {
			playerNameNDeck[playerName] = cards;
		}
	}
	let entries = Object.entries(playerNameNDeck);

	for (let [name, deck] of entries) {
		let unideck = new Set(deck);
		let deckValue = 0;

		for (let card of unideck) {
			let power = card.slice(0, card.length - 1);
			let type = card[card.length - 1];

			let cardValue = powerValues[power] * typeValues[type];
			deckValue += cardValue;
		}
		console.log(`${name}: ${deckValue}`);
	}
}
cards([
	"Peter: 2C, 4H, 9H, AS, QS",
	"Tomas: 3H, 10S, JC, KD, 5S, 10S",
	"Andrea: QH, QC, QS, QD",
	"Tomas: 6H, 7S, KC, KD, 5S, 10C",
	"Andrea: QH, QC, JS, JD, JC",
	"Peter: JD, JD, JD, JD, JD, JD",
]);
