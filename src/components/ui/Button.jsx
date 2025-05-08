// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseClasses = "px-4 py-2 rounded-lg transition-colors font-medium";
  
  const variantClasses = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-red-700 text-white hover:bg-red-800",
    outline: "border border-red-700 text-red-700 hover:bg-red-50"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;