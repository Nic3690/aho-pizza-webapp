export const categories = [
  { id: 'fritti', name: 'Fritti' },
  { id: 'pizze-menu', name: 'Pizza Per Menu' },
  { id: 'bianche', name: 'Bianche' },
  { id: 'rosse', name: 'Rosse' },
  { id: 'buongustaio', name: 'Buongustaio' },
  { id: 'fredde', name: 'Fredde' },
  { id: 'calzoni', name: 'Calzoni' },
  { id: 'bruscotte', name: 'bruscotte' },
  { id: 'insalate', name: 'Insalate' },
  { id: 'bevande', name: 'Bevande' },
  { id: 'dolci', name: 'Dolci' },
  { id: 'menu-fisso', name: 'Menù a Prezzo Fisso' }
];

export const menuItems = {
  'fritti': [
    { 
      id: 1, 
      name: 'Supplì Semplice', 
      description: 'Pomodoro, Mozzarella, Basilico', 
      price: '1,10', 
      allergens: ['G', 'L', 'Se']
    },
    { 
      id: 2, 
      name: 'Supplì al Telefono', 
      description: 'Di nostra produzione con Ragù di manzo, Mozzarella', 
      price: '1,60', 
      allergens: ['G', 'L', 'Se']
    },
    { 
      id: 3, 
      name: 'Crocchetta Di Patate', 
      description: 'Di nostra produzione con Patate, Pepe, Parmigiano, Noce Moscata', 
      price: '1,40', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 4, 
      name: 'Crocchetta Special', 
      description: 'Patate, Speck, Provola, Parmigiano, Noce moscata, Pepe', 
      price: '2,00', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 5, 
      name: 'Arancino Siciliano', 
      description: 'Di nostra produzione con riso allo Zafferano, Ragù di Manzo e Piselli, Mozzarella', 
      price: '3,50', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 6, 
      name: 'Mini Arancino Funghi e Piselli', 
      description: 'Di nostra produzione con champignon e Piselli', 
      price: '2,20', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 7, 
      name: 'Mini Arancino Amatriciana', 
      description: 'Di nostra produzione con Pomodoro e Amatriciana', 
      price: '2,20', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 8, 
      name: 'Mini Arancino Carbonara', 
      description: 'Di nostra produzione con Uova, Pecorino, Guanciale, Pepe', 
      price: '2,20', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 9, 
      name: 'Mini Arancino Cacio e Pepe', 
      description: 'Di nostra produzione con Pecorino e Pepe nero', 
      price: '2,20', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 10, 
      name: 'Mini Arancino Porcini e Tartufo', 
      description: 'Di nostra produzione con Funghi Porcini e Salsa Tartufata', 
      price: '2,20', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 11, 
      name: 'Mini Arancino \'Nduja', 
      description: 'Di nostra produzione con \'Nduja di Spilinga', 
      price: '2,20', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 12, 
      name: 'Spaghì', 
      description: 'Di nostra produzione Supplì di Spaghetti con Pomodoro e Basilico', 
      price: '2,60', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 13, 
      name: 'Olive all\'Ascolana', 
      description: '6 pezzi', 
      price: '2,90', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 14, 
      name: 'Mozzarelline', 
      description: 'Artigianali, 6 pezzi', 
      price: '2,90', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 15, 
      name: 'Bocconcini di Pollo', 
      description: '6 pezzi', 
      price: '2,90', 
      allergens: ['G'] 
    },
    { 
      id: 16, 
      name: 'Fiori di Zucca', 
      description: 'Fiore di Zucca in pastella con Alici e Mozzarella', 
      price: '2,70', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 17, 
      name: 'Filetti di Baccalà', 
      description: 'Filetto di Baccalà in pastella', 
      price: '2,90', 
      allergens: ['G', 'P'] 
    },
    { 
      id: 18, 
      name: 'Patate Fritte', 
      description: 'Steakhouse', 
      price: '3,20', 
      allergens: [] 
    },
    { 
      id: 19, 
      name: 'Chele di Granchio', 
      description: '1 pezzo', 
      price: '1,30', 
      allergens: ['G', 'C'] 
    },
    { 
      id: 20, 
      name: 'Anelli di Cipolla', 
      description: '8 pezzi', 
      price: '2,70', 
      allergens: ['G'] 
    },
    { 
      id: 21, 
      name: 'Tris Vegetale', 
      description: 'Cavolfiori, Zucchine, Carciofi in pastella', 
      price: '4,60', 
      allergens: ['G'] 
    },
    { 
      id: 22, 
      name: 'Alette di Pollo', 
      description: '3 pezzi', 
      price: '3,80', 
      allergens: ['G'] 
    },
    { 
      id: 23, 
      name: 'Fritto Mix', 
      description: '1 Supplì, 1 Crocchetta, 2 Mozzarelline, 2 Olive Ascolane, 2 Bocconcini di Pollo, 1/2 porzione di Patatine Fritte', 
      price: '6,80', 
      allergens: ['G', 'L', 'U'] 
    }
  ],
  'pizze-menu': [
    { 
      id: 24, 
      name: 'Zucchine e Alici', 
      description: 'Mozzarella, Zucchine, Alici', 
      price: '6,90', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 25, 
      name: 'Cacio e Pepe', 
      description: 'Mozzarella, Pecorino, Pepe', 
      price: '6,60', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 26, 
      name: 'Quattro Formaggi', 
      description: 'Mozzarella, Gorgonzola, Provola, Edamer', 
      price: '6,90', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 27, 
      name: 'Crostino', 
      description: 'Mozzarella, Prosciutto Crudo o Cotto', 
      price: '7,10', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 28, 
      name: 'Pazza', 
      description: 'Mozzarella, Patatine Fritte, Salsiccia o Wurstel', 
      price: '6,90', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 29, 
      name: 'Tonno e Cipolla', 
      description: 'Mozzarella, Tonno, Cipolla Rossa e Peperoncino', 
      price: '6,80', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 30, 
      name: 'Misto Bosco', 
      description: 'Mozzarella, Funghi Misti', 
      price: '7,00', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 31, 
      name: 'Patate', 
      description: 'Mozzarella, Patate, Rosmarino, Sale, Olio', 
      price: '6,60', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 32, 
      name: 'Romana', 
      description: 'Mozzarella, Carciofi Grigliati', 
      price: '6,80', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 33, 
      name: 'Margherita', 
      description: 'Pomodoro, Mozzarella, Olio EVO', 
      price: '6,50', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 34, 
      name: 'Marinara', 
      description: 'Pomodoro, Origano, Aglio, Basilico, Mix di Spezie', 
      price: '5,30', 
      allergens: ['G'] 
    },
    { 
      id: 35, 
      name: 'Napoli', 
      description: 'Pomodoro, Mozzarella, Alici', 
      price: '6,90', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 36, 
      name: 'Rossa', 
      description: 'Pomodoro, Origano, Olio EVO', 
      price: '4,60', 
      allergens: ['G'] 
    },
    { 
      id: 37, 
      name: 'Wurstel', 
      description: 'Pomodoro, Mozzarella, Wurstel', 
      price: '6,90', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 38, 
      name: 'Funghi', 
      description: 'Pomodoro, Mozzarella, Funghi Champignon', 
      price: '7,00', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 39, 
      name: 'Diavola', 
      description: 'Pomodoro, Mozzarella, Salame Ventricina Piccante', 
      price: '7,10', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 40, 
      name: 'Tonno e Salsa Verde', 
      description: 'Pomodoro, Tonno, Salsa Verde, Spezie, Peperoncino', 
      price: '6,70', 
      allergens: ['G', 'P'] 
    }
  ],
  'bianche': [
    { 
      id: 41, 
      name: 'Tonno e Carciofini', 
      description: 'Mozzarella, Carciofini, Tonno', 
      price: '7,20', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 42, 
      name: 'Boscaiola', 
      description: 'Mozzarella, Champignon, Salsiccia', 
      price: '7,80', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 43, 
      name: 'Contadina', 
      description: 'Mozzarella, Peperoni, Melanzane, Zucchine', 
      price: '7,00', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 45, 
      name: 'Radicchio e Gorgonzola', 
      description: 'Mozzarella, Radicchio, Gorgonzola', 
      price: '6,90', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 46, 
      name: 'Fiori di Zucca e Alici', 
      description: 'Mozzarella, Fiori di Zucca, Alici (Soggetta a stagionalità)', 
      price: '7,80', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 47, 
      name: 'Aho Pizza', 
      description: 'Mozzarella, Purè, Cotto/Mortadella/Nduja/Tonno/Salsiccia', 
      price: '8,00', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 49, 
      name: 'Pin Pizza', 
      description: 'Mozzarella, Funghi Porcini, Zucchine e Gorgonzola', 
      price: '9,00', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 50, 
      name: 'Monti e Monti', 
      description: 'Mozzarella, Funghi Porcini, Salsiccia', 
      price: '9,00', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 51, 
      name: 'Broccoletti e Salsiccia', 
      description: 'Mozzarella, Broccoletti, Salsiccia, Peperoncino', 
      price: '8,60', 
      allergens: ['G', 'L'] 
    }
  ],
  'rosse': [
    { 
      id: 52, 
      name: 'Bufalina', 
      description: 'Pomodoro, Bufala in cottura e Basilico', 
      price: '8,20', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 53, 
      name: 'Calabrò', 
      description: 'Pomodoro, Mozzarella, Alici, Olive, Pecorino, Salsa Verde, Peperoncino', 
      price: '7,60', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 54, 
      name: 'Capricciosa', 
      description: 'Pomodoro, Mozzarella, Funghi, Uova, Olive, Carciofinì, Crudo', 
      price: '7,90', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 55, 
      name: 'Parmigiana', 
      description: 'Pomodoro, Mozzarella, Melanzane, Pecorino/Parmigiano', 
      price: '7,70', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 56, 
      name: 'Tonno, Olive, Pomodori Secchi', 
      description: 'Pomodoro, Mozzarella, Tonno, Olive, Pomodori Secchi', 
      price: '8,50', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 44, 
      name: 'Messicana', 
      description: 'Pomodoro, Mozzarella, Salsiccia, Fagioli, Peperoncino', 
      price: '7,80', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 58, 
      name: "L'inferno", 
      description: 'Pomodoro, Mozzarella, \'Nduja di Spilinga, Ventricina', 
      price: '8,20', 
      allergens: ['G', 'L'] 
    }
  ],
  'buongustaio': [
    { 
      id: 59, 
      name: 'Amatriciana', 
      description: 'Pomodoro, Guanciale, Pecorino, Peperoncino', 
      price: '8,60', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 60, 
      name: 'Carbonara', 
      description: 'Mozzarella, Guanciale, Uova, Pecorino, Pepe', 
      price: '8,80', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 61, 
      name: 'Salmone', 
      description: 'Mozzarella, Salmone', 
      price: '9,20', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 62, 
      name: 'Valtellina', 
      description: 'Mozzarella, Provola Affumicata, Speck', 
      price: '8,50', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 63, 
      name: 'Colosseo', 
      description: 'Pomodoro, Peperoni, Salsiccia, Provola', 
      price: '8,40', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 64, 
      name: 'Porcini', 
      description: 'Mozzarella, Funghi Porcini', 
      price: '8,20', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 65, 
      name: 'Stracchino, Guanciale e Zucchine', 
      description: 'Mozzarella, Stracchino, Guanciale e Zucchine', 
      price: '8,40', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 66, 
      name: 'Golosa', 
      description: 'Mozzarella, Guanciale, Pecorino, Miele, Rosmarino', 
      price: '8,40', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 67, 
      name: 'Suprema', 
      description: 'Pomodoro, Bufala in cottura, Alici, Pomodori Secchi', 
      price: '8,90', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 69, 
      name: 'Tartufo', 
      description: 'Pomodoro o Mozzarella, Tartufo', 
      price: '8,40', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 70, 
      name: 'Ricotta e Mortadella', 
      description: 'Ricotta, Mortadella e Granella di Pistacchio', 
      price: '8,30', 
      allergens: ['G', 'L', 'FG'] 
    },
    { 
      id: 71, 
      name: 'Deliziosa', 
      description: 'Pomodoro, Funghi Misti, Guanciale, \'Nduja di Spilinga', 
      price: '8,90', 
      allergens: ['G'] 
    },
    { 
      id: 72, 
      name: 'Tricolore', 
      description: 'Pomodoro, Bufala e fette, Rucola, Pomodori Secchi', 
      price: '8,90', 
      allergens: ['G', 'L'] 
    }
  ],
  'fredde': [
    { 
      id: 73, 
      name: 'Stracchino e Affettato', 
      description: 'Stracchino e Affettato a scelta', 
      price: '7,40', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 74, 
      name: 'Insalata di Pollo', 
      description: 'Focaccia, Pollo, Lattuga e Maionese', 
      price: '7,30', 
      allergens: ['G', 'U'] 
    },
    { 
      id: 75, 
      name: 'Bresaola, Rughetta e Parmigiano', 
      description: 'Bresaola, Rughetta e Parmigiano', 
      price: '8,50', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 76, 
      name: 'Insalata di Gamberi', 
      description: 'Pomodoro, Lattuga, Gamberetti e Salsa Rosa', 
      price: '8,20', 
      allergens: ['G', 'C', 'U'] 
    },
    { 
      id: 77, 
      name: 'Caprese', 
      description: 'Pomodoro, Bufala e fette, Basilico', 
      price: '8,20', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 78, 
      name: 'Bufala e Speck', 
      description: 'Pomodoro, Bufala e Speck', 
      price: '8,60', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 79, 
      name: 'Focaccia', 
      description: 'Sale, Olio, Spezie', 
      price: '4,80', 
      allergens: ['G'] 
    }
  ],
  'calzoni': [
    { 
      id: 80, 
      name: 'Calzone al Pomodoro', 
      description: 'Pomodoro, Mozzarella', 
      price: '6,30', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 81, 
      name: 'Calzone Boscaiolo', 
      description: 'Mozzarella, Salsiccia, Funghi', 
      price: '6,90', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 82, 
      name: 'Calzone alla \'Nduja', 
      description: 'Mozzarella, \'Nduja', 
      price: '6,60', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 83, 
      name: 'Calzone al Prosciutto Crudo / Cotto', 
      description: 'Mozzarella e Prosciutto Crudo o Cotto', 
      price: '6,70', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 84, 
      name: 'Calzone al Guanciale', 
      description: 'Mozzarella, Stracchino e Guanciale', 
      price: '6,80', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 85, 
      name: 'Calzone Contadino', 
      description: 'Mozzarella, Peperoni, Zucchine, Melanzane', 
      price: '6,40', 
      allergens: ['G', 'L'] 
    }
  ],
  'bruscotte': [
    { 
      id: 86, 
      name: 'Bruscotta con Pomodoro a Fette', 
      description: 'Pomodoro a Fette, Sale, Olio e Origano', 
      price: '4,50', 
      allergens: ['G'] 
    },
    { 
      id: 87, 
      name: 'Bruscotta con Mozzarella e...', 
      description: 'Mozzarella e ingrediente a scelta', 
      price: '6,00', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 88, 
      name: 'Bruscotta con Crema di Olive', 
      description: 'Bruscotta Not Found', 
      price: '4,80', 
      allergens: ['G'] 
    },
    { 
      id: 89, 
      name: 'Bruscotta con \'Nduja', 
      description: '\'Nduja di Spilinga', 
      price: '5,80', 
      allergens: ['G'] 
    },
    { 
      id: 90, 
      name: 'Bruscotta con Crema di Tartufo', 
      description: 'Crema di Tartufo', 
      price: '5,80', 
      allergens: ['G'] 
    },
    { 
      id: 91, 
      name: 'Bruscotta Caprese', 
      description: 'Pomodorini, Bufala a fette, Sale, Olio e Origano', 
      price: '6,50', 
      allergens: ['G', 'L'] 
    }
  ],
  'insalate': [
    { 
      id: 92, 
      name: 'Insalata Rughetta e Gamberetti', 
      description: 'Rughetta, Gamberetti, Salsa Rosa, Sale e Olio', 
      price: '5,20', 
      allergens: ['C', 'U'] 
    },
    { 
      id: 93, 
      name: 'Insalata Mista', 
      description: 'Lattuga, Carote, Pomodori, Rucola, Sale e Olio', 
      price: '5,00', 
      allergens: [] 
    },
    { 
      id: 94, 
      name: 'Insalata Tonno e Pomodoro', 
      description: 'Tonno, Pomodoro, Olive Nere, Sale e Olio', 
      price: '5,00', 
      allergens: ['P'] 
    },
    { 
      id: 95, 
      name: 'Insalata Caprese', 
      description: 'Mozzarella di Bufala, Pomodoro, Olive, Sale, Olio', 
      price: '7,20', 
      allergens: ['L'] 
    },
    { 
      id: 96, 
      name: 'Insalata Tonno e Fagioli', 
      description: 'Tonno, Fagioli, Sale e Olio', 
      price: '5,00', 
      allergens: ['P'] 
    }
  ],
  'bevande': [
    { 
      id: 97, 
      name: 'Bottiglia Coca Cola / Coca Zero / Fanta / Sprite', 
      description: '1.5 lt.', 
      price: '3,00', 
      allergens: [] 
    },
    { 
      id: 98, 
      name: 'Lattina Coca Cola / Coca Zero / Fanta / Sprite', 
      description: '33 cl.', 
      price: '1,80', 
      allergens: [] 
    },
    { 
      id: 99, 
      name: 'Birra Peroni', 
      description: '33 cl.', 
      price: '1,80', 
      allergens: ['G'] 
    },
    { 
      id: 100, 
      name: 'Birra Peroni', 
      description: '66 cl.', 
      price: '2,50', 
      allergens: ['G'] 
    },
    { 
      id: 101, 
      name: 'Birra Ichnusa non filtrata', 
      description: '50 cl.', 
      price: '3,30', 
      allergens: ['G'] 
    },
    { 
      id: 102, 
      name: 'Birra Moretti Baffo d\'Oro', 
      description: '66 cl.', 
      price: '2,90', 
      allergens: ['G'] 
    },
    { 
      id: 103, 
      name: 'Birra Heineken', 
      description: '66 cl.', 
      price: '2,90', 
      allergens: ['G'] 
    },
    { 
      id: 104, 
      name: 'Birra Ceres', 
      description: '33 cl.', 
      price: '3,00', 
      allergens: ['G'] 
    },
    { 
      id: 105, 
      name: 'Birra Tennent\'s', 
      description: '33 cl.', 
      price: '3,00', 
      allergens: ['G'] 
    },
    { 
      id: 106, 
      name: 'Acqua Naturale/Frizzante', 
      description: '1.5 lt.', 
      price: '1,80', 
      allergens: [] 
    },
    { 
      id: 107, 
      name: 'Bottiglia Thè Limone o Pesca', 
      description: '1.5 lt.', 
      price: '2,70', 
      allergens: [] 
    },
    { 
      id: 108, 
      name: 'Vino Bianco o Rosso in bottiglia', 
      description: '0.75 lt.', 
      price: '6,70', 
      allergens: ['Sf'] 
    },
    { 
      id: 109, 
      name: 'Prosecco D.O.C.', 
      description: '0.75 lt.', 
      price: '10,20', 
      allergens: ['Sf'] 
    }
  ],
  'dolci': [
    { 
      id: 110, 
      name: 'Pizza Nutellosa', 
      description: 'Focaccia con Nutella', 
      price: '5,80', 
      allergens: ['G', 'L', 'FG'] 
    },
    { 
      id: 111, 
      name: 'Calzone Ricotta e Nutella', 
      description: 'Calzone con Ricotta Vaccina e Nutella', 
      price: '6,30', 
      allergens: ['G', 'L', 'FG'] 
    },
    { 
      id: 112, 
      name: 'Tiramisù Classico', 
      description: 'Nostra produzione con Uova, Mascarpone, Savoiardi, Caffè, Cacao', 
      price: '4,80', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 113, 
      name: 'Tiramisù alle Fragole', 
      description: 'Nostra produzione con Uova, Mascarpone, Yogurt, Fragole', 
      price: '4,80', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 114, 
      name: 'Tiramisù Banana e Cioccolato', 
      description: 'Nostra produzione con Uova, Mascarpone, Banane, Cioccolato', 
      price: '4,80', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 115, 
      name: 'Tiramisù Special: Mirtilli / Ribes / Amarena / Lampone', 
      description: 'Nostra produzione con Uova, Mascarpone, Frutti Rossi', 
      price: '5,10', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 116, 
      name: 'Cornetto Classico', 
      description: 'Algida', 
      price: '2,30', 
      allergens: ['L'] 
    },
    { 
      id: 117, 
      name: 'Magnum Classico', 
      description: 'Algida', 
      price: '2,40', 
      allergens: ['L'] 
    },
    { 
      id: 118, 
      name: 'Magnum Special', 
      description: 'Algida', 
      price: '2,70', 
      allergens: ['L', 'FG'] 
    },
    { 
      id: 119, 
      name: 'Tartufo Bianco/Nero', 
      description: 'Carte D\'Or', 
      price: '2,90', 
      allergens: ['L', 'U'] 
    }
  ],
  'menu-fisso': [
    { 
      id: 120, 
      name: 'Menù Baby', 
      description: '1 Pizza Piccola (Margherita, Rossa, Wurstel, Pizza) + 1 Supplì Semplice o 1 Crocchetta + 1 Bibita da 33 cl.', 
      price: '8 €', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 121, 
      name: 'Menù Completo', 
      description: '1 Pizza o Pinsa (Dalla voce "Pizze per Menù") + 1 Fritto Mix + 1 Bibita da 33 cl.', 
      price: 'con pizza 11€, con pinsa 12€', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 122, 
      name: 'Menù Coppia', 
      description: '2 Pizze o Pinse (Dalla voce "Pizze per Menù") + 2 Supplì Semplice o 2 Crocchette + 2 Bibite da 33 cl.', 
      price: 'con pizza 16€, con pinsa 18€', 
      allergens: ['G', 'L'] 
    }
  ]
};

// Legenda allergeni
export const allergenLegend = {
  'G': 'Glutine',
  'A': 'Arachidi',
  'FG': 'Frutta a guscio',
  'Se': 'Sedano',
  'Sn': 'Senape',
  'M': 'Molluschi',
  'So': 'Soia',
  'U': 'Uova',
  'L': 'Latte',
  'Ss': 'Sesamo',
  'P': 'Pesce',
  'C': 'Crostacei',
  'Sf': 'Solfiti',
  'Lu': 'Lupini'
};

// Informazioni del ristorante
export const restaurantInfo = {
  name: 'AHO PIZZA',
  address: 'Via Giovanni Rizzi, 43',
  phone1: '0620630082-92',
  phone2: '3888610207',
  facebook: 'AHOPIZZATORREANGELA',
  instagram: '@ahopizza_dal1996',
  slogan: 'Pizza e Pinsa romana da asporto e a domicilio',
  since: 'dal 1996',
  hours: 'Sempre Aperti dalle 18:00 alle 22:00!',
  delivery_minimum: '13 €',
  delivery_cost: '2 €',
  validity: 'Valido da Novembre 2025'
};