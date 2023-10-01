function enName(num) {
  let lastDigit = num % 10;
  // Calculate the last digit of the number by taking the remainder when divided by 10.

  if (lastDigit < 0) {
    lastDigit = Math.abs(lastDigit);
    // If the last digit is negative, convert it to its absolute value (making it positive).
  }

  let englishName = "";
  // Initialize an empty string to store the English name of the digit.

  // Use a switch statement to determine the English name based on the last digit.

  switch (lastDigit) {
    case 0:
      englishName = `zero`;
      break;

    case 1:
      englishName = `one`;
      break;

    case 2:
      englishName = `two`;
      break;

    case 3:
      englishName = `three`;
      break;
    case 4:
      englishName = `four`;
      break;
    case 5:
      englishName = `five`;
      break;

    case 6:
      englishName = `six`;
      break;

    case 7:
      englishName = `seven`;
      break;

    case 8:
      englishName = `eigth`;
      break;

    case 9:
      englishName = `nine`;
      break;
  }

  // Log the English name of the digit to the console.

  console.log(englishName);
}
enName(-512);
