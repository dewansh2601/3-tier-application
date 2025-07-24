// import React from 'react';

// const OrderPlacedModal = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center">
//         <div className="text-6xl mb-6">🎉</div>
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h2>
//         <p className="text-gray-600 mb-6">Your delicious meal is being prepared and will be ready soon.</p>
//         <button
//           onClick={onClose}
//           className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrderPlacedModal;


import React from 'react';

const OrderPlacedModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-md w-full max-w-md p-6 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h2 className="text-xl font-bold mb-2">Order Placed!</h2>
        <p className="text-sm text-gray-600 mb-4">
          Your meal is being prepared. Bon appétit!
        </p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderPlacedModal;
