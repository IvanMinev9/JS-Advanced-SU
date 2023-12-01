function repStr(str) {
  let noRepStr = ``;
  let prevChar = ``;

  for (let currChar of str) {
    if (currChar !== prevChar) {
      noRepStr += currChar;
      prevChar = currChar;
    }
  }
  console.log(noRepStr);
}
repStr("aaaaabbbbbcdddeeeedssaa");
