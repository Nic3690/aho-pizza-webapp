// src/components/ui/AllergenInfo.jsx
import React, { useState } from 'react';

export const allergensList = {
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

const AllergenInfo = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-white"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Legenda allergeni</span>
      </button>

      {isOpen && (
        <div className="absolute z-50 right-0 mt-2 p-4 bg-white rounded-lg shadow-lg w-80 text-sm">
          <h4 className="font-bold mb-2 text-red-800">Legenda allergeni</h4>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(allergensList).map(([code, name]) => (
              <div key={code} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-red-700 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{code}</span>
                </div>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllergenInfo;