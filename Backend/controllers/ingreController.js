const ingre = require('../models/BakeryIngre');
const { findById } = require('../models/BakeryItem');

exports.getAllIngre = async (req, res) => {
    try {
        const ingre1 = await ingre.find();
        res.json(ingre1);
      } catch (error) {
        console.error('Error fetching bakery items:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
};

exports.updateIngredient = async (req, res) => {
    
    const { ingredientId } = req.params;
    const { name, quantity } = req.body;
    // console.log('Request Params id:', ingredientId);
    // console.log('Request Body:', req.body);
        const ingredient = await ingre.findById(ingredientId);
        // Check if the ingredient exists
        if (!ingredient) {
            return res.status(404).json({ message: 'Ingredient not found' });
        }

        // Log the current quantity
        // console.log('Current quantity:', ingredient.quantity);
        // const updatedQuantity = ingredient.quantity-quantity;
        // console.log(updatedQuantity)
        
          try {
            const updatedIngredient = await ingre.findByIdAndUpdate(ingredientId, { name,  $inc: { quantity: -quantity }  });
            // Check if the ingredient was found and updated successfully
            if (!updatedIngredient) {
              return res.status(404).json({ message: 'Ingredient not found' });
            }
            // Respond with the updated ingredient
            res.json(updatedIngredient);
          } catch (error) {
            console.error('Error updating ingredient:', error);
            res.status(500).json({ message: 'Internal server error' });
          }
  };
     

  exports.reduceIngredientQuantity = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    console.log(req.body);
    console.log("printing amount",quantity," id", id)

    try {
      // Find the ingredient by ID and update its quantity by subtracting the specified amount
      const updatedIngredient = await ingre.findByIdAndUpdate(id, { $inc: { quantity: -quantity } });
      console.log("no error");
      // Check if the ingredient was found and updated successfully
      if (!updatedIngredient) {
        return res.status(404).json({ message: 'Ingredient not found' });
      }
      console.log("no error");
      
      // Respond with the updated ingredient
      res.json(updatedIngredient);
      console.log("no error");

    } catch (error) {
      console.error('Error reducing ingredient quantity:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


  exports.updateIngredientByName = async (req, res) => {
    const { name } = req.params; // Correctly destructure 'name' from 'req.params'
    const { quantity } = req.body;

    console.log('Request Params name:', req.params);
    console.log('Request Body:', req.body);

    try {
        // Find the ingredient by name and update its quantity
        const updatedIngredient = await ingre.findOneAndUpdate(
            { name: name },
            { quantity: quantity}
        );

        // Check if the ingredient was found and updated successfully
        if (!updatedIngredient) {
            return res.status(404).json({ message: 'Ingredient not found name' });
        }
        // Respond with the updated ingredient
        res.json(updatedIngredient);
    } catch (error) {
        console.error('Error updating ingredient:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};