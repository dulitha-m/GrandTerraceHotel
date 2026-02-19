const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Menu schema
const MenuSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
});

// Restaurant Schema
const RestaurantSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    cuisine: { type: String, required: true },
    image: { type: String, required: true },
    menus: [MenuSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
