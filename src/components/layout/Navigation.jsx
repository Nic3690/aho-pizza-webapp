// src/components/layout/Navigation.jsx
import React from 'react';
import { categories } from '../../data/menuData';

const Navigation = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="sticky top-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-2 overflow-x-auto">
        <div className="flex space-x-1 md:space-x-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-3 py-2 whitespace-nowrap rounded-lg font-medium text-sm md:text-base transition-colors ${
                activeCategory === category.id
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;