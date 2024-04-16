const mongoose = require('mongoose');

// Define the ingredient schema
const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('BakeryIngre', ingredientSchema);
