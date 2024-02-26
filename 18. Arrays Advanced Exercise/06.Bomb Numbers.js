function bomb(numbers, bombInfo) {
  let [bobmNum, power] = bombInfo;

  while (numbers.includes(bobmNum)) {
    let idx = numbers.indexOf(bobmNum);
    numbers.splice(Math.max(0, idx - power), power * 2 + 1, 0);
  }
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  console.log(sum);
}
bomb([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bomb([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bomb([1, 7, 7, 1, 2, 3], [7, 1]);
bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
