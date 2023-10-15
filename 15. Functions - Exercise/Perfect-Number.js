function perfcNum(num) {
  let sumDivisors = 0;

  for (let devisor = 1; devisor < num; devisor++) {
    if (num % devisor == 0) {
      sumDivisors += devisor;
    }
  }
  if (sumDivisors == num) {
    console.log(`We have a perfect number!`);
  } else {
    console.log(`It's not so perfect.`);
  }
}
perfcNum(6234);
