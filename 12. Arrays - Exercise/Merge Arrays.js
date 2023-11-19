function mergeArray(arr1, arr2) {
	//The solve function is defined to take two arrays, arr1 and arr2, as input.

	// The map method is used to create a new array arr3 by iterating over arr1.
	//For each element el at index i in arr1, a function is applied to transform it into a new element in arr3.

	//inside the map function, the code checks whether the current index i is even or odd using i % 2 === 0.
	//Depending on whether the index is even or odd, it performs different operations on the elements.

	//If the index i is even (i.e., i % 2 === 0), it treats the elements as numbers by using
	//Number(el) and Number(arr2[i]), adds them together, and returns the result.
	//This is achieved by Number(el) + Number(arr2[i]).

	//If the index i is odd (i.e., i % 2 !== 0), it treats the elements as strings and concatenates them using the concat method.
	//It returns the concatenated string.
	//   /The transformed elements from arr1 and arr2 are stored in the arr3 array as the map function iterates through arr1.
	let arr3 = arr1.map((el, i) => {
		return i % 2 === 0 ? Number(el) + Number(arr2[i]) : el.concat(arr2[i]);
	});
	//After creating arr3, the code uses the join method to join its elements with hyphens (-) as separators.
	//The resulting string is then printed to the console.
	console.log(arr3.join(` - `));
}
mergeArray(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
