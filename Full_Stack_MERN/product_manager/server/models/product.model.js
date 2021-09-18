const mongoose = require("mongoose");

// 1. DEFINE THE SCHEMA
const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Title is required."],
		},
		price: {
			type: Number,
			required: [true, "Price is required."],
			min: [1, "Product must have a price over $1"],
		},
		description: {
			type: String,
			required: [true, "Description is required."]
		}
	},
	{ timestamps: true }
);

// 2. REGISTERING THE SCHEMA W/I MONGOOSE LIBRARY
const Product = mongoose.model("Product", ProductSchema);
// 3. EXPORT MONGOOSE MODEL
module.exports = Product;
