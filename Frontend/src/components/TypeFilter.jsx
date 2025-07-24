

import React from 'react';

const types = [
  { id: 'all', label: 'All' },
  { id: 'veg', label: 'Veg' },
  { id: 'nonveg', label: 'Non-Veg' },
];

const TypeFilter = ({ filterType, onFilterChange }) => (
  <div className="flex justify-center mb-10">
    <div className="bg-white p-1 rounded-full shadow-sm border border-gray-200">
      {types.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onFilterChange(id)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            filterType === id
              ? 'bg-red-500 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
);

export default TypeFilter;
