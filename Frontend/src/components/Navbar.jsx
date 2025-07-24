


import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartItemCount, onCartClick }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-600">BurgerHub</h1>
        <button
          onClick={onCartClick}
          className="relative flex items-center gap-2 text-sm bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
        >
          <ShoppingCart className="w-5 h-5" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
