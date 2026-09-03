import React from 'react';

const CartDrawer = ({ isOpen, onClose, cartItems = [] }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Your Shopping Cart</h2>
            <button 
              onClick={onClose} 
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center">
            {cartItems.length === 0 ? (
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Your cart is empty</h3>
                <p className="text-xs text-slate-500 max-w-xs">
                  Looks like you haven't added anything to your cart yet. Explore our services and solutions.
                </p>
              </div>
            ) : (
              <div className="w-full space-y-4">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                      <p className="text-[10px] text-slate-500">{item.category}</p>
                    </div>
                    <span className="text-xs font-bold text-[#104068]">{item.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="p-6 border-t border-slate-100 space-y-3">
            <button 
              onClick={onClose}
              className="w-full py-3.5 rounded-xl bg-[#104068] text-white font-bold text-xs hover:bg-slate-900 transition-colors shadow-md"
            >
              Continue Browsing
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;