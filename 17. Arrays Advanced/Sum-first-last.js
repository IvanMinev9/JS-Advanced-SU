function solve(arr) {
  let first = arr.shift();
  let second = arr.pop();

  let result = Number(first) + Number(second);
  console.log(result);
}
solve(["20", "30", "40"]);
solve(["5", "10"]);
