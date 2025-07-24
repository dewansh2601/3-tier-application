


import React from 'react';

const OptimizationModal = ({ 
  optimizedOrder, 
  onClose, 
  onShowDetails, 
  onProceedToCheckout 
}) => {
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-md w-full max-w-md p-4" onClick={e => e.stopPropagation()}>
        <h2 className="text-lg font-bold mb-2">Bill Optimized 🎉</h2>
        <p className="text-sm text-gray-600 mb-4">We found a better deal for your order.</p>

        <div className="space-y-2 mb-4">
          <div className="border p-3 rounded">
            <h4 className="text-sm font-semibold text-gray-700">Original Amount</h4>
            <p className="text-lg text-red-600 font-bold">₹{optimizedOrder.original_amount}</p>
          </div>
          <div className="border p-3 rounded">
            <h4 className="text-sm font-semibold text-gray-700">Optimized Amount</h4>
            <p className="text-lg text-green-600 font-bold">₹{optimizedOrder.optimized_amount}</p>
          </div>
          {optimizedOrder.savings > 0 && (
            <div className="border p-3 rounded text-center">
              <h4 className="text-sm text-yellow-600 font-semibold">You Save</h4>
              <p className="text-xl font-bold text-yellow-600">₹{optimizedOrder.savings}</p>
            </div>
          )}
        </div>

        <div className="flex gap-2 mt-4">
          {/* <button
            onClick={onShowDetails}
            className="flex-1 border px-3 py-2 text-sm rounded hover:bg-gray-100"
          >
            View Details
          </button> */}
          <button
            onClick={onProceedToCheckout}
            className="flex-1 bg-green-500 text-white px-3 py-2 text-sm rounded hover:bg-green-600"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptimizationModal;

