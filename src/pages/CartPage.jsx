// src/pages/CartPage.jsx (aggiornato)
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useCart } from '../hooks/useCart';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, calculateTotal, clearCart } = useCart();
  
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-amber-50">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-6">Il tuo carrello</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-xl text-gray-600 mb-6">Il tuo carrello è vuoto</p>
            <Link to="/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Torna al Menu
            </Link>
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
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <table className="w-full">
            <thead className="bg-red-700 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Prodotto</th>
                <th className="py-3 px-4 text-center">Quantità</th>
                <th className="py-3 px-4 text-right">Prezzo</th>
                <th className="py-3 px-4 text-right">Totale</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                // Converti il prezzo da formato "6,40€" a numero
                const price = parseFloat(item.price.replace(',', '.').replace('€', ''));
                const itemTotal = (price * item.quantity).toFixed(2);
                
                return (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="py-4 px-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-red-800">{item.name}</span>
                        <span className="text-sm text-gray-600">{item.description}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="mx-3 font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-medium">{item.price}</td>
                    <td className="py-4 px-4 text-right font-bold">{itemTotal.replace('.', ',')}€</td>
                    <td className="py-4 px-4 text-right">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-amber-50">
              <tr>
                <td colSpan="3" className="py-4 px-4 text-right font-bold">Totale:</td>
                <td className="py-4 px-4 text-right text-xl font-bold text-red-800">{calculateTotal().replace('.', ',')}€</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
        
        <div className="flex justify-between flex-col md:flex-row gap-4">
          <div className="flex space-x-4">
            <Link to="/" className="px-6 py-3 border border-red-700 text-red-700 bg-white rounded-lg hover:bg-red-50 transition-colors">
              Continua lo shopping
            </Link>
            <button 
              onClick={clearCart}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Svuota carrello
            </button>
          </div>
          
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Procedi all'ordine
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;