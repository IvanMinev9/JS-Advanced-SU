function addSub(num1, num2, num3) {
  let result1 = sum(num1, num2);
  let finalResult = subtract(result1, num3);
  console.log(finalResult);

  function sum(intg1, intg2) {
    return intg1 + intg2;
  }

  function subtract(subNum, lastNumu3) {
    return subNum - lastNumu3;
  }
}
addSub(23, 6, 10);
