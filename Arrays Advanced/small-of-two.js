function small(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(` `);

  // console.log(arr.slice(0, 2).join(` `));
}
console.log(small([30, 15, 50, 5]));
console.log(small([3, 0, 10, 4, 7, 3]));
