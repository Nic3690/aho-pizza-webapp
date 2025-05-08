// src/contexts/CartContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  // Carica il carrello dal localStorage quando il componente viene montato
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  
  // Salva il carrello nel localStorage quando viene aggiornato
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  const addToCart = (item, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prevCart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + quantity } 
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };
  
  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };
  
  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) return;
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      // Converti il prezzo da formato stringa "6,40€" a numero
      const price = parseFloat(item.price.replace(',', '.').replace('€', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      calculateTotal, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};