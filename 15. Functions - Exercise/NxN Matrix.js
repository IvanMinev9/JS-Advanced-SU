function nXN(number) {
  for (let rowNumber = 1; rowNumber <= number; rowNumber++) {
    let rep = `${number} `.repeat(number);
    console.log(rep);
  }
}
nXN(3);
