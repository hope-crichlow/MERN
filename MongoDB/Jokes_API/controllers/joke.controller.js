// IMPORT JOKE MODEL FROM MODEL FILE
const Joke = require("../models/joke.model");

// Export a function to test your API
module.exports.test = (req, res) => {
	res.json("TESTING");
};

//////////////////////// CREATE /////////////////////////
// Export a function to create a joke
module.exports.createJoke = (req, res) => {
	// Create a new document to store in the User collection and save it to the DB.
	Joke.create(req.body) // req.body is an object containing all the joke's data.
		.then((newJoke) => res.json(newJoke)) // SUCCESS
		// If there's an error and the record was not saved, this (err) will contain validation errors.
		.catch((err) => res.json(err)); // NOT SUCCESSFUL
};

//////////////////////// READ ///////////////////////////
// Export a function to get all jokes
module.exports.allJokes = (req, res) => {
	// Retrieve an array of all documents in the Joke collection
	Joke.find({})
		.then((allJokes) => res.json(allJokes))
		.catch((err) => res.json(err));
};
// Export a function to get a single joke
module.exports.oneJoke = (req, res) => {
	// PULL ID FROM req.params OBJECT
	const { joke_id } = req.params;
	// Retrieve 1 document (the first record found) matching the query object criteria
	Joke.findOne({ _id: joke_id })
		.then((oneJoke) => res.json(oneJoke))
		.catch((err) => res.json(err));
};

///////////////////////// UPDATE ////////////////////////
// Export a function to update a joke
module.exports.updateJoke = (req, res) => {
	const { joke_id } = req.params;

	Joke.findByIdAndUpdate({ _id: joke_id }, req.body, { new: true }) // Third argument of { new: true } must be passed in in order to get back updated object with new values
		.then((updatedJoke) => res.json(updatedJoke))
		.catch((err) => res.json(err));
};

//////////////////////// DELETE ////////////////////////
// Export a function to delete a joke
module.exports.deleteJoke = (req, res) => {
	const { joke_id } = req.params;
	// Delete 1 document that matches the query object criteria
	Joke.findOneAndDelete({ _id: joke_id })
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
};
