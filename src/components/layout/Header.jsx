// src/components/layout/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { cart } = useCart();
  
  // Calcola il numero totale di elementi nel carrello
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <header className="bg-red-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          {/* Logo aumentato di dimensione */}
          <div className="w-16 h-16 bg-aho-yellow rounded-full flex items-center justify-center text-red-700 font-bold text-2xl">AHO</div>
          {/* Font cambiato con la classe font-romana */}
          <h1 className="text-3xl font-romana">AHO PIZZA</h1>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex flex-col items-end">
            {/* Cambiato il colore da amber-200 a aho-yellow */}
            <p className="text-aho-yellow font-semibold">Sempre Aperti dalle 18:00 alle 22:00!</p>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>0620630082-92 / 3888610207</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link to="/cart" className="relative">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              {/* Indicatore di stato del carrello */}
              {totalItems > 0 && (
                <div className="absolute -top-2 -right-2 bg-aho-yellow text-red-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </div>
              )}
            </Link>
            
            <Link to="/cart" className="px-4 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-500 transition-colors">
              Ordina Online
            </Link>
          </div>
        </div>
        
        {/* Mobile Header */}
        <div className="flex md:hidden items-center space-x-3">
          <Link to="/cart" className="relative">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            {/* Indicatore mobile del carrello */}
            {totalItems > 0 && (
              <div className="absolute -top-2 -right-2 bg-aho-yellow text-red-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {totalItems}
              </div>
            )}
          </Link>
          
          <button className="p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;