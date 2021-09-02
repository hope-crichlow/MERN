// 1
// GIVEN
// console.log(hello);
// var hello = "world";

// AFTER HOISTING BY THE INTERPRETER
    // PREDICTION
// var hello;
// console.log(hello); // logs undefined
// var hello = "world";
    // RESULT
// console.log(hello); // logs undefined


// 2

// GIVEN
var needle = "haystack";
test();
function test() {
	var needle = "magnet";
	console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER

	// PREDICTION
// OUTPUT: error

// var needle;              // 'needle' is a declared, it's global and gets hoisted
// needle = "haystack";     // assign the value of 'haystack' to the global 'needle'
// test();                  // 'test()' is called and will throw a typeError saying that test isnt a function

	// RESULT
// OUTPUT: magnet

// var needle;              // 'needle' is a declared, it's global and gets hoisted
// needle = "haystack";     // assign the value of 'haystack' to the global 'needle'
// function test() {        // 'test()' gets hoisted to the top
// var needle;              // 'needle' is declared within 'test()' and is hoisted to the top of its scope
// 	needle = "magnet";      // assign the value of 'magnet' to the function scoped 'needle'
// 	console.log(needle);    // log 'needle' as 'magnet'
// }
// test();                  // 'test()' is called, the console.log runs and outputs 'magnet'

// 3

// GIVEN
// var brendan = "super cool";
// function print() {
// 	brendan = "only okay";
// 	console.log(brendan);
// }
// console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER

	// PREDICTION
// OUTPUT: super cool

// var brendan;                 // 'brendan' is declared, it's global and gets hoisted
// brendan = "super cool";      // assign the value of 'super cool' to the global 'brendan'
// function print() {           // 'print()' gets hoisted to the top
// 	brendan = "only okay";  // asign the value of 'only ok' to the function scoped 'brendan'
// 	console.log(brendan);   // log 'brendan' as 'only ok'
// }
// console.log(brendan);        // console.log runs and outputs 'super cool', the value assigned to the global 'brendan'

	// RESULT
// OUTPUT: