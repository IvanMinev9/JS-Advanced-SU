function kNumber(arr) {
  let k = arr.shift();

  console.log(arr.slice(0, k).join(` `));
  console.log(arr.slice(-k).join(` `));
}
kNumber([2, 7, 8, 9]);
kNumber([3, 6, 7, 8, 9]);
