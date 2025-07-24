
import React from 'react';
import { X } from 'lucide-react';

const OptimizationDetailsModal = ({ optimizedOrder, onClose, onProceedToCheckout }) => {
  const { optimizationSteps, usedMeal, data, original_amount, optimized_amount, savings } = optimizedOrder || {};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-xl">
 
         <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">🧮 Optimization Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {optimizationSteps?.length > 0 ? (
            optimizationSteps.map((step, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-xl">
                {step.type === 'meal' && (
                  <>
                    <h3 className="font-semibold text-green-800 mb-2">🍱 Combo: {step.meal.name}</h3>
                    <ul className="list-disc pl-5 text-sm text-gray-700 mb-2">
                      {step.meal.Products.map((p, i) => (
                        <li key={i}>
                          {p.name} x{p.MealProduct.quantity} (₹{p.price} each)
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-600">
                      Combo Price: ₹{step.mealPrice} | Individual: ₹{step.individualCost} | <span className="font-semibold text-green-600">Saved ₹{step.savings}</span>
                    </p>
                  </>
                )}
                {step.type === 'remaining' && (
                  <>
                    <h3 className="font-semibold text-gray-800 mb-2">🛒 Remaining Items</h3>
                    {step.items.map((item, idx) => (
                      <p key={idx} className="text-sm text-gray-700">
                        {item.product.name} x{item.quantity} = ₹{item.product.price * item.quantity}
                      </p>
                    ))}
                  </>
                )}
              </div>
            ))
          ) : (
            <>
              {/* Backend fallback UI */}
              {usedMeal?.length > 0 && (
                <div className="bg-green-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-green-800 mb-3">✅ Combo Meals Applied</h3>
                  {usedMeal.map((meal, i) => (
                    <div key={i} className="mb-2">
                      <p className="text-sm text-gray-800 font-semibold">🍽️ {meal.name}</p>
                      <p className="text-sm text-gray-600">Combo Price: ₹{meal.price}</p>
                    </div>
                  ))}
                </div>
              )}

              {data?.items?.length > 0 && (
                <div className="bg-gray-100 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-800 mb-3">🛒 Remaining Products</h3>
                  {data.items.map((item, i) => (
                    <p key={i} className="text-sm text-gray-700">
                      Product ID: {item.product_id}, Quantity: {item.quantity}
                    </p>
                  ))}
                  <p className="text-xs text-gray-500 mt-2 italic">
                    (Names not available in backend. Add `product.name` in API for better UX.)
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Summary */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 flex flex-col space-y-2">
          <div className="text-center text-sm text-gray-600">
            <p>Original Bill: <span className="text-red-600 font-bold">₹{original_amount}</span></p>
            <p>Optimized Bill: <span className="text-green-600 font-bold">₹{optimized_amount}</span></p>
            <p>Savings: <span className="text-yellow-600 font-bold">₹{savings}</span></p>
          </div>
          <button
            onClick={onProceedToCheckout}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptimizationDetailsModal;


