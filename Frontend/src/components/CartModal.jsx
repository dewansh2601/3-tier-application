// import React from 'react';
// import { X, Plus, Minus } from 'lucide-react';

// const CartModal = ({ 
//   cart, 
//   onClose, 
//   onAddToCart, 
//   onRemoveFromCart, 
//   totalAmount, 
//   cartItemCount, 
//   onOptimize 
// }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-20 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col">
//         <div className="p-6 border-b border-gray-200 flex-shrink-0">
//           <div className="flex justify-between items-center">
//             <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//               <X className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
        
//         {/* Cart Items - Scrollable */}
//         <div className="flex-1 overflow-y-auto p-6">
//           {cart.length === 0 ? (
//             <div className="text-center py-12">
//               <div className="text-6xl mb-4">🛒</div>
//               <p className="text-gray-500 text-lg">Your cart is empty</p>
//               <p className="text-gray-400 text-sm mt-2">Add some delicious items to get started!</p>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {cart.map(item => (
//                 <div key={item.product_id} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-gray-800">{item.name}</h3>
//                     <p className="text-sm text-gray-600">₹{item.price} each</p>
//                     <p className="text-sm font-medium text-gray-800">Total: ₹{item.price * item.quantity}</p>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <button
//                       onClick={() => onRemoveFromCart(item.product_id)}
//                       className="bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
//                     >
//                       <Minus className="w-4 h-4" />
//                     </button>
//                     <span className="font-semibold text-gray-800 min-w-[24px] text-center">{item.quantity}</span>
//                     <button
//                       onClick={() => onAddToCart({ id: item.product_id, name: item.name, price: item.price })}
//                       className="bg-green-500 text-white rounded-full p-1 hover:bg-green-600 transition-colors"
//                     >
//                       <Plus className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Cart Footer - Fixed */}
//         {cart.length > 0 && (
//           <div className="p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <p className="text-sm text-gray-600">Total Items: {cartItemCount}</p>
//                 <p className="text-lg font-semibold text-gray-800">Total: ₹{totalAmount}</p>
//               </div>
//             </div>
//             <button
//               onClick={onOptimize}
//               className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
//             >
//               Optimize Bill & Save Money 💰
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartModal;

import React from 'react';
import { X, Plus, Minus } from 'lucide-react';

const CartModal = ({
  cart,
  onClose,
  onAddToCart,
  onRemoveFromCart,
  totalAmount,
  cartItemCount,
  onOptimize,
  
}) => {
  return (
    <div className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-md shadow-full p-4">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-bold">Cart</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {cart.map(item => (
              <div
                key={item.product_id}
                className="flex justify-between items-center border p-2 rounded"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">₹{item.price} each</p>
                  <p className="text-sm">Total: ₹{item.price * item.quantity}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onRemoveFromCart(item.product_id)}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    <Minus className="w-4 h-4 color-red" />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      onAddToCart({
                        id: item.product_id,
                        name: item.name,
                        price: item.price,
                      })
                    }
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    <Plus className="w-4 h-4 color-green"  />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {cart.length > 0 && (
          <div className="mt-4 border-t pt-2">
            <p className="text-sm">Total Items: {cartItemCount}</p>
            <p className="font-semibold">Total Amount: ₹{totalAmount}</p>
            <button
              onClick={onOptimize}
              className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded"
            >
              Optimize Bill
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
