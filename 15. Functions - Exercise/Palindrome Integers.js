function palindrome(array) {
  for (let curNum of array) {
    let isPal = checkIsPalindrome(curNum);
    console.log(isPal);
  }

  function checkIsPalindrome(num) {
    let numStr = String(num);
    let reversedNumStr = ``;

    for (let i = numStr.length - 1; i >= 0; i--) {
      let curentChar = numStr[i];
      reversedNumStr += curentChar;
    }
    let isPalindrome = numStr == reversedNumStr;
    return isPalindrome;
  }
}
palindrome([123, 323, 421, 121]);

function solve(arr) {
  for (let num of arr) {
    let numStr = String(num);

    let reversedStr = numStr.split(``).reverse().join(``);
    console.log(reversedStr == numStr);
  }
}
solve([32, 2, 232, 1010]);
