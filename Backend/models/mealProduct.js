const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const MealProduct = sequelize.define('MealProduct', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true
  },
  meal_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  product_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  quantity: DataTypes.INTEGER
}, { timestamps: true });

module.exports = MealProduct;
