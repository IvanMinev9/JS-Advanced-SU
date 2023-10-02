function reverseString(str) {
  // Initialize an empty string to store the reversed string.
  let revString = "";
  // Create a variable `revstr` and set it to the value of the input `str`.
  let revstr = str;

  for (let i = revstr.length - 1; i >= 0; i--) {
    // Iterate over the characters in `revstr` from the last character to the first character.
    revString += revstr[i];
  }
  // Log the reversed string to the console.
  console.log(revString);
}
reverseString(`Hello`);
