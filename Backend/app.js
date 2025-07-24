const express = require('express');
const app = express();
const sequelize = require('./config/database');
const { Product, Meal, Order, MealProduct } = require('./models');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');
const mealRoutes = require('./routes/mealRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use(cors());

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/orders', orderRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log("DB connected and synced");
  app.listen(3000, () => console.log("Server running on http://localhost:3000"));
});
