function division(number) {
  const nums = [2, 3, 6, 7, 10];
  let divicible = [];

  for (let i = 0; i < nums.length; i++) {
    if (number % nums[i] == 0) {
      divicible.push(nums[i]);
    }
  }
  if (divicible.length <= 0) {
    console.log(`Not divisible`);
  } else {
    let maxnumber = divicible[0];
    for (let i = 1; i < divicible.length; i++) {
      if (maxnumber < divicible[i]) {
        maxnumber = divicible[i];
      }
    }
    console.log(`The number is divisible by ${maxnumber}`);
  }
}
division(30);
