function odd(arr) {
  let words = arr.split(` `).map((el) => el.toLowerCase());
  let obj = new Map();

  for (let firstElement of words) {
    let count = 0;

    for (let secondElement of words) {
      if (firstElement == secondElement) {
        count++;
      }
    }
    obj.set(firstElement, count);
  }

  let filteredElement = Array.from(obj.entries()).filter(
    ([words, val]) => val % 2 !== 0
  );
  let result = [];

  for (let [word, val] of filteredElement) {
    result.push(word);
  }
  console.log(result.join(` `));
}
odd("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
console.log(`----------------------------------`);

odd("Cake IS SWEET is Soft CAKE sweet Food");
