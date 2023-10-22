function solve(input) {
  let health = 100;
  let loot = 0;
  let rooms = input.split(`|`);

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i].split(` `);
    let command = room[0];
    let num = Number(room[1]);

    if (command == `potion`) {
      if (health + num > 100) {
        num = 100 - health;
      }
      health += num;
      console.log(`You healed for ${num} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command == `chest`) {
      loot += num;
      console.log(`You found ${num} bitcoins.`);
    } else {
      health -= num;
      if (health <= 0) {
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
  console.log(`Health: ${health}`);
}

solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
