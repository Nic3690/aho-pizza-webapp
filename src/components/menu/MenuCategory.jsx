// src/components/menu/MenuCategory.jsx
import React from 'react';
import { categories } from '../../data/menuData';

const MenuCategory = ({ activeCategory }) => {
  return (
    <div className="w-full text-center mb-6">
      <h2 className="text-5xl font-bold text-aho-yellow">
        {categories.find(cat => cat.id === activeCategory)?.name}
      </h2>
      
      {activeCategory === 'menu-fisso' && (
        <p className="text-white text-sm italic mt-2">
          Dal Lunedì al Venerdì - festivi esclusi - prova i nostri Menù
        </p>
      )}
    </div>
  );
};

export default MenuCategory;