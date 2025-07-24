const { Product, Meal, MealProduct } = require('../models');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const seedData = async () => {
  try {
    await sequelize.sync({ force: true });

   
    const products = [
      // Burgers
      { name: 'Veg Burger', price: 100, category: 'burger', type: 'veg', size: 'medium', desc: 'Classic veggie burger', image_url: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop' },
      { name: 'Chicken Burger', price: 130, category: 'burger', type: 'nonveg', size: 'medium', desc: 'Juicy chicken burger', image_url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop' },
      { name: 'Paneer Burger', price: 140, category: 'burger', type: 'veg', size: 'large', desc: 'Spicy paneer burger', image_url: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop' },
      { name: 'Cheese Burger', price: 150, category: 'burger', type: 'veg', size: 'large', desc: 'Cheesy indulgent burger', image_url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop' },
      { name: 'Double Patty Burger', price: 170, category: 'burger', type: 'nonveg', size: 'large', desc: 'Double meat burger', image_url: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop' },

      // Fries
      { name: 'Small Fries', price: 60, category: 'fries', type: 'veg', size: 'small', desc: 'Crispy small fries', image_url: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop' },
      { name: 'Medium Fries', price: 80, category: 'fries', type: 'veg', size: 'medium', desc: 'Perfectly salted fries', image_url: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop' },
      { name: 'Large Fries', price: 100, category: 'fries', type: 'veg', size: 'large', desc: 'Shareable size fries', image_url: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop' },
      { name: 'Cheese Fries', price: 110, category: 'fries', type: 'veg', size: 'medium', desc: 'Fries topped with cheese', image_url: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop' },
      { name: 'Peri Peri Fries', price: 120, category: 'fries', type: 'veg', size: 'medium', desc: 'Spicy peri peri flavor', image_url: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop' },

      // Cold Drinks
      { name: 'Coke', price: 60, category: 'cold drink', type: 'veg', size: '300ml', desc: 'Classic coke', image_url: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop' },
      { name: 'Pepsi', price: 60, category: 'cold drink', type: 'veg', size: '300ml', desc: 'Refreshing Pepsi', image_url: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop' },
      { name: 'Sprite', price: 60, category: 'cold drink', type: 'veg', size: '300ml', desc: 'Lemony Sprite', image_url: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop' },
      { name: 'Mirinda', price: 60, category: 'cold drink', type: 'veg', size: '300ml', desc: 'Tangy orange Mirinda', image_url: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop' },

      // Sides
      { name: 'Veg Nuggets', price: 90, category: 'sides', type: 'veg', size: 'small', desc: '6 pieces of nuggets', image_url: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop' },
      { name: 'Chicken Popcorn', price: 110, category: 'sides', type: 'nonveg', size: 'small', desc: 'Spicy chicken bites', image_url: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop' },
      { name: 'Garlic Bread', price: 80, category: 'sides', type: 'veg', size: 'medium', desc: 'Buttery garlic bread', image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop' },
      { name: 'Cheesy Sticks', price: 90, category: 'sides', type: 'veg', size: 'small', desc: 'Mozzarella cheese sticks', image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop' },

      // Sweets
      { name: 'Choco Lava Cake', price: 90, category: 'sweets', type: 'veg', size: 'small', desc: 'Molten choco core', image_url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop' },
      { name: 'Vanilla Ice Cream', price: 70, category: 'sweets', type: 'veg', size: 'small', desc: '2 scoops of vanilla', image_url: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop' },
      { name: 'Brownie', price: 80, category: 'sweets', type: 'veg', size: 'small', desc: 'Rich chocolate brownie', image_url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop' }
    ];

    const fullProducts = await Promise.all(products.map(async (p) => {
      const prod = await Product.create({
        id: uuidv4(),
        name: p.name,
        price: p.price,
        category: p.category,
        type: p.type,
        size: p.size,
        description: p.desc,
        image_url: p.image_url,
        is_active: true
      });
      return prod;
    }));

    console.log(`✅ Inserted ${fullProducts.length} products:\n`, fullProducts.map(p => `- ${p.name}`).join('\n'));

    // Helper to get product by name
    const findProd = name => fullProducts.find(p => p.name === name);

    const meals = [
      {
        name: 'Veg Delight Combo',
        price: 229,
        type: 'veg',
        description: 'Veg Burger + Medium Fries + Coke',
        image_url: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop',
        items: [
          { name: 'Veg Burger', qty: 1 },
          { name: 'Medium Fries', qty: 1 },
          { name: 'Coke', qty: 1 }
        ]
      },
      {
        name: 'Chicken Blast Combo',
        price: 259,
        type: 'nonveg',
        description: 'Chicken Burger + Peri Peri Fries + Pepsi',
        image_url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop',
        items: [
          { name: 'Chicken Burger', qty: 1 },
          { name: 'Peri Peri Fries', qty: 1 },
          { name: 'Pepsi', qty: 1 }
        ]
      },
      {
        name: 'Paneer Party Combo',
        price: 269,
        type: 'veg',
        description: 'Paneer Burger + Cheese Fries + Sprite',
        image_url: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=300&fit=crop',
        items: [
          { name: 'Paneer Burger', qty: 1 },
          { name: 'Cheese Fries', qty: 1 },
          { name: 'Sprite', qty: 1 }
        ]
      },
      {
        name: 'Family Feast',
        price: 599,
        type: 'mix',
        description: '2 Cheese Burgers + 2 Large Fries + 2 Mirinda + 2 Brownie',
        image_url: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&h=300&fit=crop',
        items: [
          { name: 'Cheese Burger', qty: 2 },
          { name: 'Large Fries', qty: 2 },
          { name: 'Mirinda', qty: 2 },
          { name: 'Brownie', qty: 2 }
        ]
      },
      {
        name: 'Sweet & Chill',
        price: 139,
        type: 'veg',
        description: 'Ice Cream + Brownie + Coke',
        image_url: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=500&h=300&fit=crop',
        items: [
          { name: 'Vanilla Ice Cream', qty: 1 },
          { name: 'Brownie', qty: 1 },
          { name: 'Coke', qty: 1 }
        ]
      },
      {
        name: 'Cheesy Sides Combo',
        price: 149,
        type: 'veg',
        description: 'Garlic Bread + Cheesy Sticks + Coke',
        image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=500&h=300&fit=crop',
        items: [
          { name: 'Garlic Bread', qty: 1 },
          { name: 'Cheesy Sticks', qty: 1 },
          { name: 'Coke', qty: 1 }
        ]
      }
    ];

    for (const m of meals) {
      const meal = await Meal.create({
        id: uuidv4(),
        name: m.name,
        price: m.price,
        type: m.type,
        description: m.description,
        image_url: m.image_url,
        is_active: true
      });

      for (const item of m.items) {
        const prod = findProd(item.name);
        await MealProduct.create({
          id: uuidv4(),
          meal_id: meal.id,
          product_id: prod.id,
          quantity: item.qty
        });
      }

      console.log(`✅ Combo created: ${m.name}`);
      m.items.forEach(i => console.log(`   - ${i.qty} x ${i.name}`));
    }

    console.log(`🎉 All dummy data seeded successfully!\n`);
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding dummy data:', err);
    process.exit(1);
  }
};

seedData();