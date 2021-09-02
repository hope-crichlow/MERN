// PROBLEM 1
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar);             // Tesla
console.log(otherRandomCar);        // Mercedes

// PROBLEM 2
const employee = {
	name: "Elon",
	age: 47,
	company: "Tesla",
};
const { name: otherName } = employee;
//Predict the output
// console.log(name);              // Reference error: name 
console.log(otherName);            // Elon
// Output
// console.log(name);              // ReferenceError: name is not defined

// PROBLEM 3
const person = {
	name: "Phil Smith",
	age: 47,
	height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output
console.log(password);              // 12345
console.log(hashedPassword);        // undefined

//  PROBLEM 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second);       // false
console.log(first == third);        // true