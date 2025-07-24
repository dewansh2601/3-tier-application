import { useState } from 'react';

export const useOptimization = (cart, products, meals) => {
  const [optimizedOrder, setOptimizedOrder] = useState(null);
  const [showOptimization, setShowOptimization] = useState(false);
  const [showOptimizationDetails, setShowOptimizationDetails] = useState(false);

  // const optimizeOrderWithDetails = () => {
  //   const cartMap = {};
  //   const originalAmount = cart.reduce((acc, item) => {
  //     const product = products.find(p => p.id === item.product_id);
  //     if (product) {
  //       cartMap[item.product_id] = (cartMap[item.product_id] || 0) + item.quantity;
  //       return acc + product.price * item.quantity;
  //     }
  //     return acc;
  //   }, 0);

  //   const usedMeals = [];
  //   const optimizationSteps = [];
  //   let currentCartMap = { ...cartMap };
  //   let optimizedAmount = 0;

  //   const sortedMeals = [...meals].sort((a, b) => {
  //     const savingsA = a.Products.reduce((sum, p) => sum + p.price * p.MealProduct.quantity, 0) - a.price;
  //     const savingsB = b.Products.reduce((sum, p) => sum + p.price * p.MealProduct.quantity, 0) - b.price;
  //     return savingsB - savingsA;
  //   });

  //   for (const meal of sortedMeals) {
  //     let appliedCount = 0;
      
  //     while (true) {
  //       const canApply = meal.Products.every(p => {
  //         const neededQty = p.MealProduct.quantity;
  //         return currentCartMap[p.id] && currentCartMap[p.id] >= neededQty;
  //       });

  //       if (!canApply) break;

  //       const individualCost = meal.Products.reduce((sum, p) => sum + p.price * p.MealProduct.quantity, 0);
  //       const mealSavings = individualCost - meal.price;

  //       optimizedAmount += meal.price;
  //       usedMeals.push(meal);
  //       appliedCount++;

  //       // Record optimization step
  //       optimizationSteps.push({
  //         type: 'meal',
  //         meal: meal,
  //         individualCost: individualCost,
  //         mealPrice: meal.price,
  //         savings: mealSavings,
  //         appliedCount: appliedCount
  //       });

  //       // Subtract meal product quantities from currentCartMap
  //       for (const p of meal.Products) {
  //         currentCartMap[p.id] -= p.MealProduct.quantity;
  //         if (currentCartMap[p.id] === 0) delete currentCartMap[p.id];
  //       }
  //     }
  //   }

  //   // Add remaining product prices (not part of any meal)
  //   const remainingItems = [];
  //   for (const [productId, qty] of Object.entries(currentCartMap)) {
  //     const product = products.find(p => p.id === productId);
  //     if (product) {
  //       optimizedAmount += product.price * qty;
  //       remainingItems.push({ product, quantity: qty });
  //     }
  //   }

  //   if (remainingItems.length > 0) {
  //     optimizationSteps.push({
  //       type: 'remaining',
  //       items: remainingItems,
  //       cost: remainingItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  //     });
  //   }

  //   const totalSavings = originalAmount - optimizedAmount;

  //   return {
  //     original_amount: originalAmount,
  //     optimized_amount: optimizedAmount,
  //     savings: totalSavings,
  //     optimizationSteps: optimizationSteps,
  //     usedMeals: usedMeals,
  //     data: {
  //       items: cart,
  //       usedMeals: usedMeals
  //     },
  //     status: usedMeals.length > 0 ? 'optimized' : 'original'
  //   };
  // };

  const optimizeOrder = async () => {
    try {
      const response = await fetch('/api/orders/optimize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }),
      });
      const data = await response.json();
      console.log('Backend optimized data:', data);
      setOptimizedOrder(data);
      setShowOptimization(true);
    } catch (error) {
      console.error('Error optimizing order:', error);
      // // Use mock optimization with detailed explanation
      // const optimizationResult = optimizeOrderWithDetails();
      // setOptimizedOrder(optimizationResult);
      // setShowOptimization(true);
    }
  };

  const showOptimizationExplanation = () => {
    setShowOptimization(false);
    setShowOptimizationDetails(true);
  };

  const hideOptimization = () => {
    setShowOptimization(false);
  };

  const hideOptimizationDetails = () => {
    setShowOptimizationDetails(false);
  };

  return {
    optimizedOrder,
    showOptimization,
    showOptimizationDetails,
    optimizeOrder,
    showOptimizationExplanation,
    hideOptimization,
    hideOptimizationDetails
  };
};