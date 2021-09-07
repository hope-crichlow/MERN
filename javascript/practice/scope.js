const beatles = ["Paul", "George", "John", "Ringo"];
function printNames(names) {
	// function actuallyPrintingNames() {
	// 	for (var index = 0; index < names.length; index++) {
	// 		var name = names[index];

	// 		console.log(name + " was found at index " + index);
	// 	}
	// 	console.log("name and index after loop is " + name + ":" + index);
	// }

	function actuallyPrintingNames() {
		for (let index = 0; index < names.length; index++) {
			const name = names[index];
			console.log(name + " was found at index " + index);
		}
		// console.log("name and index after loop is " + name + ":" + index);
	}

	actuallyPrintingNames();
}
printNames(beatles);

// let name = "Hadiya";
const names = ["edward", "john", "jane"];
console.log(names);

names[0] = "shawn";
console.log(names);

// console.log(name);
const obj = {
	name: "Diya",
	age: 30,
};

console.log(obj.name);

let { name, age } = obj;
console.log(age, name);
// ///////

console.log(magicalUnicorns);
var magicalUnicorns = "awesome";
// let magicalUnicorns = "awesome";

var foo = "bar";
function magic() {
	foo = "hello world";
	console.log(foo);
	var foo;
}
magic();
console.log(foo);

var foo; // 'foo' is a declaration, it's global and gets hoisted
function magic() {
	// 'magic()' also gets hoisted to the top
	var foo; // here 'foo' is declared within 'magic()' and gets hoisted to the top of its scope
	foo = "hello world"; // we assign a value to our function scoped 'foo'
	console.log(foo); // we log it as 'hello world'
}
foo = "bar"; // here, we assign a value to the global 'foo'
magic(); // magic is called, the first console.log runs
console.log(foo); // finally we log the global foo

var magicalUnicorns = function () {
	console.log("Will it blend?");
};
console.log("Don't breathe this!");
magicalUnicorns();

// function magicalUnicorns() {
// 	console.log("Will it blend?");
// }
// console.log("Don't breathe this!");
// magicalUnicorns();

// 1

// GIVEN

// AFTER HOISTING BY THE INTERPRETER

	// PREDICTION
// OUTPUT:


	// RESULT
// OUTPUT:
