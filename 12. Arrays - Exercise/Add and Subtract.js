function addSubb(arr) {
  // Initialize two variables, originalSum and newlySum, to keep track of two different sums.
  let originalSum = 0;
  let newlySum = 0;

  // Start a for loop that iterates through each element in the input array arr using the index i.
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    originalSum += num;

    //Check if num is even by using the condition if (num % 2 == 0). If it's even:
    // Add the current index i to the num. This means that for even numbers, we add the index to them.
    if (num % 2 == 0) {
      num += i;
    } else {
      num -= i;
    }
    // If num is not even (i.e., it's odd), subtract the current index i from num.
    // This means that for odd numbers, we subtract the index from them.

    // Add the modified num (either increased or decreased by i) to the newlySum.
    // This keeps track of the sum of modified values in the array.
    newlySum += num;
    // Update the original array arr at index i with the modified num.
    arr[i] = num;
  }
  console.log(arr);
  console.log(originalSum);
  console.log(newlySum);
}

addSubb([5, 15, 23, 56, 35]);
addSubb([-5, 11, 3, 0, 2]);
