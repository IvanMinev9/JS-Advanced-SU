function solve(input) {
  let foodInKilos = Number(input[0]) * 1000;
  let hayAmount = Number(input[1]) * 1000;
  let coverAmount = Number(input[2]) * 1000;
  let weight = Number(input[3]) * 1000;
  let coverSpend = weight / 3;

  for (let i = 1; i <= 30; i++) {
    foodInKilos -= 300;

    if (i % 2 == 0) {
      hayAmount -= foodInKilos * 0.05;
    }

    if (i % 3 == 0) {
      coverAmount -= coverSpend;
    }

    if (foodInKilos <= 0 || hayAmount <= 0 || coverAmount <= 0) {
      console.log(`Merry must go to the pet store!`);
      return;
    }
  }
  console.log(
    `Everything is fine! Puppy is happy! Food: ${(foodInKilos / 1000).toFixed(
      2
    )}, Hay: ${(hayAmount / 1000).toFixed(2)}, Cover: ${(
      coverAmount / 1000
    ).toFixed(2)}.`
  );
}
solve(["9", "5", "5.2", "1"]);
