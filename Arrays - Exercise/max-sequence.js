function maxSequence(arr) {
  arr = arr[0].split(" ");
  let longS = [];
  let leftIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    currentEl = Number(arr[i]);
    let currSequence = [currentEl];

    for (let j = i + 1; j < arr.length; j++) {
      let nextEl = Number(arr[j]);

      if (nextEl === currentEl) {
        currSequence.push(nextEl);
      } else {
        break;
      }
    }

    if (currSequence.length > longS.length) {
      longS = [];
      for (let j = 0; j < currSequence.length; j++) {
        longS.push(currSequence[j]);
      }
    } else if (currSequence.length === longS.length) {
      if (i < leftIndex) {
        leftmostIndex = i;
      }
    }
  }
  console.log(longS.join(" "));
}
