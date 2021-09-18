const mongoose = require("mongoose");

// 1. DEFINE THE SCHEMA
const JokeSchema = new mongoose.Schema({  // Structre of a joke object
// ATTRIBUTES
  // SETUP: STRING, REQUIRED, MIN: 10 CHARACTERS
  setup: {
    type: String,
    required: [true, "Can't have a joke without a setup"],
    minlength: [10, "Setup must be at least 10 characters long"]
  },
  // PUNCHLINE: STRING, REQUIRED, MIN: 3 CHARACTERS
  punchline: {
    type: String,
    required: [true, "Is it really a joke if there isn't a punchline?"],
    minlength: [3, "Punchline must be at least 3 characters long"]
  }
},{ timestamps: true });  // Creates createdAt and updatedAt attributes

// 2. REGISTERING THE SCHEMA W/I MONGOOSE LIBRARY
// Create a constructor function for model and store in variable 'Joke'
const Joke = mongoose.model("Joke", JokeSchema);  // Pass in collection name and schema 

// 3. EXPORT MONGOOSE MODEL
module.exports = Joke;
