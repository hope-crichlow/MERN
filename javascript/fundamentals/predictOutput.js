// PROBLEM 1
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar);         // Tesla
console.log(otherRandomCar);    // Mercedes

// PROBLEM 2
const employee = {
	name: "Elon",
	age: 47,
	company: "Tesla",
};
const { name: otherName } = employee;
//Predict the output
console.log(name);              // Reference error: name 
console.log(otherName);
// Output
console.log(name);              // ReferenceError: name is not defined