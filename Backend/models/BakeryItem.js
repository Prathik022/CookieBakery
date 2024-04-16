const mongoose = require('mongoose');

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
