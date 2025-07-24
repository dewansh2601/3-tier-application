const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true
  },
  name: DataTypes.STRING,
  price: DataTypes.INTEGER,
  category: DataTypes.STRING,
  type: DataTypes.STRING,
  size: DataTypes.STRING,
  description: DataTypes.TEXT,
  image_url: DataTypes.STRING,
  is_active: DataTypes.BOOLEAN,
}, { timestamps: true });

module.exports = Product;
