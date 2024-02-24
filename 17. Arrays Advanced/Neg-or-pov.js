function solve(arr) {
  let result = [];

  for (let numAsStr of arr) {
    let num = Number(numAsStr);

    if (num < 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }
  console.log(result.join(`\n`));
}
solve(["7", "-2", "8", "9"]);
solve(["7", "-2", "8", "9"]);
