function oddEven(number) {
  let oddSum = 0;
  let evenSum = 0;

  let curNumStr = number.toString();

  for (let alpha of curNumStr) {
    let digit = Number(alpha);

    if (digit % 2 == 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddEven(1000435);
