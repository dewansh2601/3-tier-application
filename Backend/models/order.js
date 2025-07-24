const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true
  },
  original_amount: DataTypes.INTEGER,
  optimized_amount: DataTypes.INTEGER,
  savings: DataTypes.INTEGER,
  data: DataTypes.JSON,
  status: DataTypes.STRING,
}, { timestamps: true });

module.exports = Order;
