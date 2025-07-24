


import React from 'react';
import ProductCard from './ProductCard';
import MealCard from './MealCard';
import CategoryFilter from './CategoryFilter';
import TypeFilter from './TypeFilter';

const MenuSection = ({
  products,
  meals,
  activeCategory,
  filterType,
  onCategoryChange,
  onFilterChange,
  onAddToCart,
  onRemoveFromCart,
  getCartItemCount,
}) => {
  const isCombos = activeCategory === 'combos';

  // Filtering logic
  const filteredItems = isCombos
    ? meals.filter(meal => filterType === 'all' || meal.type === filterType)
    : products.filter(
        product =>
          (activeCategory === 'all' || product.category === activeCategory) &&
          (filterType === 'all' || product.type === filterType)
      );

  return (
    <section id="menu" className="py-6 bg-gray-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters inline */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
          <TypeFilter filterType={filterType} onFilterChange={onFilterChange} />
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={onCategoryChange}
          />
        </div>

        {/* Unified Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item =>
            isCombos ? (
              <MealCard
                key={item.id}
                meal={item}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
                getCartItemCount={getCartItemCount}
              />
            ) : (
              <ProductCard
                key={item.id}
                product={item}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
                getCartItemCount={getCartItemCount}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;


