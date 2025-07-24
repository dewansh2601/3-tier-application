const { Product, Meal, Order } = require('../models');
const { optimizeBill } = require('../utils/billOptimizer');
const { v4: uuidv4 } = require('uuid');

exports.optimizeOrder = async (req, res) => {
  try {
    const { items } = req.body; // [{ product_id, quantity }]

    const productIds = items.map(i => i.product_id);
    const products = await Product.findAll({ where: { id: productIds } });

    const cart = items.map(i => {
      const product = products.find(p => p.id === i.product_id);
      return { ...i, price: product.price };
    });

    const meals = await Meal.findAll({
      include: {
        model: Product,
        through: { attributes: ['quantity'] }
      }
    });

    const result = optimizeBill(cart, products, meals);


    const newOrder = await Order.create({
      id: uuidv4(),
      original_amount: result.originalAmount,
      optimized_amount: result.optimizedAmount,
      savings: result.savings,
      data: {
        items: cart,
        usedMeal: result.usedMeal
      },
      status: 'optimized'
    });

    res.json(newOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Order optimization failed', error });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { items, original_amount, optimized_amount, savings, used_meals } = req.body;

    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ message: 'Invalid order format.' });
    }

    const newOrder = await Order.create({
      id: uuidv4(),
      original_amount,
      optimized_amount,
      savings,
      data: {
        items,
        usedMeal: used_meals
      },
      status: 'confirmed'
    });

    return res.status(201).json({ message: 'Order saved', order: newOrder });
  } catch (err) {
    console.error('Create order error:', err);
    return res.status(500).json({ message: 'Failed to save order' });
  }
};
