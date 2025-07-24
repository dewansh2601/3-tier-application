/**
 * @param {Array} items - [{ product_id, quantity }]
 * @param {Array} products - All products from DB
 * @param {Array} meals - All meals from DB (each includes associated Products through MealProduct)
 */
exports.optimizeBill = (items, products, meals) => {
  // Convert cart to a product quantity map
  const cartMap = {};
  let originalAmount = 0;

  for (const item of items) {
    const product = products.find(p => p.id === item.product_id);
    if (!product) throw new Error(`Product with ID ${item.product_id} not found`);
    cartMap[item.product_id] = (cartMap[item.product_id] || 0) + item.quantity;
    originalAmount += product.price * item.quantity;
  }

  let optimizedAmount = 0;
  const usedMeals = [];

  // Sort meals by total value of products in descending order (greedy)
  const sortedMeals = meals
    .map(meal => {
      const totalProductPrice = meal.Products.reduce((sum, p) => {
        const product = products.find(prod => prod.id === p.id);
        return sum + (product ? product.price * p.MealProduct.quantity : 0);
      }, 0);
      return { ...meal.toJSON(), totalProductPrice };
    })
    .sort((a, b) => b.totalProductPrice - a.totalProductPrice);

  // Apply each meal as many times as possible
  for (const meal of sortedMeals) {
    while (true) {
      const canApply = meal.Products.every(p => {
        const requiredQty = p.MealProduct.quantity;
        return cartMap[p.id] && cartMap[p.id] >= requiredQty;
      });

      if (!canApply) break;

      // Apply the meal combo
      optimizedAmount += meal.price;
      usedMeals.push({
        id: meal.id,
        name: meal.name,
        price: meal.price
      });

      // Deduct used quantities from cart
      for (const p of meal.Products) {
        cartMap[p.id] -= p.MealProduct.quantity;
        if (cartMap[p.id] === 0) delete cartMap[p.id];
      }
    }
  }

  // Add remaining individual product prices
  for (const [productId, qty] of Object.entries(cartMap)) {
    const product = products.find(p => p.id === productId);
    if (product) optimizedAmount += product.price * qty;
  }

  const savings = originalAmount - optimizedAmount;

  return {
    originalAmount,
    optimizedAmount,
    savings,
    usedMeal: usedMeals
  };
};

