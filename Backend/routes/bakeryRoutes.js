const express = require('express');
const router = express.Router();
const bakeryController = require('../controllers/bakeryController');

//Different routes to handle the request for the bakery items
router.get('/', bakeryController.getAllBakeryItems);
router.get('/get/:id',bakeryController.getBakeryItemById);
router.post('/', bakeryController.createBakeryItem);

module.exports = router;
