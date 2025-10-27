// src/components/ui/PromoBanner.jsx
import React, { useState } from 'react';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <div className="bg-black text-white py-2 md:py-3 relative">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs sm:text-sm md:text-base font-medium">
          {/* Testo più piccolo su mobile, più grande su tablet/desktop */}
          <span className="text-aho-yellow font-bold">A solo 1 euro</span> in più, puoi gustare l'autentica
          <span className="text-aho-yellow px-1 py-0.2 rounded-lg font-bold">Pinsa Romana</span>
        </p>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-aho-yellow"
        aria-label="Chiudi banner"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  );
};

export default PromoBanner;