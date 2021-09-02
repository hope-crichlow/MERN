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

// var needle;                  // 'needle' is a declared, it's global and gets hoisted
// needle = "haystack";         // assign the value of 'haystack' to the global 'needle'
// test();                      // 'test()' is called and will throw a typeError saying that test isnt a function

	// RESULT
// OUTPUT: magnet

// var needle;                  // 'needle' is a declared, it's global and gets hoisted
// needle = "haystack";         // assign the value of 'haystack' to the global 'needle'
// function test() {            // 'test()' gets hoisted to the top
// var needle;                  // 'needle' is declared within 'test()' and is hoisted to the top of its scope
// 	needle = "magnet";      // assign the value of 'magnet' to the function scoped 'needle'
// 	console.log(needle);    // log 'needle' as 'magnet'
// }
// test();                      // 'test()' is called, the console.log runs and outputs 'magnet'


// 3

// GIVEN
var brendan = "super cool";
function print() {
	brendan = "only okay";
	console.log(brendan);
}
console.log(brendan);

// AFTER HOISTING BY THE INTERPRETER

	// PREDICTION
// OUTPUT: super cool

// var brendan;                 // 'brendan' is declared, it's global and gets hoisted
// function print() {           // 'print()' gets hoisted to the top
// 	brendan = "only okay";  // assign the value of 'only ok' to the function scoped 'brendan'
// 	console.log(brendan);   // log 'brendan' as 'only ok'
// }
// brendan = "super cool";      // assign the value of 'super cool' to the global 'brendan'
// console.log(brendan);        // console.log runs and outputs 'super cool', the value assigned to the global 'brendan'

	// RESULT
// OUTPUT: super cool


// 4

// GIVEN
var food = "chicken";
console.log(food);
eat();
function eat() {
	food = "half-chicken";
	console.log(food);
	var food = "gone";
}

// AFTER HOISTING BY THE INTERPRETER

	// PREDICTION
// OUTPUT: chicken
//         half-chicken

// var food;                    // 'food' is declared, global variable
// function eat() {             // 'eat()' gets hoisted to the top
// 	var food;                   // 'food' is declared within 'eat()' and gets hoisted to the top of its scope
// 	food = "half-chicken";  // assign the value of 'half-chicken' to the function scoped 'food'
// 	console.log(food);      // log 'food' as 'half-chicken'
// 	food = "gone";          // assign the value of 'gone' to a function scoped 'food'
// }
// food = "chicken";            // assign the value of 'chicken' to the globally scoped 'food'
// console.log(food);           // console.log runs and outputs 'chicken'
// eat();                       // 'eat()' is called, the console.log runs and outputs 'half-chicken'

	// RESULT
// OUTPUT: chicken
//         half-chicken

// 5

// GIVEN
// mean();
// console.log(food);
// var mean = function () {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// };
// console.log(food);

// AFTER HOISTING BY THE INTERPRETER

	// PREDICTION
// OUTPUT: error

// var mean;                      // 'mean' is declared, global variable
// mean();                        // 'mean()' throws a reference error

	// RESULT
// OUTPUT: TypeError: mean is not a function

// 6

// GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

// AFTER HOISTING BY THE INTERPRETER

	// PREDICTION
// OUTPUT: undefined 
//         rock 
//         r&b 
//         disco

// var genre;                       // 'genre' declared, global variable
// function rewind() {              // 'rewind()' gets hoisted to the top
// 	var genre;                  // 'genre' declared, function scoped variable-- gets hoisted to the top of its scope
// 	genre = "rock";             // assing the value of 'rock' to function scoped 'genre'
// 	console.log(genre);         // log 'genre' as 'rock'
// 	genre = "r&b";              // assign the value of 'r&b' to function scoped 'genre'
// 	console.log(genre);         // log 'genre' as 'r&b'
// }
// console.log(genre);              // console.log runs, output: 'undefined'
// genre = "disco";                 // assign the value of 'disco' to global variable 'genre'
// rewind();                        // 'rewind()' is called, the 2 function scoped logs run, output: 'rock' ,'r&b'
// console.log(genre);              // log global 'genre', output: 'disco'

	// RESULT
// OUTPUT: undefined 
//         rock 
//         r&b 
//         disco


// 7

// GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

// AFTER HOISTING BY THE INTERPRETER

	// PREDICTION
// OUTPUT: san jose
//         seattle
//         burbank
//         sanjose

// function learn() {                  //'learn()' gets hoisted to the top
// 	var dojo;                       // 'dojo' declared, gets hoisted to top of its scope
// 	dojo = "seattle";               // assign the value of 'seattle' to function scoped 'dojo'
// 	console.log(dojo);              // log 'dojo' as 'seattle'
// 	dojo = "burbank";               // assign the value of 'burbank' to function scoped 'dojo'
// 	console.log(dojo);              // log 'dojo' as 'burbank'
// }
// dojo = "san jose";                  // assign value of 'san jose' to global 'dojo'
// console.log(dojo);                  // log global 'dojo', output: 'san jose'
// learn();                            // 'learn()' is called, 2 function scoped console.logs run, output: 'seattle', 'burbank'
// console.log(dojo);                  // log global 'dojo', output: 'san jose'

	// RESULT
// OUTPUT: san jose
//         seattle
//         burbank
//         sanjose