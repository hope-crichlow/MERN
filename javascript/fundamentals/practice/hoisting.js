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

