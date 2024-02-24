function oddd(arr) {
  let result = arr
    .filter((arr, x) => x % 2 != 0)
    .map((x) => x * 2)
    .reverse();

  console.log(result.join(` `));
}
oddd([10, 15, 20, 25]);
oddd([3, 0, 10, 4, 7, 3]);
