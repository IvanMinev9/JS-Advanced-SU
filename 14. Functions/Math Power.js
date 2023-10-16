function mathPower(number, exponent) {
  let pow = 1;

  for (let i = 0; i < exponent; i++) {
    pow *= number;
  }
  console.log(pow);
}
mathPower(2, 8);
