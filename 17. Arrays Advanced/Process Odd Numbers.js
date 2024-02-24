function oddNums(arr) {
  let reversed = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (i % 2 != 0) {
      reversed.push(num * 2);
    }
  }
  console.log(reversed.reverse().join(` `));
}

oddNums([10, 15, 20, 25]);
oddNums([3, 0, 10, 4, 7, 3]);
