const BakeryItem = require('../models/BakeryItem');

exports.getAllBakeryItems = async (req, res) => {
  try {
    const bakeryItems = await BakeryItem.find();
    res.json(bakeryItems);
  } catch (error) {
    console.error('Error fetching bakery items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getBakeryItemById = async (req, res) => {
  const { id } = req.params; // Get the ID from request parameters
  try {
    const bakeryItem = await BakeryItem.findById(id); // Find bakery item by ID
    if (!bakeryItem) {
      return res.status(404).json({ message: 'Bakery item not found' });
    }
    res.json(bakeryItem);
  } catch (error) {
    console.error('Error fetching bakery item by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.createBakeryItem = async (req, res) => {
  const { name, ingredients, shape, bakingTime, cost, calories } = req.body;
  
  try {
    const newBakeryItem = new BakeryItem({
      name,
      ingredients,
      shape,
      bakingTime,
      cost,
      calories,
    });
    await newBakeryItem.save();
    res.status(201).json(newBakeryItem);
  } catch (error) {
    console.error('Error creating bakery item:', error);
    res.status(400).json({ message: 'Invalid request' });
  }
};
