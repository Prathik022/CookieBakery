const express = require('express');
const router = express.Router();
const ingreController = require('../controllers/ingreController');

//Different routes to handle the request for the Ingredients
router.get('/',ingreController.getAllIngre);
router.put('/:ingredientId', ingreController.updateIngredient);
router.post('/post/:id', ingreController.reduceIngredientQuantity);
router.put('/name/:name', ingreController.updateIngredientByName);

module.exports = router;