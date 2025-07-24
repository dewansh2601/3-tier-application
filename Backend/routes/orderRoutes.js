const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/optimize', orderController.optimizeOrder);

router.post('/', orderController.createOrder); 


module.exports = router;
