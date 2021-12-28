const mongoose = require('mongoose');
const ProductSchema = require('../schema/productSchema');

const Product = mongoose.model("product", ProductSchema)

module.exports = Product