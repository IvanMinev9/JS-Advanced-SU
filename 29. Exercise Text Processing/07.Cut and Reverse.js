function reverse(str) {
	let midHalf = str.length / 2;

	let firstHalf = str.slice(0, midHalf).split(``).reverse().join(``);

	let secondHalf = str.slice(midHalf).split(``).reverse().join(``);

	console.log(firstHalf);
	console.log(secondHalf);
}
reverse("tluciffiDsIsihTgnizamAoSsIsihT");
