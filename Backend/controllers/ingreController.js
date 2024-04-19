const ingre = require('../models/BakeryIngre');

//getting all the ingreindents from database
exports.getAllIngre = async (req, res) => {
    try {
        const ingre1 = await ingre.find();
        res.json(ingre1);
      } catch (error) {
        console.error('Error fetching bakery items:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
};

// to update the api based on the id 
exports.updateIngredient = async (req, res) => {
    const { ingredientId } = req.params;
    const { name, quantity } = req.body;
    const ingredient = await ingre.findById(ingredientId);
    if (!ingredient) {
      return res.status(404).json({ message: 'Ingredient not found' });
    }
    try {
      const updatedIngredient = await ingre.findByIdAndUpdate(ingredientId, { name,  $inc: { quantity: -quantity }  });
      if (!updatedIngredient) {
        return res.status(404).json({ message: 'Ingredient not found' });
      }
      res.json(updatedIngredient);
    } catch (error) {
      console.error('Error updating ingredient:', error);
      res.status(500).json({ message: 'Internal server error' });
    }          
};
     
// to reduce teh quantitiy based on hte id
  exports.reduceIngredientQuantity = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    console.log(req.body);
    console.log("printing amount",quantity," id", id)

    const databaseQuantity = await ingre.findById(id).select('quantity')
    const value = databaseQuantity.quantity;
    const value1 = value - quantity;
    
    try {
      const updatedIngredient = await ingre.findByIdAndUpdate(id, { $inc: { quantity: -quantity } });
      console.log("no error");
      if (!updatedIngredient) {
        return res.status(404).json({ message: 'Ingredient not found' });
      }
      console.log("no error");
      res.json(updatedIngredient);
      console.log("no error");
    } catch (error) {
      console.error('Error reducing ingredient quantity:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

//updating the ingredients based on the name
  exports.updateIngredientByName = async (req, res) => {
    const { name } = req.params; 
    const { quantity } = req.body;
    console.log('Request Params name:', req.params);
    console.log('Request Body:', req.body);
    try {
        const updatedIngredient = await ingre.findOneAndUpdate(
            { name: name },
            { quantity: quantity}
        );
        if (!updatedIngredient) {
            return res.status(404).json({ message: 'Ingredient not found name' });
        }
        res.json(updatedIngredient);
    } catch (error) {
        console.error('Error updating ingredient:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};