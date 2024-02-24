function product(arr) {
  let input = arr.sort();

  for (let i = 0; i < input.length; i++) {
    console.log(`${i + 1}.${input[i]}`);
  }
}
product(["Potatoes", "Tomatoes", "Onions", "Apples"]);
product(["Watermelon", "Banana", "Apples"]);
