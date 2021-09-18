const mongoose = require("mongoose");

// 1. DEFINE THE SCHEMA
const ProductSchema = new mongoose.Schema({
  title: { type: String },
  price: { type: Number},
  description: { type: String }
}, { timestamps: true });

// 2. REGISTERING THE SCHEMA W/I MONGOOSE LIBRARY
const Product = mongoose.model("Product", ProductSchema);
// 3. EXPORT MONGOOSE MODEL
module.exports = Product;
