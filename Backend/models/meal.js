const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const Meal = sequelize.define('Meal', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true
  },
  name: DataTypes.STRING,
  price: DataTypes.INTEGER,
  type: DataTypes.STRING,
  description: DataTypes.TEXT,
  image_url: DataTypes.STRING,
  is_active: DataTypes.BOOLEAN,
}, { timestamps: true });

module.exports = Meal;
