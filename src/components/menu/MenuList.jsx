// src/components/menu/MenuList.jsx
import React from 'react';
import MenuItem from './MenuItem';
import AllergenInfo from '../ui/AllergenInfo';
import { menuItems } from '../../data/menuData';

const MenuList = ({ activeCategory }) => {
  if (activeCategory === 'menu-fisso') {
    return (
      <div>
        <div className="flex justify-end sm:justify-end mb-4">
          <AllergenInfo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems[activeCategory].map((item) => (
            <div key={item.id} className="bg-gradient-to-b from-red-700 to-red-900 rounded-lg overflow-hidden shadow-lg text-white">
              <div className="p-4 sm:p-6">
                {/* Font ridotto SOLO su mobile */}
                <h3 className="text-lg sm:text-2xl font-bold text-aho-yellow mb-2 sm:mb-4">{item.name}</h3>
                
                {/* Font ridotto SOLO su mobile */}
                <p className="text-white text-xs sm:text-base mb-4 sm:mb-6">{item.description}</p>
                
                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-bold text-aho-yellow">{item.price}</span>
                </div>
                
                {item.allergens && item.allergens.length > 0 && (
                  <div className="mt-2 sm:mt-3 border-t border-red-600 pt-2">
                    <div className="flex flex-wrap gap-1">
                      {item.allergens.map((allergen) => (
                        <div 
                          key={allergen} 
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-700 flex items-center justify-center"
                          title={allergen}
                        >
                          <span className="text-xs font-bold text-white">{allergen}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-start sm:justify-end mb-4">
        <AllergenInfo />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems[activeCategory].map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;