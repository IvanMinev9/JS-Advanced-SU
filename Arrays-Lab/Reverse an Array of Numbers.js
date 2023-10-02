function reverse(n, numsArray) {
  // Initialize an empty array to store the result.
  let resultArray = [];

  // Loop through the first `n` elements of the input array and push them into the resultArray.
  for (let i = 0; i <= n; i++) {
    resultArray.push(numsArray[i]);
  }

  // Initialize another empty array to store the reversed elements.
  let reversedArray = [];

  // Loop through the elements of resultArray in reverse order and add them to reversedArray.
  for (let i = n - 1; i >= 0; i--) {
    reversedArray[reversedArray.length] = resultArray[i];
  }
  // Log the reversedArray joined by spaces to the console.
  console.log(reversedArray.join(` `));
}
reverse(3, [10, 20, 30, 40, 50]);
