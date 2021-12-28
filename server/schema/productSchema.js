const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        id: String,
        title: String,
        imageurl: String,
        desc: String,
        price: Number,
        sizes: [String]
    })


module.exports = ProductSchema