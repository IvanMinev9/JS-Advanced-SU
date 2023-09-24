function rounding(num, precision) {
  if (precision > 15) {
    precision = 15;
  }

  let output = num.toFixed(precision);
  console.log(parseFloat(output));
}
rounding(3.8, 2);
