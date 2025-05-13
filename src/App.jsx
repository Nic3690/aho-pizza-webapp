// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;