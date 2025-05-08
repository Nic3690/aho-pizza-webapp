// src/components/menu/MenuCategory.jsx
import React from 'react';
import { categories } from '../../data/menuData';

const MenuCategory = ({ activeCategory }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold text-red-800">{categories.find(cat => cat.id === activeCategory)?.name}</h2>
      
      {activeCategory === 'menu-fisso' && (
        <div className="bg-amber-100 px-4 py-2 rounded-lg">
          <p className="text-red-800 font-semibold">Valido da Aprile 2025</p>
        </div>
      )}
    </div>
  );
};

export default MenuCategory;