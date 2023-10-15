function fact(n1, n2) {
  let problem1 = calcFact(n1);
  let problem2 = calcFact(n2);

  let result = problem1 / problem2;
  console.log(result.toFixed(2));
  function calcFact(num) {
    let factorial = 1;

    while (num > 1) {
      factorial *= num;
      num--;
    }
    return factorial;
  }
}

fact(5, 2);
