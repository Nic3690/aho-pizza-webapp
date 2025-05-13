// src/components/menu/MenuCategory.jsx
import React from 'react';
import { categories } from '../../data/menuData';

const MenuCategory = ({ activeCategory }) => {
  return (
    <div className="w-full text-center md:text-center mb-2 sm:mb-4 md:mb-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-aho-yellow mt-2 sm:mt-4 md:mt-6 px-4 md:px-0">
        {categories.find(cat => cat.id === activeCategory)?.name}
      </h2>
      
      {activeCategory === 'menu-fisso' && (
        <p className="text-white text-xs sm:text-sm italic mt-1 sm:mt-2 px-4 md:px-0">
          Dal Lunedì al Venerdì - festivi esclusi - prova i nostri Menù
        </p>
      )}
    </div>
  );
};

export default MenuCategory;