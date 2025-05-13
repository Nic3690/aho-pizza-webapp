// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import MenuCategory from '../components/menu/MenuCategory';
import MenuList from '../components/menu/MenuList';
import PromoBanner from '../components/ui/PromoBanner';
import { categories } from '../data/menuData';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('pizze-rosse');
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Gestione dello scroll per tornare in cima
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ 
        backgroundImage: "url('/images/sfondo_aho.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <PromoBanner />
      <Header />
      <Navigation activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

      <main id="menu-container" className="container mx-auto px-4 py-8 flex-grow">
        <MenuCategory activeCategory={activeCategory} />
              
        <MenuList activeCategory={activeCategory} />
        
        {activeCategory === 'menu-fisso' && (
          <div className="mt-10 bg-white bg-opacity-80 text-black p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Allergeni</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
              {['Glutine', 'Arachidi', 'Fragola', 'Sedano', 'Senape', 'Molluschi', 'Soia', 'Uova', 'Latte', 'Sesamo', 'Pesce', 'Crostacei', 'Solfiti', 'Lupini'].map((allergene) => (
                <div key={allergene} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-aho-yellow flex items-center justify-center mb-2">
                    <span className="text-xs text-red-800">{allergene.substring(0, 1)}</span>
                  </div>
                  <span className="text-xs text-center">{allergene}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      {/* Pulsante per tornare in cima */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-700 text-white p-3 rounded-full shadow-lg hover:bg-red-800 transition-colors z-40"
          aria-label="Torna in cima"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      )}
      
      <Footer />
    </div>
  );
};

export default HomePage;