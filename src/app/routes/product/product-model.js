const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
})

const ProductModel = mongoose.model("Product", productSchema)
module.exports = ProductModel