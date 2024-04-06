function solve(arr) {
  let map = new Map();
  let count = 0;
  for (let words of arr) {
    if (!map.has(words)) {
      count = 1;
    } else {
      count = map.get(words) + 1;
    }
    map.set(words, count);
  }
  let sorted = Array.from(map);
  sorted.sort((a, b) => b[1] - a[1]);
  for (let [word, count] of sorted) {
    console.log(`${word} -> ${count} times`);
  }
}
solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
