// src/components/ui/AllergenKey.jsx
import React from 'react';
import { allergensList } from './AllergenInfo';

const AllergenKey = () => {
  return (
    <div className="mt-6 sm:mt-8 md:mt-10 bg-white bg-opacity-90 text-black py-4 px-4 sm:p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2 sm:mb-4 text-red-800">Legenda Allergeni</h3>

      <div className="px-0 mt-">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-7 gap-1 sm:gap-2 md:gap-4">
          {Object.entries(allergensList).map(([code, name]) => (
            <div key={code} className="flex flex-col items-start sm:items-center">
              <div className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-aho-yellow flex items-center justify-center mb-1 sm:mb-2 shadow-sm">
                <span className="text-[14px] sm:text-s md:text-sm font-bold text-red-800">{code}</span>
              </div>
              <span className="text-[12px] sm:text-s md:text-sm text-left sm:text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 italic">
        Per ulteriori informazioni sugli allergeni, non esitare a chiedere al nostro staff.
      </p>
    </div>
  );
};

export default AllergenKey;