function distinctArr(arr) {
  let noRep = [];

  for (let num of arr) {
    if (!noRep.includes(num)) {
      noRep.push(num);
    }
  }
  console.log(noRep.join(` `));
}
distinctArr([1, 2, 3, 4]);
distinctArr([20, 8, 12, 13, 4, 4, 8, 5]);
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);
