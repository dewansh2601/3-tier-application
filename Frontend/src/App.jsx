import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import CartModal from './components/CartModal';
import OptimizationModal from './components/OptimizationModal';
import OptimizationDetailsModal from './components/OptimizationDetailsModal';
import CheckoutModal from './components/CheckoutModal';
import OrderPlacedModal from './components/OrderPlacedModal';
import { useCart } from './hooks/useCart';
import  {useOptimization}  from './hooks/useOptimization';
import { fetchProducts, fetchMeals } from './utils/api';

const App = () => {
  const [products, setProducts] = useState([]);
  const [meals, setMeals] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const { 
    cart, 
    addToCart, 
    removeFromCart, 
    getTotalAmount, 
    getCartItemCount,
    clearCart, 
    getProductQuantity
  } = useCart();

  const {
    optimizedOrder,
    showOptimization,
    showOptimizationDetails,
    optimizeOrder,
    showOptimizationExplanation,
    hideOptimization,
    hideOptimizationDetails
  } = useOptimization(cart, products, meals);

 
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [productsData, mealsData] = await Promise.all([
        fetchProducts(),
        fetchMeals()
      ]);
      setProducts(productsData);
      setMeals(mealsData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const proceedToCheckout = () => {
    hideOptimization();
    hideOptimizationDetails();
    setShowCheckout(true);
    setTimeout(() => {
      setShowCheckout(false);
      setOrderPlaced(true);
      clearCart();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        cartItemCount={getCartItemCount()} 
        onCartClick={() => setShowCart(true)} 
      />
      
      {/* <HeroSection /> */}
      
      <MenuSection
        products={products}
        meals={meals}
        activeCategory={activeCategory}
        filterType={filterType}
        onCategoryChange={setActiveCategory}
        onFilterChange={setFilterType}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        getCartItemCount={getProductQuantity}
      />

    

      {showCart && (
        <CartModal
          cart={cart}
          onClose={() => setShowCart(false)}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          totalAmount={getTotalAmount()}
          cartItemCount={getCartItemCount()}
          onOptimize={optimizeOrder}
        />
      )}

 

      {showOptimization && optimizedOrder && (
        <OptimizationModal
          optimizedOrder={optimizedOrder}
          onClose={hideOptimization}
          onShowDetails={showOptimizationExplanation}
          onProceedToCheckout={proceedToCheckout}
        />
      )}

      {showOptimizationDetails && optimizedOrder && (
        <OptimizationDetailsModal
          optimizedOrder={optimizedOrder}
          onClose={hideOptimizationDetails}
          onProceedToCheckout={proceedToCheckout}
        />
      )}

      {showCheckout && (
        <CheckoutModal />
      )}

      {orderPlaced && (
        <OrderPlacedModal
          onClose={() => setOrderPlaced(false)}
        />
      )}
    </div>
  );
};

export default App;