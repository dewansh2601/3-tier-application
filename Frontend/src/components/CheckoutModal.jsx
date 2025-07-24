
import React from 'react';


const CheckoutModal = () => {
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg w-full max-w-sm p-6 text-center shadow">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <h2 className="text-lg font-medium text-gray-800 mb-2">Processing Order</h2>
        <p className="text-sm text-gray-600">Hold tight! We're preparing your meal...</p>
      </div>
    </div>
  );
};

export default CheckoutModal;
