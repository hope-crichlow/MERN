// IMPORT PRODUCT OBJECT FROM MODEL FILE
const Product = require("../models/product.model");

// TEST
module.exports.test = (req, res) => {
	res.json("Hello World");
};

//////////////////////// CREATE /////////////////////////
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProductObject) => res.json(newProductObject))
        .catch((errorFound) => res.status(400).json(errorFound));
};
//////////////////////// READ ///////////////////////////
module.exports.getAllProducts = (req, res) => {
	// Retrieve an array of all documents in the Product collection
	Product.find({})
		.then((listOfProductObjects) => res.json(listOfProductObjects))
		.catch((errorFound) => res.json(errorFound));
};
module.exports.getOneProduct = (req, res) => {
	const { product_id } = req.params;
	// Retrieve 1 document (the first record found) matching the query object criteria
	Product.findOne({ _id: product_id })
		.then((foundProductObject) => res.json(foundProductObject))
		.catch((errorFound) => res.json(errorFound));
};
///////////////////////// UPDATE ////////////////////////
module.exports.updateProductByID = (req, res) => {
    const { product_id } = req.params;

    Product.findOneAndUpdate({ _id: product_id }, req.body, {
			// For validations on EDIT, “runValidator: true”  MUST BE after “new: true”
			new: true,
			runValidators: true,
		})
			.then((productBeingUpdated) => res.json(productBeingUpdated))
			.catch((errorFound) => res.status(400).json(errorFound));
};
//////////////////////// DELETE ////////////////////////
module.exports.deleteProduct = (req, res) => {
	const { product_id } = req.params;
	// Delete 1 document that matches the query object criteria
	Product.deleteOne({ _id: product_id })
		.then((deletionSuccessMessage) => res.json(deletionSuccessMessage))
		.catch((errorInDeletion) => res.json(errorInDeletion));
};