// src/utils/formatPrice.js

/**
 * Formatta un prezzo da stringa (es: "6,40€") a numero e viceversa
 */

// Converte un prezzo da stringa a numero
export const priceToNumber = (priceStr) => {
	// Gestisce prezzi con range (es: "con pizza 11€, con pinsa 12€")
	if (priceStr.includes(',') && !priceStr.includes('€')) {
	  return parseFloat(priceStr);
	}
	
	// Rimuovi tutto tranne i numeri e il separatore decimale
	const cleanPrice = priceStr.replace(/[^0-9,]/g, '');
	// Converti la virgola in punto per il parsing
	return parseFloat(cleanPrice.replace(',', '.'));
  };
  
  // Formatta un numero come prezzo in euro
  export const formatPrice = (price) => {
	if (typeof price === 'string') {
	  // Se è già una stringa formattata, restituiscila
	  if (price.includes('€')) return price;
	  
	  // Altrimenti converte la stringa in numero
	  price = parseFloat(price);
	}
	
	return price.toLocaleString('it-IT', {
	  minimumFractionDigits: 2,
	  maximumFractionDigits: 2
	}).replace('.', ',') + '€';
  };
  
  // Calcola il prezzo totale di un articolo moltiplicato per la quantità
  export const calculateItemTotal = (item) => {
	const price = priceToNumber(item.price);
	return formatPrice(price * item.quantity);
  };