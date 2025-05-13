// src/components/ui/PromoBanner.jsx
import React, { useState } from 'react';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <div className="bg-black text-white py-3 relative">
      <div className="container mx-auto px-4 text-center">
        <p className="font-medium">
          {/* Cambiato il colore da amber-200 a aho-yellow */}
          <span className="text-aho-yellow font-bold">OFFERTA SPECIALE!</span> Ordina online e ricevi uno sconto del 10% sul tuo primo ordine. Usa il codice: 
          {/* Cambiato il colore dello sfondo da amber-200 a aho-yellow */}
          <span className="text-aho-yellow px-1 py-0.2 rounded-lg font-bold">AHOWEB10</span>
        </p>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-aho-yellow"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  );
};

export default PromoBanner;