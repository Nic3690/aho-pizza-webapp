// src/pages/CartPage.jsx
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useCart } from '../hooks/useCart';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, calculateTotal } = useCart();
  
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-amber-50">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-6">Il tuo carrello</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-xl text-gray-600">Il tuo carrello è vuoto</p>
            <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Torna al Menu
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-red-800 mb-6">Il tuo carrello</h2>
        {/* Implementazione del carrello */}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;