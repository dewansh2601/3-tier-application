import { useState, useEffect } from 'react';

export const useCart = () => {
  // Load cart from localStorage when hook initializes
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.product_id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.product_id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));

    
    } else {
      setCart([...cart, {
        product_id: product.id,
        quantity: 1,
        name: product.name,
        price: product.price
      }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingItem = cart.find(item => item.product_id === productId);
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(item =>
        item.product_id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ));
    } else {
      setCart(cart.filter(item => item.product_id !== productId));
    }
  };

  

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart'); // Optional: clear storage on order placed
  };

  const getProductQuantity = (productId) => {
  const item = cart.find(item => item.product_id === productId);
  return item ? item.quantity : 0;
};


  const addMealToCart = (meal) => {
  // Add meal as a single item with special handling
  const existingItem = cart.find(item => item.product_id === meal.id && item.type === 'meal');
  if (existingItem) {
    setCart(cart.map(item =>
      item.product_id === meal.id && item.type === 'meal'
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  } else {
    setCart([...cart, {
      product_id: meal.id,
      quantity: 1,
      name: meal.name,
      price: meal.price,
      type: 'meal',
      description: meal.description,
      products: meal.Products // Store included products for display
    }]);
  }
};

// Update the return statement to include the new function
return {
  cart,
  addToCart,
  addMealToCart, // Add this line
  removeFromCart,
  getTotalAmount,
  getCartItemCount,
  clearCart,
  getProductQuantity
};
};
