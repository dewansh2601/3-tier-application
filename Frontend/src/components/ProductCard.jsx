

import React from 'react';
import { Plus, Minus } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onRemoveFromCart, getCartItemCount }) => {
  // 👇 Call the function properly with product.id
  const quantity = getCartItemCount(product.id);

  return (
    <div className="bg-white border rounded-md p-4">
      <div className="mb-4">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md border"
        />
        <div className="mt-2 text-sm text-gray-600">
          {product.type === 'veg' ? '🌱 Veg' : '🍖 Non-Veg'}
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-3">
        {product.description || "No description available."}
      </p>

      <div className="text-green-800 font-medium mb-2">₹{product.price}</div>

      {quantity > 0 ? (
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onRemoveFromCart(product.id)}
            className="px-2 py-1 rounded bg-red-500"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="min-w-[24px] text-center">{quantity}</span>
          <button
            onClick={() => onAddToCart(product)}
            className=" px-2 py-1 rounded bg-green-500"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => onAddToCart(product)}
          className="bg-green-800 text-white px-4 py-2 px-4 py-1 rounded-full font-medium transition-all text-sm"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
