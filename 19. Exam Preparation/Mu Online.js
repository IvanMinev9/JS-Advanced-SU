function online(arr) {
	health = 100;
	bitcoins = 0;

	let rooms = arr.split(`|`);
	let bestRoom = 1;

	for (let i = 0; i < rooms.length; i++) {
		let command = rooms[i].split(` `);
		let amount = Number(command[1]);

		if (command[0] == `potion`) {
			let newHp = health + amount <= 100 ? amount : 100 - health;
			health += newHp;
			console.log(`You healed for ${newHp} hp.`);
			console.log(`Current health: ${health} hp.`);
		} else if (command[0] == `chest`) {
			bitcoins += amount;
			console.log(`You found ${amount} bitcoins.`);
		} else {
			health -= amount;
			if (health > 0) {
				console.log(`You slayed ${command[0]}.`);
			} else {
				console.log(`You died! Killed by ${command[0]}.`);
				console.log(`Best room: ${bestRoom}`);
				break;
			}
		}
		bestRoom++;
	}
	if (health > 0) {
		console.log(`You've made it!`);
		console.log(`Bitcoins: ${bitcoins}`);
		console.log(`Health: ${health}`);
	}
}
//online("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log(`*************`);
online("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
