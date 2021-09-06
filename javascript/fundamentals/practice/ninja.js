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

    showStats() {
        console.log(`${this.name} has a strength of ${this.strength}, speed of ${this.speed}, and health of ${this.health}.`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
