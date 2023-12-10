function matchName(arr) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

  let result = arr.match(pattern);

  console.log(result.join(` `));
}
matchName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
