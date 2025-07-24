const { Meal, Product } = require('../models');

exports.getAllMeals = async (req, res) => {
  try {
    const meals = await Meal.findAll({
      include: {
        model: Product,
        through: { attributes: ['quantity'] }
      }
    });
    res.json(meals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching meals', error });
  }
};
