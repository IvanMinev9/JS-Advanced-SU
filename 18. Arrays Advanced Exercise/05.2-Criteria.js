function sortingBy2(arr) {
  let sortByLength = arr.sort(
    (a, b) => a.length - b.length || a.localeCompare(b)
  );
  console.log(sortByLength.join(`\n`));
}
sortingBy2(["alpha", "beta", "gamma"]);
sortingBy2(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
