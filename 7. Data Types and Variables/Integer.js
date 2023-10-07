function floatOrNot(first, second, third) {
  let sum = first + second + third;

  sum % 1 == 0 ? (sum += ` - Integer`) : (sum += ` - Float`);
  console.log(sum);
}
floatOrNot(100, 200, 303);
