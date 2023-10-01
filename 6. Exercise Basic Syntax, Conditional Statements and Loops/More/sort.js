//solve function is defined with three parameters: first, second, and third.
function solve(first, second, third) {
  // Push the values of the first, second, and third arguments into arrayNum.
  let arrayNum = [];

  //The values of the first, second, and third arguments are pushed into the arrayNum array using the push method.
  //After this step, arrayNum contains these values.
  arrayNum.push(first, second, third);

  // Sort the elements in arrayNum in descending order using the sort() method and a comparison function.
  let sortedNumbers = arrayNum.sort((a, b) => b - a);

  // Log the sortedNumbers array, joining its elements with newline characters (\n).
  console.log(sortedNumbers.join(`\n`));
}
solve(2, 1, 3);
