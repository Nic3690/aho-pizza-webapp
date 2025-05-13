// src/components/menu/MenuItem.jsx
import React from 'react';

const allergensList = {
  'G': 'Glutine',
  'A': 'Arachidi',
  'FG': 'Frutta a guscio',
  'Se': 'Sedano',
  'Sn': 'Senape',
  'M': 'Molluschi',
  'So': 'Soia',
  'U': 'Uova',
  'L': 'Latte',
  'Ss': 'Sesamo',
  'P': 'Pesce',
  'C': 'Crostacei',
  'Sf': 'Solfiti',
  'Lu': 'Lupini'
};

const MenuItem = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-aho-yellow">
      <div className="p-3 sm:p-4">
        <div className="flex justify-between items-start">
          {/* Font ancora più grande su mobile */}
          <h3 className="text-xl sm:text-xl font-bold text-red-800">{item.name}</h3>
          <span className="font-bold text-red-700 text-lg sm:text-base">{item.price}</span>
        </div>
        
        {/* Font ancora più grande su mobile */}
        <p className="text-gray-600 mt-1 sm:mt-2 min-h-10 sm:min-h-12 text-base sm:text-base">
          {item.description}
        </p>
        
        {item.allergens && item.allergens.length > 0 && (
          <div className="mt-2 sm:mt-3 border-t pt-1 sm:pt-2 border-gray-200">
            <div className="flex flex-wrap gap-1">
              {item.allergens.map((allergen) => (
                <div 
                  key={allergen} 
                  className="w-7 h-7 sm:w-6 sm:h-6 rounded-full bg-aho-yellow flex items-center justify-center"
                  title={allergensList[allergen] || allergen}
                >
                  <span className="text-sm sm:text-xs font-bold text-black">{allergen}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;