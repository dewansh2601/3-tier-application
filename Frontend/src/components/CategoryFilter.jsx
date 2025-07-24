


import React from 'react';

const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'burger', name: 'Burgers' },
  { id: 'fries', name: 'Fries'},
  { id: 'cold drink', name: 'Drinks'},
  { id: 'sides', name: 'Sides' },
  { id: 'sweets', name: 'Sweets' },
  { id: 'combos', name: 'Combos'},
];

const CategoryFilter = ({ activeCategory, onCategoryChange }) => (
  <div className="flex flex-wrap justify-center gap-2 mb-10">
    {categories.map(({ id, name, icon }) => (
      <button
        key={id}
        onClick={() => onCategoryChange(id)}
        className={`px-5 py-2 rounded-full text-sm font-medium transition ${
          activeCategory === id
            ? 'bg-red-500 text-white shadow'
            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
        }`}
      >
        <span className="mr-1">{icon}</span>{name}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
