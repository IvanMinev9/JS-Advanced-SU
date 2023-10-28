function common(arr1, arr2) {
  //The common function is defined to take two arrays, arr1 and arr2, as input.

  //This loop iterates through each element of the arr1 array.
  //The loop variable elements represents the current element being examined.

  // Inside the loop, there is an if statement that checks if the current elements from arr1 is also present in the arr2 array.
  //The arr2.includes(elements) method is used for this purpose.
  for (let elements of arr1) {
    if (arr2.includes(elements)) {
      console.log(elements);
    }
  }
  //If the current element elements from arr1 is found in arr2, it is printed to the console.
  //This means that only elements that are common between the two arrays will be displayed.
}
common(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
