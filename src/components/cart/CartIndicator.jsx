// src/components/cart/CartIndicator.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

const CartIndicator = () => {
  const { cart } = useCart();
  
  // Calcola il numero totale di elementi nel carrello
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  if (totalItems === 0) {
    return null;
  }
  
  return (
    <div className="fixed bottom-6 right-6 z-30">
      <Link to="/cart" className="relative p-2">
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        <div className="absolute -top-2 -right-2 bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
          {totalItems}
        </div>
        <div className="absolute -bottom-10 right-0 bg-green-600 text-white px-4 py-1 rounded-lg font-medium text-sm whitespace-nowrap">
          Vai al carrello
        </div>
      </Link>
    </div>
  );
};

export default CartIndicator;