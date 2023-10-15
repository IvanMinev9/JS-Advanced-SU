function passwordGen(pass) {
  let isValidLength = checkLengthPass(pass);
  let isLettersDigitsValid = checkPassLettersDigits(pass);
  let isDigitsValid = isValidDigits(pass);

  if (isValidLength && isLettersDigitsValid && isDigitsValid) {
    console.log(`Password is valid`);
  }

  function checkLengthPass(passLength) {
    if (passLength.length >= 6 && passLength.length <= 10) {
      return true;
    } else {
      console.log(`Password must be between 6 and 10 characters`);
      return false;
    }
  }

  function checkPassLettersDigits(passLettersDigits) {
    for (let currChar of passLettersDigits) {
      code = currChar.charCodeAt(0);

      if (
        !(
          (code >= 48 && code <= 57) ||
          (code >= 65 && code <= 90) ||
          (code >= 97 && code <= 122)
        )
      ) {
        console.log(`Password must consist only of letters and digits`);
        return false;
      }
    }
    return true;
  }

  function isValidDigits(passDigits) {
    let digitsCount = 0;

    for (let number of passDigits) {
      let nums = number.charCodeAt(0);

      if (nums >= 48 && nums <= 57) {
        digitsCount++;
      }
    }
    if (digitsCount < 2) {
      console.log(`Password must have at least 2 digits`);
      return false;
    } else {
      return true;
    }
  }
}
passwordGen("MyPass123");
