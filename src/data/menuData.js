export const categories = [
  { id: 'fritti', name: 'Fritti' },
  { id: 'bruscotte', name: 'Bruscotte' },
  { id: 'pizze-bianche', name: 'Pizze Bianche' },
  { id: 'pizze-rosse', name: 'Pizze Rosse' },
  { id: 'buongustaio', name: 'Buongustaio' },
  { id: 'fredde', name: 'Fredde' },
  { id: 'calzoni', name: 'Calzoni' },
  { id: 'pizze-menu', name: 'Pizze per Menù' },
  { id: 'insalate', name: 'Insalate' },
  { id: 'bevande', name: 'Bevande' },
  { id: 'dolci', name: 'Dolci' },
  { id: 'menu-fisso', name: 'Menù Fisso' }
];

export const menuItems = {
  'fritti': [
    { 
      id: 1, 
      name: 'Supplì al Telefono', 
      description: 'Di nostra produzione con Ragù di manzo, Mozzarella', 
      price: '1,50€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 2, 
      name: 'Crocchetta Di Patate', 
      description: 'Di nostra produzione con Patate, Pepe, Parmigiano, Noce Moscata', 
      price: '1,30€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 3, 
      name: 'Crocchetta Special', 
      description: 'Di nostra produzione con Patate, Speck, Provola, Parmigiano, Noce moscata, Pepe', 
      price: '1,80€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 4, 
      name: 'Arancino Funghi e Piselli', 
      description: 'Di nostra produzione con Champignon e Piselli', 
      price: '2,00€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 5, 
      name: 'Arancino Amatriciana', 
      description: 'Di nostra produzione con Sugo all\'Amatriciana', 
      price: '2,00€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 6, 
      name: 'Arancino Carbonara', 
      description: 'Di nostra produzione con Uova, Pecorino, Guanciale, Pepe', 
      price: '2,00€', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 7, 
      name: 'Arancino Cacio e Pepe', 
      description: 'Di nostra produzione con Pecorino e Pepe nero', 
      price: '2,00€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 8, 
      name: 'Arancino Porcini e Tartufo', 
      description: 'Di nostra produzione con Funghi Porcini e Salsa Tartufata', 
      price: '2,00€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 9, 
      name: 'Arancino \'Nduja', 
      description: 'Di nostra produzione con \'Nduja di Spilinga', 
      price: '2,00€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 10, 
      name: 'Spaghì', 
      description: 'Di nostra produzione Supplì di Spaghetti con Pomodoro e Basilico', 
      price: '2,40€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 11, 
      name: 'Olive all\'Ascolana', 
      description: '6 pezzi', 
      price: '2,80€', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 12, 
      name: 'Mozzarelline', 
      description: 'Artigianali, 6 pezzi', 
      price: '2,80€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 13, 
      name: 'Bocconcini di Pollo', 
      description: '6 pezzi', 
      price: '2,80€', 
      allergens: ['G'] 
    },
    { 
      id: 14, 
      name: 'Fiori di Zucca', 
      description: 'Fiore di Zucca in pastella con Alici e Mozzarella', 
      price: '2,50€', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 15, 
      name: 'Filetti di Baccalà', 
      description: 'Filetto di Baccalà in pastella', 
      price: '2,60€', 
      allergens: ['G', 'P'] 
    },
    { 
      id: 16, 
      name: 'Patate Fritte', 
      description: 'Steakhouse', 
      price: '3,10€', 
      allergens: [] 
    },
    { 
      id: 17, 
      name: 'Chele di Granchio', 
      description: '1 pezzo', 
      price: '1,20€', 
      allergens: ['G', 'C'] 
    },
    { 
      id: 18, 
      name: 'Anelli di Cipolla', 
      description: '6 pezzi', 
      price: '2,60€', 
      allergens: ['G'] 
    },
    { 
      id: 19, 
      name: 'Tris Vegetale', 
      description: 'Cavolfiori, Zucchine, Carciofi in pastella', 
      price: '4,60€', 
      allergens: ['G'] 
    },
    { 
      id: 20, 
      name: 'Alette di Pollo', 
      description: '3 pezzi', 
      price: '3,50€', 
      allergens: ['G'] 
    },
    { 
      id: 21, 
      name: 'Fritto Mix', 
      description: '1 Supplì, 1 Crocchetta, 2 Mozzarelline, 2 Olive Ascolane, 2 Bocconcini di Pollo, 1/2 porzione di Patatine Fritte', 
      price: '6,70€', 
      allergens: ['G', 'L', 'U'] 
    },
  ],
  'bruscotte': [
    { 
      id: 22, 
      name: 'Bruscotta con Pomodoro a Fette', 
      description: 'Pomodoro a Fette, Sale, Olio e Origano', 
      price: '4,50€', 
      allergens: ['G'] 
    },
    { 
      id: 23, 
      name: 'Bruscotta con Mozzarella e...', 
      description: 'Mozzarella e ingrediente a scelta', 
      price: '6,40€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 24, 
      name: 'Bruscotta con Crema d\'Olive', 
      description: 'Crema d\'Olive', 
      price: '4,60€', 
      allergens: ['G'] 
    },
    { 
      id: 25, 
      name: 'Bruscotta con \'Nduja', 
      description: '\'Nduja di Spilinga', 
      price: '6,10€', 
      allergens: ['G'] 
    },
    { 
      id: 26, 
      name: 'Bruscotta con Crema di Tartufo', 
      description: 'Crema di Tartufo', 
      price: '6,20€', 
      allergens: ['G'] 
    },
  ],
  'pizze-bianche': [
    { 
      id: 27, 
      name: 'Zucchine', 
      description: 'Mozzarella, Zucchine, Alici', 
      price: '6,80€', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 28, 
      name: 'Cacio e Pepe', 
      description: 'Mozzarella, Pecorino, Pepe', 
      price: '6,50€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 29, 
      name: 'Quattro Formaggi', 
      description: 'Mozzarella, Gorgonzola, Provola, Edamer', 
      price: '6,90€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 30, 
      name: 'Crostino', 
      description: 'Mozzarella, Prosciutto Crudo o Cotto', 
      price: '7,00€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 31, 
      name: 'Pazza', 
      description: 'Mozzarella, Patatine Fritte, Salsiccia o Wurstel', 
      price: '7,00€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 32, 
      name: 'Radicchio e Gorgonzola', 
      description: 'Mozzarella, Radicchio, Gorgonzola', 
      price: '6,60€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 33, 
      name: 'Misto Bosco', 
      description: 'Mozzarella, Funghi Misti', 
      price: '6,90€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 34, 
      name: 'Patate', 
      description: 'Mozzarella, Patate, Rosmarino, Sale, Olio', 
      price: '6,50€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 35, 
      name: 'Romana', 
      description: 'Mozzarella, Carciofi Grigliati', 
      price: '6,70€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 36, 
      name: 'Tonno e Carciofini', 
      description: 'Mozzarella, Carciofini, Tonno', 
      price: '7,00€', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 37, 
      name: 'Boscaiola', 
      description: 'Mozzarella, Champignon, Salsiccia', 
      price: '7,60€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 38, 
      name: 'Contadina', 
      description: 'Mozzarella, Peperoni, Melanzane, Zucchine', 
      price: '7,00€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 39, 
      name: 'Tonno e Cipolla', 
      description: 'Mozzarella, Tonno, Cipolla Rossa e Peperoncino', 
      price: '6,80€', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 40, 
      name: 'Fiori di Zucca', 
      description: 'Mozzarella, Fiori di Zucca, Alici (Soggetta a stagionalità)', 
      price: '7,50€', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 41, 
      name: 'Aho Pizza', 
      description: 'Mozzarella, Purè, Cotto/Mortadella/Nduja/Tonno/Salsiccia', 
      price: '7,80€', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 42, 
      name: 'Messicana', 
      description: 'Mozzarella, Salsiccia, Fagioli, Peperoncino', 
      price: '7,20€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 43, 
      name: 'Porcini', 
      description: 'Mozzarella, Provola Affumicata, Speck', 
      price: '8,10€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 44, 
      name: 'Pin Pizza', 
      description: 'Mozzarella, Funghi Porcini, Zucchine e Gorgonzola', 
      price: '8,80€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 45, 
      name: 'Monti e Monti', 
      description: 'Mozzarella, Funghi Porcini, Salsiccia', 
      price: '9,00€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 46, 
      name: 'Broccoletti e Salsiccia', 
      description: 'Mozzarella, Broccoletti, Salsiccia, Peperoncino', 
      price: '8,40€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 47, 
      name: 'Fior di Pizza', 
      description: 'Sale, Olio, Spezie', 
      price: '5,50€', 
      allergens: ['G'] 
    },
    { 
      id: 48, 
      name: 'Focaccia', 
      description: 'Sale, Olio, Spezie', 
      price: '4,00€', 
      allergens: ['G'] 
    },
  ],
  'pizze-rosse': [
    { 
      id: 49, 
      name: 'Margherita', 
      description: 'Pomodoro, Mozzarella, Olio EVO', 
      price: '6,40€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 50, 
      name: 'Marinara', 
      description: 'Pomodoro, Origano, Aglio, Basilico, Mix di Spezie', 
      price: '5,20€', 
      allergens: ['G'] 
    },
    { 
      id: 51, 
      name: 'Napoli', 
      description: 'Pomodoro, Mozzarella, Alici', 
      price: '6,80€', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 52, 
      name: 'Rossa', 
      description: 'Pomodoro, Origano, Olio EVO', 
      price: '4,50€', 
      allergens: ['G'] 
    },
    { 
      id: 53, 
      name: 'Wurstel', 
      description: 'Pomodoro, Mozzarella, Wurstel', 
      price: '6,80€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 54, 
      name: 'Funghi', 
      description: 'Pomodoro, Mozzarella, Funghi Champignon', 
      price: '6,90€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 55, 
      name: 'Diavola', 
      description: 'Pomodoro, Mozzarella, Salame Ventricina Piccante', 
      price: '7,00€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 56, 
      name: 'Tonno', 
      description: 'Pomodoro, Tonno, Salsa Verde, Spezie, Peperoncino', 
      price: '6,50€', 
      allergens: ['G', 'P'] 
    },
    { 
      id: 57, 
      name: 'Bufalina', 
      description: 'Pomodoro, Bufala in cottura e Basilico', 
      price: '8,10€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 58, 
      name: 'Calabrò', 
      description: 'Pomodoro, Mozzarella, Alici, Olive, Pecorino, Salsa Verde, Peperoncino', 
      price: '7,50€', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 59, 
      name: 'Capricciosa', 
      description: 'Pomodoro, Mozzarella, Funghi, Uova, Olive, Carciofini, Crudo', 
      price: '7,80€', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 60, 
      name: 'Melanzane', 
      description: 'Pomodoro, Mozzarella, Melanzane, Pecorino', 
      price: '7,40€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 61, 
      name: 'Quattro stagioni', 
      description: 'Pomodoro, Mozzarella, Funghi, Olive, Salame, Alici, Crudo, Carciofini, Frutti di Mare', 
      price: '8,40€', 
      allergens: ['G', 'L', 'P', 'M'] 
    },
    { 
      id: 62, 
      name: 'Tonno, Olive, Pomodori Secchi', 
      description: 'Pomodoro, Mozzarella, Tonno, Olive, Pomodori Secchi', 
      price: '8,40€', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 63, 
      name: '\'Nduja', 
      description: 'Pomodoro, Mozzarella, \'Nduja di Spilinga', 
      price: '7,50€', 
      allergens: ['G', 'L'] 
    },
  ],
  'buongustaio': [
    { 
      id: 64, 
      name: 'Carbonara', 
      description: 'Mozzarella, Guanciale, Uova, Pecorino, Pepe', 
      price: '8,60€', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 65, 
      name: 'Salmone', 
      description: 'Mozzarella, Salmone', 
      price: '9,00€', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 66, 
      name: 'Amatriciana', 
      description: 'Pomodoro, Guanciale, Pecorino, Peperoncino', 
      price: '8,30€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 67, 
      name: 'La Valtellina', 
      description: 'Mozzarella, Provola Affumicata, Speck', 
      price: '8,30€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 68, 
      name: 'Colosseo', 
      description: 'Pomodoro, Peperoni, Salsiccia, Provola', 
      price: '8,20€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 69, 
      name: 'Stracchino, Pancetta e Zucchine', 
      description: 'Mozzarella, Stracchino, Pancetta e Zucchine', 
      price: '8,30€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 70, 
      name: 'Golosa', 
      description: 'Mozzarella, Guanciale, Pecorino, Miele, Rosmarino', 
      price: '8,10€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 71, 
      name: 'Suprema', 
      description: 'Pomodoro, Bufala in cottura, Alici, Pomodori Secchi', 
      price: '8,80€', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 72, 
      name: 'Tartufo', 
      description: 'Pomodoro o Mozzarella, Tartufo', 
      price: '8,30€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 73, 
      name: 'Ricotta e Mortadella', 
      description: 'Ricotta, Mortadella e Granella di Pistacchio', 
      price: '8,20€', 
      allergens: ['G', 'L', 'FG'] 
    },
    { 
      id: 74, 
      name: 'Deliziosa', 
      description: 'Pomodoro, Funghi Misti, Guanciale, \'Nduja di Spilinga', 
      price: '8,60€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 75, 
      name: 'Tricolore', 
      description: 'Pomodoro, Bufala a fette, Rucola, Pomodori Secchi', 
      price: '8,60€', 
      allergens: ['G', 'L'] 
    },
  ],
  'fredde': [
    { 
      id: 76, 
      name: 'Stracchino', 
      description: 'Stracchino e Affettato a scelta', 
      price: '7,20€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 77, 
      name: 'Insalata di Pollo', 
      description: 'Focaccia, Pollo, Lattuga e Maionese', 
      price: '7,30€', 
      allergens: ['G', 'U'] 
    },
    { 
      id: 78, 
      name: 'Bresaola, Rughetta e Parmigiano', 
      description: 'Bresaola, Rughetta e Parmigiano', 
      price: '8,20€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 79, 
      name: 'Gamberetti e Rughetta', 
      description: 'Pomodoro, Rughetta, Gamberetti', 
      price: '7,90€', 
      allergens: ['G', 'C'] 
    },
    { 
      id: 80, 
      name: 'Gamberetti, Lattuga e Salsa Rosa', 
      description: 'Pomodoro, Lattuga, Gamberetti e Salsa Rosa', 
      price: '8,10€', 
      allergens: ['G', 'U', 'C'] 
    },
    { 
      id: 81, 
      name: 'Caprese', 
      description: 'Pomodoro e Bufala a fette, Basilico', 
      price: '8,00€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 82, 
      name: 'Bufala e Pomodorini', 
      description: 'Pomodoro, Bufala e Pomodorini', 
      price: '8,20€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 83, 
      name: 'Bufala e Speck', 
      description: 'Pomodoro, Bufala e Speck', 
      price: '8,50€', 
      allergens: ['G', 'L'] 
    },
  ],
  'calzoni': [
    { 
      id: 84, 
      name: 'Calzone al Pomodoro', 
      description: 'Pomodoro, Mozzarella', 
      price: '6,20€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 85, 
      name: 'Calzone Boscaiolo', 
      description: 'Mozzarella, Salsiccia e Funghi', 
      price: '6,70€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 86, 
      name: 'Calzone alla \'Nduja', 
      description: 'Mozzarella, \'Nduja', 
      price: '6,50€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 87, 
      name: 'Calzone al Prosciutto Crudo / Cotto', 
      description: 'Mozzarella e Prosciutto Crudo o Cotto', 
      price: '6,50€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 88, 
      name: 'Calzone alla Pancetta', 
      description: 'Mozzarella, Stracchino e Pancetta', 
      price: '6,70€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 89, 
      name: 'Calzone Contadino', 
      description: 'Mozzarella, Peperoni, Zucchine, Melanzane', 
      price: '6,30€', 
      allergens: ['G', 'L'] 
    },
  ],
  'pizze-menu': [
    { 
      id: 90, 
      name: 'Zucchine', 
      description: 'Mozzarella, Zucchine, Alici', 
      price: '6,80€', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 91, 
      name: 'Cacio e Pepe', 
      description: 'Mozzarella, Pecorino, Pepe', 
      price: '6,50€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 92, 
      name: 'Quattro Formaggi', 
      description: 'Mozzarella, Gorgonzola, Provola, Edamer', 
      price: '6,90€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 93, 
      name: 'Crostino', 
      description: 'Mozzarella, Prosciutto Crudo o Cotto', 
      price: '7,00€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 94, 
      name: 'Pazza', 
      description: 'Mozzarella, Patatine Fritte, Salsiccia o Wurstel', 
      price: '7,00€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 95, 
      name: 'Radicchio e Gorgonzola', 
      description: 'Mozzarella, Radicchio, Gorgonzola', 
      price: '6,60€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 96, 
      name: 'Misto Bosco', 
      description: 'Mozzarella, Funghi Misti', 
      price: '6,90€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 97, 
      name: 'Patate', 
      description: 'Mozzarella, Patate, Rosmarino, Sale, Olio', 
      price: '6,50€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 98, 
      name: 'Romana', 
      description: 'Mozzarella, Carciofi Grigliati', 
      price: '6,70€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 99, 
      name: 'Margherita', 
      description: 'Pomodoro, Mozzarella, Olio EVO', 
      price: '6,40€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 100, 
      name: 'Marinara', 
      description: 'Pomodoro, Origano, Aglio, Basilico, Mix di Spezie', 
      price: '5,20€', 
      allergens: ['G'] 
    },
    { 
      id: 101, 
      name: 'Napoli', 
      description: 'Pomodoro, Mozzarella, Alici', 
      price: '6,80€', 
      allergens: ['G', 'L', 'P'] 
    },
    { 
      id: 102, 
      name: 'Rossa', 
      description: 'Pomodoro, Origano, Olio EVO', 
      price: '4,50€', 
      allergens: ['G'] 
    },
    { 
      id: 103, 
      name: 'Wurstel', 
      description: 'Pomodoro, Mozzarella, Wurstel', 
      price: '6,80€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 104, 
      name: 'Funghi', 
      description: 'Pomodoro, Mozzarella, Funghi Champignon', 
      price: '6,90€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 105, 
      name: 'Diavola', 
      description: 'Pomodoro, Mozzarella, Salame Ventricina Piccante', 
      price: '7,00€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 106, 
      name: 'Tonno', 
      description: 'Pomodoro, Tonno, Salsa Verde, Spezie, Peperoncino', 
      price: '6,50€', 
      allergens: ['G', 'P'] 
    },
  ],
  'insalate': [
    { 
      id: 107, 
      name: 'Insalata di Mare', 
      description: 'Lattuga, Frutti di Mare, Sale, Olio', 
      price: '5,20€', 
      allergens: ['M', 'P', 'C'] 
    },
    { 
      id: 108, 
      name: 'Insalata Rughetta e Gamberetti', 
      description: 'Rughetta, Gamberetti, Salsa Rosa, Sale e Olio', 
      price: '5,20€', 
      allergens: ['C', 'U'] 
    },
    { 
      id: 109, 
      name: 'Insalata Mista', 
      description: 'Lattuga, Carote, Pomodori, Rucola, Sale e Olio', 
      price: '5,00€', 
      allergens: [] 
    },
    { 
      id: 110, 
      name: 'Insalata Tonno e Pomodoro', 
      description: 'Tonno, Pomodoro, Olive Nere, Sale e Olio', 
      price: '5,00€', 
      allergens: ['P'] 
    },
    { 
      id: 111, 
      name: 'Insalata Caprese', 
      description: 'Mozzarella di Bufala, Pomodoro, Olive, Sale, Olio', 
      price: '7,00€', 
      allergens: ['L'] 
    },
    { 
      id: 112, 
      name: 'Insalata Tonno e Fagioli', 
      description: 'Tonno, Fagioli, Sale e Olio', 
      price: '5,00€', 
      allergens: ['P'] 
    },
  ],
  'bevande': [
    { 
      id: 113, 
      name: 'Bottiglia Coca Cola / Coca Zero / Fanta / Sprite', 
      description: '1.5 lt.', 
      price: '3,00€', 
      allergens: [] 
    },
    { 
      id: 114, 
      name: 'Lattina Coca Cola / Coca Zero / Fanta / Sprite', 
      description: '33 cl.', 
      price: '1,80€', 
      allergens: [] 
    },
    { 
      id: 115, 
      name: 'Birra Peroni', 
      description: '33 cl.', 
      price: '1,80€', 
      allergens: ['G'] 
    },
    { 
      id: 116, 
      name: 'Birra Peroni', 
      description: '66 cl.', 
      price: '2,50€', 
      allergens: ['G'] 
    },
    { 
      id: 117, 
      name: 'Birra Ichnusa non filtrata', 
      description: '50 cl.', 
      price: '3,30€', 
      allergens: ['G'] 
    },
    { 
      id: 118, 
      name: 'Birra Moretti Baffo d\'Oro', 
      description: '66 cl.', 
      price: '2,90€', 
      allergens: ['G'] 
    },
    { 
      id: 119, 
      name: 'Birra Heineken', 
      description: '66 cl.', 
      price: '2,90€', 
      allergens: ['G'] 
    },
    { 
      id: 120, 
      name: 'Birra Ceres', 
      description: '33 cl.', 
      price: '3,00€', 
      allergens: ['G'] 
    },
    { 
      id: 121, 
      name: 'Birra Tennent\'s', 
      description: '33 cl.', 
      price: '3,00€', 
      allergens: ['G'] 
    },
    { 
      id: 122, 
      name: 'Acqua Naturale/Frizzante', 
      description: '1.5 lt.', 
      price: '1,80€', 
      allergens: [] 
    },
    { 
      id: 123, 
      name: 'Bottiglia Thè Limone o Pesca', 
      description: '1.5 lt.', 
      price: '2,70€', 
      allergens: [] 
    },
    { 
      id: 124, 
      name: 'Vino Bianco o Rosso in bottiglia', 
      description: '0.75 lt.', 
      price: '6,50€', 
      allergens: ['Sf'] 
    },
    { 
      id: 125, 
      name: 'Prosecco D.O.C.', 
      description: '0.75 lt.', 
      price: '9,00€', 
      allergens: ['Sf'] 
    },
  ],
  'dolci': [
    { 
      id: 126, 
      name: 'Pizza con Nutella', 
      description: 'Focaccia con Nutella', 
      price: '5,50€', 
      allergens: ['G', 'L', 'FG'] 
    },
    { 
      id: 127, 
      name: 'Calzone Ricotta e Nutella', 
      description: 'Calzone con Ricotta Vaccina e Nutella', 
      price: '6,20€', 
      allergens: ['G', 'L', 'FG'] 
    },
    { 
      id: 128, 
      name: 'Tiramisù Classico', 
      description: 'Nostra produzione Uova, Mascarpone, Savoiardi, Caffè, Cacao', 
      price: '4,70€', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 129, 
      name: 'Tiramisù alle Fragole', 
      description: 'Nostra produzione con Uova, Mascarpone, Yogurt, Fragole', 
      price: '4,70€', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 130, 
      name: 'Tiramisù Banana e Cioccolato', 
      description: 'Nostra produzione con Uova, Mascarpone, Banane, Cioccolato', 
      price: '4,70€', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 131, 
      name: 'Tiramisù Special: Mirtilli / Ribes / Amarena / Lampone', 
      description: 'Nostra produzione con Uova, Mascarpone, Frutti Rossi', 
      price: '5,00€', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 132, 
      name: 'Cornetto Classico', 
      description: 'Algida', 
      price: '2,20€', 
      allergens: ['L'] 
    },
    { 
      id: 133, 
      name: 'Magnum Classico', 
      description: 'Algida', 
      price: '2,30€', 
      allergens: ['L'] 
    },
    { 
      id: 134, 
      name: 'Magnum Special', 
      description: 'Algida', 
      price: '2,60€', 
      allergens: ['L', 'FG'] 
    },
    { 
      id: 135, 
      name: 'Tartufo Bianco/Nero', 
      description: 'Carte D\'Or', 
      price: '2,80€', 
      allergens: ['L', 'U'] 
    },
    { 
      id: 136, 
      name: 'Viennetta', 
      description: 'Algida x 10 persone', 
      price: '15,00€', 
      allergens: ['L'] 
    },
  ],
  'menu-fisso': [
    { 
      id: 137, 
      name: 'Menù Baby', 
      description: '1 Pizza Piccola (Margherita, Rossa, Wurstel, Pizza Wurstel) + 1 Suppli o 1 Crocchetta + 1 Bibita da 33 cl.', 
      price: '8€', 
      allergens: ['G', 'L'] 
    },
    { 
      id: 138, 
      name: 'Menù Completo', 
      description: '1 Pizza o Pinsa (Dalla voce "Pizze per Menù") + 1 Fritto Mix + 1 Bibita da 33 cl.', 
      price: 'con pizza 11€, con pinsa 12€', 
      allergens: ['G', 'L', 'U'] 
    },
    { 
      id: 139, 
      name: 'Menù Coppia', 
      description: '2 Pizze o Pinse (Dalla Voce "Pizze per Menù") + 2 Suppli o 2 Crocchette + 2 Bibita da 33 cl.', 
      price: 'con pizza 16€, con pinsa 18€', 
      allergens: ['G', 'L'] 
    }
  ]
};