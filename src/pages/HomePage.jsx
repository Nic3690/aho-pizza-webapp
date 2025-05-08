// src/pages/HomePage.jsx
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import MenuCategory from '../components/menu/MenuCategory';
import MenuList from '../components/menu/MenuList';
import { categories } from '../data/menuData';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('pizze-rosse');
  
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };
  
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <Navigation activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      
      {activeCategory === 'menu-fisso' && (
        <div className="bg-amber-100 py-4">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-red-800 mb-1">Menù a Prezzo Fisso</h2>
            <p className="text-center text-red-700 italic">Dal Lunedì al Venerdì - festivi esclusi - prova i nostri</p>
          </div>
        </div>
      )}
      
      <main className="container mx-auto px-4 py-8">
        <MenuCategory activeCategory={activeCategory} />
        <MenuList activeCategory={activeCategory} />
        
        {activeCategory === 'menu-fisso' && (
          <div className="mt-10 bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-xl font-bold text-red-800 mb-4">Allergeni</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
              {['Glutine', 'Arachidi', 'Fragola', 'Sedano', 'Senape', 'Molluschi', 'Soia', 'Uova', 'Latte', 'Sesamo', 'Pesce', 'Crostacei', 'Solfiti', 'Lupini'].map((allergene) => (
                <div key={allergene} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center mb-2">
                    <span className="text-xs text-red-800">{allergene.substring(0, 1)}</span>
                  </div>
                  <span className="text-xs text-center text-red-800">{allergene}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;