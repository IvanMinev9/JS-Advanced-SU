function solve(n) {
  let sum = 0;
  let counter = 0;

  for (let i = 1; i <= 100; i += 2) {
    console.log(i);
    sum += i;
    counter++;

    if (counter == n) {
      console.log(`Sum: ${sum}`);
      break;
    }
  }
}
solve(5);
