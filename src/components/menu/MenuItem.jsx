// src/components/menu/MenuItem.jsx (aggiornato)
import React from 'react';
import { useCart } from '../../hooks/useCart';

const MenuItem = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
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
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors w-full"
        >
          Aggiungi al carrello
        </button>
      </div>
    </div>
  );
};

export default MenuItem;