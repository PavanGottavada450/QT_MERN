const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
  },
  modelName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("product",ProductSchema);

module.exports = Product;