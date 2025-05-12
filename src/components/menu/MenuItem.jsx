// src/components/menu/MenuItem.jsx
import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/formatPrice';

const MenuItem = ({ item }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  
  const handleAddToCart = () => {
    addToCart(item, 1);
    setIsAdding(true);
    
    // Reset stato dopo animazione
    setTimeout(() => setIsAdding(false), 1000);
  };
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-amber-200">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-red-800">{item.name}</h3>
          <span className="font-bold text-red-700">{item.price}</span>
        </div>
        <p className="text-gray-600 mt-2 min-h-12">{item.description}</p>
        <button 
          onClick={handleAddToCart}
          className={`mt-4 px-4 py-2 rounded-lg transition-all w-full font-medium flex items-center justify-center
            ${isAdding 
              ? 'bg-green-700 text-white' 
              : 'bg-green-600 text-white hover:bg-green-700'}`}
        >
          {isAdding ? (
            <>
              <svg className="w-5 h-5 mr-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Aggiunto!
            </>
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Aggiungi al carrello
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default MenuItem;