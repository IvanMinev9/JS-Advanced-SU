function charRange(char1, char2) {
  code1 = char1.charCodeAt(0);
  code2 = char2.charCodeAt(0);

  let mMin = Math.min(code1, code2);
  let mMax = Math.max(code1, code2);

  let result = "";

  for (let currCode = mMin + 1; currCode < mMax; currCode++) {
    let currChar = String.fromCharCode(currCode);
    result += currChar + " ";
  }
  console.log(result);
}
charRange("a", "d");
charRange("C", "#");
