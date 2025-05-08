// src/components/menu/MenuList.jsx
import React from 'react';
import MenuItem from './MenuItem';
import { menuItems } from '../../data/menuData';

const MenuList = ({ activeCategory }) => {
  if (activeCategory === 'menu-fisso') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems[activeCategory].map((item) => (
          <div key={item.id} className="bg-gradient-to-b from-red-700 to-red-900 rounded-lg overflow-hidden shadow-lg text-white">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-amber-200 mb-4">{item.name}</h3>
              <p className="text-white mb-6">{item.description}</p>
              <div className="text-right">
                <span className="text-2xl font-bold text-amber-200">{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {menuItems[activeCategory].map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuList;