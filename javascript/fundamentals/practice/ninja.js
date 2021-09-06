// Create a Ninja class
class Ninja {
	constructor(name) {
		this.name = name;
		this.health = 10;
		this.speed = 3;
		this.strength = 3;
	}
	sayName() {
		console.log(`This ninjas name is: ${this.name}`);
	}
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// ninja1.showStats();
