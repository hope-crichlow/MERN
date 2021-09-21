const mongoose = require("mongoose");

// 1. DEFINE THE SCHEMA
const AuthorSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
			minlength: [3, "Name must have at least 3 characters"],
		}
	},
	{ timestamps: true }
); // Creates createdAt and updatedAt attributes

// 2. REGISTERING THE SCHEMA W/I MONGOOSE LIBRARY
const Author = mongoose.model("Author", AuthorSchema);

// 3. EXPORT MONGOOSE MODEL
module.exports = Author;
