// IMPORT AUTHOR OBJECT FROM MODEL FILE
const Author = require("../models/author.model");

// TEST
module.exports.test = (req, res) => {
	res.json("Hello World");
};
//////////////////////// CREATE /////////////////////////
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then((newAuthorObject) => res.json(newAuthorObject))
        .catch((errorFound) => res.status(400).json(errorFound));
};
//////////////////////// READ ///////////////////////////
module.exports.getAllAuthors = (req, res) => {
	// Retrieve an array of all documents in the Author collection
	Author.find({})
		.then((listOfAuthorObjects) => res.json(listOfAuthorObjects))
		.catch((errorFound) => res.json(errorFound));
};
module.exports.getOneAuthor = (req, res) => {
	const { author_id } = req.params;
	// Retrieve 1 document (the first record found) matching the query object criteria
	Author.findOne({ _id: author_id })
		.then((foundAuthorObject) => res.json(foundAuthorObject))
		.catch((errorFound) => res.json(errorFound));
};
///////////////////////// UPDATE ////////////////////////
module.exports.updateAuthorByID = (req, res) => {
    const { author_id } = req.params;

    Author.findOneAndUpdate({ _id: author_id }, req.body, {
			// For validations on EDIT, “runValidator: true”  MUST BE after “new: true”
			new: true,
			runValidators: true,
		})
			.then((authorBeingUpdated) => res.json(authorBeingUpdated))
			.catch((errorFound) => res.status(400).json(errorFound));
};
//////////////////////// DELETE ////////////////////////
module.exports.deleteAuthor = (req, res) => {
	const { author_id } = req.params;
	// Delete 1 document that matches the query object criteria
	Author.deleteOne({ _id: author_id })
		.then((deletionSuccessMessage) => res.json(deletionSuccessMessage))
		.catch((errorInDeletion) => res.json(errorInDeletion));
};
