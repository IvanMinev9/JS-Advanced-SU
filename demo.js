function solve(number, arr) {
  let newArray = [];

  for (let i = 0; i <= number.length; i++) {
    newArray.push(arr[i]);
  }
  let reversedArray = [];

  for (let i = number - 1; i >= 0; i--) {
    reversedArray[reversedArray.length] = newArray[i];
  }
  console.log(reversedArray.join(` `));
}
solve(3, [10, 20, 30, 40, 50]);
