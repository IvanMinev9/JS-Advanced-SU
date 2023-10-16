function repeat(str, number) {
  let string = "";

  for (let i = 0; i < number; i++) {
    string += str;
  }
  return string;
}
console.log(repeat("abc", 3));
