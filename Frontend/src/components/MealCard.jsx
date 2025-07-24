// import React from 'react';
// import { ShoppingCart } from 'lucide-react';

// const MealCard = ({ meal, onAddToCart }) => {
//   const originalPrice = meal.Products.reduce(
//     (total, p) => total + p.price * p.MealProduct.quantity,
//     0
//   );
//   const savings = originalPrice - meal.price;

//   return (
//     <div className="bg-white border rounded-xl shadow hover:shadow-lg transition duration-300">
//       {/* Meal Image */}
//       <img
//         src={meal.image_url}
//         alt={meal.name}
//         className="w-full h-48 object-cover rounded-t-xl"
//       />

//       {/* Meal Content */}
//       <div className="p-5">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="text-lg font-semibold text-gray-800">{meal.name}</h3>
//           <div className={`text-sm px-2 py-0.5 rounded-full font-medium ${
//             meal.type === 'veg' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
//           }`}>
//             {meal.type === 'veg' ? '🌱 Veg' : '🍖 Non-Veg'}
//           </div>
//         </div>

//         {/* Description */}
//         <p className="text-sm text-gray-600 mb-3">{meal.description}</p>

//         {/* Includes */}
//         <div className="mb-3">
//           <p className="text-xs text-gray-500 font-medium mb-1">Includes:</p>
//           <div className="flex flex-wrap gap-1">
//             {meal.Products.map((product, index) => (
//               <span
//                 key={index}
//                 className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
//               >
//                 {product.name} ×{product.MealProduct.quantity}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Pricing */}
//         <div className="mb-4 text-sm">
//           <p className="line-through text-gray-400">₹{originalPrice}</p>
//           <p className="text-green-600 font-semibold">Save ₹{savings}</p>
//         </div>

//         {/* Price & Add to Cart */}
//         <div className="flex justify-between items-center">
//           <span className="text-purple-600 font-bold text-lg">₹{meal.price}</span>
//           <button
//             onClick={() => onAddToCart(meal)}
//             className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition"
//           >
//             <ShoppingCart className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MealCard;



import React from 'react';
import { Plus, Minus } from 'lucide-react';

const MealCard = ({ meal, onAddToCart, onRemoveFromCart, getCartItemCount }) => {
  const quantity = getCartItemCount(meal.id);

  const originalPrice = meal.Products.reduce(
    (total, p) => total + p.price * p.MealProduct.quantity,
    0
  );

  const savings = originalPrice - meal.price;

  return (
    <div className="bg-white border rounded-md p-4">
      {/* Meal Image */}
      <div className="mb-4">
        <img
          src={meal.image_url}
          alt={meal.name}
          className="w-full h-40 object-cover rounded-md border"
        />
        <div className="mt-2 text-sm text-gray-600">
          {meal.type === 'veg' ? '🌱 Veg' : '🍖 Non-Veg'}
        </div>
      </div>

      {/* Meal Name and Description */}
      <h3 className="text-lg font-semibold mb-1">{meal.name}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {meal.description || "No description available."}
      </p>

      {/* Included Items */}
      <div className="text-xs text-gray-500 mb-2">
        Includes:{' '}
        {meal.Products.map((p, index) => (
          <span key={index} className="inline-block mr-1">
            {p.name} x{p.MealProduct.quantity}
          </span>
        ))}
      </div>

      {/* Price and Savings */}
      <div className="mb-2">
        <div className="text-red-500 font-medium">
          ₹{meal.price}{' '}
          <span className="line-through text-sm text-gray-400 ml-2">
            ₹{originalPrice}
          </span>
        </div>
        <div className="text-green-600 text-sm font-semibold">
          You Save ₹{savings}
        </div>
      </div>

      {/* Cart Controls */}
      {quantity > 0 ? (
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onRemoveFromCart(meal.id)}
            className="px-2 py-1 rounded bg-red-500 text-white"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="min-w-[24px] text-center">{quantity}</span>
          <button
            onClick={() => onAddToCart(meal)}
            className="px-2 py-1 rounded bg-green-500 text-white"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => onAddToCart(meal)}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded text-sm"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default MealCard;
