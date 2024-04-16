const express = require('express');
const router = express.Router();
const ingreController = require('../controllers/ingreController');

router.get('/',ingreController.getAllIngre);
router.put('/:ingredientId', ingreController.updateIngredient);
router.post('/post/:id', ingreController.reduceIngredientQuantity);
router.put('/name/:name', ingreController.updateIngredientByName);

module.exports = router;