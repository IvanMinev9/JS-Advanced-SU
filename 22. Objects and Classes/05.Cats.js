function cats(arr) {
	class Cat {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}
		meow() {
			console.log(`${this.name}, age ${this.age} says Meow`);
		}
	}
	for (let el of arr) {
		let tokens = el.split(` `);
		let [name, age] = tokens;

		let cat = new Cat(name, Number(age));
		cat.meow();
	}
}

cats(["Candy 1", "Poppy 3", "Nyx 2"]);
cats(["Mellow 2", "Tom 5"]);
