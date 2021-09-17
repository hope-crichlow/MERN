// IMPORT JOKE MODEL FROM MODEL FILE
const Joke = require("../models/joke.model");

// Export a function to test your API
module.exports.test = (req, res) => {
	res.json("TESTING");
};

//////////////////////// CREATE /////////////////////////
// Export a function to create a joke
module.exports.createJoke = (req, res) => {
	Joke.create(req.body)
		.then(newJoke => res.json(newJoke))	// SUCCESS
		.catch(err => res.json(err))	// NOT SUCCESSFUL
}
//////////////////////// READ ///////////////////////////
// Export a function to get all jokes
// Export a function to get a single joke

///////////////////////// UPDATE ////////////////////////
// Export a function to update a joke


//////////////////////// DELETE ////////////////////////
// Export a function to delete a joke