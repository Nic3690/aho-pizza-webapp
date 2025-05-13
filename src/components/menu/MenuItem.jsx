// src/components/menu/MenuItem.jsx
import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-aho-yellow">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-red-800">{item.name}</h3>
          <span className="font-bold text-red-700">{item.price}</span>
        </div>
        <p className="text-gray-600 mt-2 min-h-12">{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItem;