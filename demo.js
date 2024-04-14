function solve(arr) {
  let emptySrt = ``;
  let command = arr.shift();

  while (command != `End`) {
    let [action, val] = command.split(` `);

    if (action == `Add`) {
      emptySrt += val;
    } else if (action == `Upgrade`) {
      emptySrt = emptySrt
        .split("")
        .map((char) =>
          char === val ? String.fromCharCode(char.charCodeAt(0) + 1) : char
        )
        .join("");
    } else if (action == `Print`) {
      console.log(emptySrt);
    } else if (action == `Index`) {
      let occur = [];
      for (let i = 0; i < emptySrt.length; i++) {
        if (emptySrt[i].includes(val)) {
          occur.push(i);
        } else if (val < 0) {
          console.log(`None`);
        }
      }

      console.log(occur.join(` `));
    } else if (action == `Remove`) {
      while (emptySrt.includes(val)) {
        emptySrt = emptySrt.replace(val, ``);
      }
    }
    command = arr.shift();
  }
}
solve([
  "Add University",
  "Print",
  "Upgrade n",
  "Print",
  "Index i",
  "Remove sity",
  "Print",
  "End",
]);

solve([
  "Add HelloWorld",
  "Upgrade e",
  "Print",
  "Index b",
  "Remove rl",
  "Print",
  "End",
]);
