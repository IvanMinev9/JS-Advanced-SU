function cats(catsString) {
	class Cat {
		name;
		age;

		constructor(name, age) {
			this.name = name;
			this.age = age;
		}

		meow() {
			console.log(`${this.name}, age ${this.age} says Meow`);
		}
	}

	let cats = [];

	for (let catAsStr of catsString) {
		let tokes = catAsStr.split(` `);

		let name = tokes[0];
		let age = Number(tokes[1]);

		let cat = new Cat(name, age);

		cats.push(cat);
	}

	for (let cat of cats) {
		cat.meow();
	}
}
cats(["Mellow 2", "Tom 5"]);
