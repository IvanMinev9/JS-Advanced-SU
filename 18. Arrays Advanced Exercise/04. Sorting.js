function sorting(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let array = [];

  while (sorted.length > 0) {
    let maxNum = sorted.pop();
    let minNum = sorted.shift();

    array.push(maxNum);
    array.push(minNum);
  }
  console.log(array.join(` `));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
