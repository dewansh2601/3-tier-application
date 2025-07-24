const Product = require('./product');
const Meal = require('./meal');
const MealProduct = require('./mealProduct');
const Order = require('./order');

Meal.belongsToMany(Product, {
  through: MealProduct,
  foreignKey: 'meal_id',
  otherKey: 'product_id'
});

Product.belongsToMany(Meal, {
  through: MealProduct,
  foreignKey: 'product_id',
  otherKey: 'meal_id'
});

module.exports = { Product, Meal, MealProduct, Order };
