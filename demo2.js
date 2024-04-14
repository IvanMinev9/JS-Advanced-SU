class BattleManager {
  constructor() {
    this.participants = {};
  }

  addPerson(name, health, energy) {
    if (!this.participants[name]) {
      this.participants[name] = { health: 0, energy: 0 };
    }
    this.participants[name].health += health;
    this.participants[name].energy += energy;
  }

  attack(attackerName, defenderName, damage) {
    if (this.participants[attackerName] && this.participants[defenderName]) {
      this.participants[defenderName].health -= damage;
      this.participants[attackerName].energy -= 1;

      if (this.participants[defenderName].health <= 0) {
        console.log(`${defenderName} was disqualified!`);
        delete this.participants[defenderName];
      }

      if (this.participants[attackerName].energy <= 0) {
        console.log(`${attackerName} was disqualified!`);
        delete this.participants[attackerName];
      }
    }
  }

  deletePerson(name) {
    if (name === "All") {
      this.participants = {};
    } else {
      delete this.participants[name];
    }
  }

  results() {
    console.log(`People count: ${Object.keys(this.participants).length}`);
    for (let [name, data] of Object.entries(this.participants)) {
      console.log(`${name} - ${data.health} - ${data.energy}`);
    }
  }
}

function processCommands(commands) {
  let battleManager = new BattleManager();

  for (let command of commands) {
    let [action, ...args] = command.split(":");
    switch (action) {
      case "Add":
        battleManager.addPerson(args[0], parseInt(args[1]), parseInt(args[2]));
        break;
      case "Attack":
        battleManager.attack(args[0], args[1], parseInt(args[2]));
        break;
      case "Delete":
        battleManager.deletePerson(args[0]);
        break;
      case "Results":
        battleManager.results();
        return;
    }
  }
}

let commands = [
  "Add:Mark:1000:5",
  "Add:Clark:1000:2",
  "Attack:Clark:Mark:500",
  "Attack:Clark:Mark:800",
  "Add:Charlie:4000:10",
  "Results",
];

processCommands(commands);
