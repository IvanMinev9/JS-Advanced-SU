function maxNumber(nums) {
  let topNums = [];
  //The maxNumber function is defined to take an array of numbers, nums, as its input.

  //An empty array topNums is initialized. This array will be used to store the "top" numbers found in the input array.
  for (let i = 0; i < nums.length; i++) {
    let digit = nums[i];
    let isTop = true;
    //An outer for loop is used to iterate through the elements of the nums array,
    //starting from the first element (index 0) and going to the last element.

    for (let j = i + 1; j < nums.length; j++) {
      let currNum = nums[j];

      if (currNum >= digit) {
        isTop = false;
        break;
      }
    }
    //Inside the outer loop, two variables are initialized:
    //digit: This variable holds the current number being cheked from the nums array.
    //isTop: This is a boolean flag that is initially set to true. It will be used to determine if the current digit is a "top" number.
    //Within the outer loop, there is an inner for loop that starts
    //from the element immediately to the right of the current digit and goes to the end of the array.

    //In the inner loop, each element currNum to the right of the current digit is compared with digit.
    // If any element to the right is greater than or equal to the current
    //digit, the isTop flag is set to false, and the inner loop is terminated using break.
    if (isTop) {
      topNums.push(digit);
    }
  }
  console.log(topNums.join(` `));
}
maxNumber([1, 4, 3, 2]);
