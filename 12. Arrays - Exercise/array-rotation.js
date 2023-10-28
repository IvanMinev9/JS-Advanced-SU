function rotation(arr, rotations) {
  //The rotation function is defined to take two parameters: arr, which is the input array, and rotations,
  //which is the number of left rotations to perform.

  //This for loop is used to perform the left rotations. It starts with rotate set to 1 and continues as
  //long as rotate is less than or equal to the specified number of rotations
  for (let rotate = 1; rotate <= rotations; rotate++) {
    //let firstElement = arr.shift();: This line removes the first element from the array arr and stores it in the variable firstElement.
    // This element is effectively taken from the beginning of the array.
    let firstElement = arr.shift();
    //arr.push(firstElement);: After removing the first element, it is appended to the end of the array using the push method.
    //This step simulates a left rotation, where the first element becomes the last element in the array.
    arr.push(firstElement);
  }
  console.log(arr.join(` `));
}
rotation([51, 47, 32, 61, 21], 2);
