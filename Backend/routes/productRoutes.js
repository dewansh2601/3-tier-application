const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET all products with optional filtering
router.get('/', productController.getAllProducts);

module.exports = router;
