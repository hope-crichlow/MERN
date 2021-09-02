// 1
// GIVEN
console.log(hello);
var hello = "world";

// AFTER HOISTING BY THE INTERPRETER
    // PREDICTION
// var hello;
// console.log(hello); // logs undefined
// var hello = "world";
    // RESULT
// console.log(hello); // logs undefined


// 2

// GIVEN
// var needle = "haystack";
// test();
// function test() {
// 	var needle = "magnet";
// 	console.log(needle);
// }
// AFTER HOISTING BY THE INTERPRETER
	// PREDICTION
// var needle; // 'needle' is a declared, it's global and gets hoisted
// needle = "haystack"; // assign the value of "haystack" to the global 'needle'
// test(); // test is called and will throw a typeError saying that test isnt a function
	// RESULT