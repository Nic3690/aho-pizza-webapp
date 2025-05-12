// src/pages/CartPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/formatPrice';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, calculateTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleCheckout = () => {
    setIsSubmitting(true);
    
    // Simulazione invio ordine
    setTimeout(() => {
      clearCart();
      setIsSubmitting(false);
      alert('Grazie per l\'ordine! Riceverai la conferma via email.');
    }, 2000);
  };
  
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-amber-50 flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center flex-grow">
          <h2 className="text-3xl font-bold text-red-800 mb-6">Il tuo carrello</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center justify-center">
              <svg className="w-24 h-24 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <p className="text-xl text-gray-600 mb-4">Il tuo carrello è vuoto</p>
              <p className="text-gray-500 mb-6">Esplora il nostro menu e aggiungi qualcosa di delizioso!</p>
              <Link to="/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Torna al Menu
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-3xl font-bold text-red-800 mb-6">Il tuo carrello</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">Prodotto</th>
                  <th className="text-center py-3 px-2">Quantità</th>
                  <th className="text-right py-3 px-2">Prezzo</th>
                  <th className="text-right py-3 px-2">Totale</th>
                  <th className="text-right py-3 px-2"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4 px-2">
                      <div className="flex flex-col">
                        <span className="font-medium text-red-800">{item.name}</span>
                        <span className="text-sm text-gray-500">{item.description}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center justify-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-100 rounded-l-lg flex items-center justify-center hover:bg-gray-200"
                        >
                          -
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center bg-gray-50">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-100 rounded-r-lg flex items-center justify-center hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-right">{item.price}</td>
                    <td className="py-4 px-2 text-right font-medium">
                      {formatPrice(parseFloat(item.price.replace(',', '.').replace('€', '')) * item.quantity)}
                    </td>
                    <td className="py-4 px-2 text-right">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Riepilogo ordine */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-red-800 mb-4">Riepilogo Ordine</h3>
            <div className="flex justify-between py-2 border-b">
              <span>Subtotale</span>
              <span>{formatPrice(calculateTotal())}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Consegna</span>
              <span>2,00€</span>
            </div>
            <div className="flex justify-between py-4 font-bold text-lg">
              <span>Totale</span>
              <span>{formatPrice(parseFloat(calculateTotal()) + 2)}</span>
            </div>
            
            <div className="mt-6">
              <button 
                onClick={handleCheckout}
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isSubmitting ? 'Elaborazione in corso...' : 'Procedi al pagamento'}
              </button>
              
              <Link to="/" className="block text-center mt-4 text-red-700 hover:text-red-900">
                Continua lo shopping
              </Link>
            </div>
          </div>
          
          {/* Informazioni di consegna */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-red-800 mb-4">Informazioni di consegna</h3>
            <p className="text-gray-600 mb-4">
              Consegna a domicilio disponibile per le zone limitrofe.
              <br />
              Contributo di consegna: 2€
              <br />
              Ordine minimo: 12€
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Orari di consegna:</strong>
              <br />
              Tutti i giorni dalle 18:00 alle 22:00
            </p>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <p className="text-red-700 font-medium">
                Per esigenze particolari o allergie, contattaci al 0620630082-92
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;