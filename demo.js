function solve(arr) {
  let obj = {};

  obj = arr.reduce((acc, cur) => {
    let [command, licencePlate] = cur.split(`, `);

    if (acc.hasOwnProperty(licencePlate)) {
      if (command == `OUT`) {
        acc[licencePlate] = `remove`;
      }
    }
  });
}
solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
console.log(`---------------------------`);
solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
