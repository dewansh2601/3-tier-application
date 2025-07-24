const { Product } = require('../models');

exports.getAllProducts = async (req, res) => {
  try {
    const { type, category } = req.query;

    const where = {};
    if (type) where.type = type;             // veg / nonveg
    if (category) where.category = category; // burger / fries / coke etc

    const products = await Product.findAll({ where });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
