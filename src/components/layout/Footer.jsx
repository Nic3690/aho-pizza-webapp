// src/components/layout/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 justify-items-center">
          {/* Prima colonna - Logo */}
          <div className="flex justify-center md:justify-start items-center">
            <img 
              src="/images/logo_aho_pizza.png" 
              alt="AHO PIZZA Logo" 
              className="w-32 h-32 md:w-40 md:h-40"
            />
          </div>
          
          {/* Seconda colonna - Contatti */}
          <div className="md:pt-8 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">AHO PIZZA</h3>
            <p className="mb-1 md:mb-2 text-sm md:text-base">Via Giovanni Rizzi, 43</p>
            <p className="mb-1 md:mb-2 text-sm md:text-base">Tel: 0620630082</p>
            <p className="mb-1 md:mb-2 text-sm md:text-base">Cell: +393888610207</p>
          </div>
          
          {/* Terza colonna - Informazioni */}
          <div className="md:pt-8 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Informazioni</h3>
            <p className="mb-1 md:mb-2 text-sm md:text-base">Dal Lunedì alla Domenica</p>
            <p className="mb-1 md:mb-2 text-sm md:text-base">Aperti 7 su 7 dalle 18:00 alle 22:00!</p>
          </div>
          
          {/* Quarta colonna - Social */}
          <div className="md:pt-8 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Seguici</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Social icons */}
              <a href="https://www.facebook.com/AhoPizzaTorreAngela" className="w-8 h-8 md:w-10 md:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/ahopizza_dal1996/" className="w-8 h-8 md:w-10 md:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 md:mt-8 md:pt-8 border-t border-red-800 text-center text-sm text-red-200">
          <p className="text-aho-yellow text-base md:text-lg">Le vere Pizza e Pinsa romana da asporto e a domicilio</p>
          <p className="text-aho-yellow italic text-base md:text-lg mt-1 md:mt-2">dal 1996</p>
          <p className="mt-2 md:mt-4 text-xs md:text-sm">© 2025 AHO PIZZA. Tutti i diritti riservati. Valido da Aprile 2025.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;