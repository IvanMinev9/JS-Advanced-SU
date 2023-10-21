function solve(input) {
  let helth = 100;
  let loot = 0;
  let rooms = input.split(`|`);

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i].split(` `);
    let command = room[0];
    let num = Number(room[1]);

    if (command == `potion`) {
      if (helth + num > 100) {
        num = 100 - helth;
      }
      helth += num;
      console.log(`You healed for ${num} hp.`);
      console.log(`Current health: ${helth} hp.`);
    } else if (command == `chest`) {
      loot += num;
      console.log(`You found ${num} bitcoins`);
    } else {
      helth -= num;
      if (helth <= 0) {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${i + 1}`);
        return;
      } else {
        console.log(`You slayed ${command}.`);
      }
    }
  }
  console.log(`You've made it!`);
  console.log(`Bitcoins: ${loot}`);
  console.log(`Health: ${helth}`);
}

solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
