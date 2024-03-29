function party(arr) {
  let guestList = [];

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(` `);
    let name = command[0];

    if (command.includes(`not`)) {
      if (guestList.includes(name)) {
        let index = guestList.indexOf(name);
        guestList.splice(index, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    } else {
      if (guestList.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        guestList.push(name);
      }
    }
  }
  console.log(guestList.join(`\n`));
}
party([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
party([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
