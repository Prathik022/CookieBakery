const mongoose = require('mongoose');

//Defining the bakeryItems Schema
const bakeryItemSchema = new mongoose.Schema({
  name: String,
  ingredients: {
    name : String, quantity : String
  },
  shape: String,
  bakingTime: Number,
  cost: Number,
  calories: Number,
});

module.exports = mongoose.model('BakeryItem', bakeryItemSchema);
