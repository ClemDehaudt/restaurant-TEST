export interface MenuItem {
  id: string
  name: string
  nameItalian: string
  description: string
  price: number
  category: 'antipasti' | 'pizze' | 'paste' | 'secondi' | 'dolci'
  badges?: ('signature' | 'specialty' | 'bestseller' | 'spicy' | 'vegetarian')[]
  image?: string
}

export const menuData: MenuItem[] = [
  // ANTIPASTI
  {
    id: 'burrata-cremosa',
    name: 'Burrata Cremosa',
    nameItalian: 'Burrata Cremosa',
    description: 'Burrata artisanale, tomates confites, basilic frais, huile d\'olive Ligurie',
    price: 16,
    category: 'antipasti',
    badges: ['signature']
  },
  {
    id: 'carpaccio-manzo',
    name: 'Carpaccio de Bœuf',
    nameItalian: 'Carpaccio di Manzo',
    description: 'Fines tranches de bœuf, roquette, copeaux de Parmigiano Reggiano 36 mois',
    price: 18,
    category: 'antipasti'
  },
  {
    id: 'bruschetta-tricolore',
    name: 'Bruschetta Tricolore',
    nameItalian: 'Bruschetta Tricolore',
    description: 'Trio de bruschettas : tomate-basilic, champignons truffés, ricotta-miel',
    price: 14,
    category: 'antipasti'
  },
  {
    id: 'calamari-fritti',
    name: 'Calamars Frits',
    nameItalian: 'Calamari Fritti',
    description: 'Calamars croustillants, sauce marinara maison, citron de Sicile',
    price: 15,
    category: 'antipasti'
  },

  // PIZZE
  {
    id: 'margherita-dop',
    name: 'Margherita D.O.P',
    nameItalian: 'Margherita D.O.P',
    description: 'Tomate San Marzano, mozzarella di Bufala, basilic frais',
    price: 16,
    category: 'pizze',
    badges: ['bestseller']
  },
  {
    id: 'diavola',
    name: 'Diavola',
    nameItalian: 'Diavola',
    description: 'Tomate, mozzarella, salami piquant calabrais, huile pimentée',
    price: 18,
    category: 'pizze',
    badges: ['spicy']
  },
  {
    id: 'tartufo-nero',
    name: 'Tartufo Nero',
    nameItalian: 'Tartufo Nero',
    description: 'Crème de truffe noire, mozzarella, champignons, copeaux de truffe',
    price: 24,
    category: 'pizze',
    badges: ['signature']
  },
  {
    id: 'prosciutto-rucola',
    name: 'Jambon et Roquette',
    nameItalian: 'Prosciutto e Rucola',
    description: 'Tomate, mozzarella, prosciutto di Parma 24 mois, roquette, copeaux Parmigiano',
    price: 19,
    category: 'pizze'
  },
  {
    id: 'quattro-formaggi',
    name: 'Quatre Fromages',
    nameItalian: 'Quattro Formaggi',
    description: 'Mozzarella, gorgonzola, taleggio, Parmigiano, miel de châtaigne',
    price: 17,
    category: 'pizze'
  },
  {
    id: 'marinara-vegan',
    name: 'Marinara Végétarienne',
    nameItalian: 'Marinara Vegan',
    description: 'Tomate, ail, origan, huile d\'olive extra-vierge, câpres',
    price: 13,
    category: 'pizze',
    badges: ['vegetarian']
  },

  // PASTE
  {
    id: 'carbonara-romana',
    name: 'Carbonara Romaine',
    nameItalian: 'Carbonara Romana',
    description: 'Spaghetti, guanciale, pecorino romano, jaune d\'œuf, poivre noir',
    price: 18,
    category: 'paste',
    badges: ['bestseller']
  },
  {
    id: 'lasagne-nonna',
    name: 'Lasagnes de Grand-mère',
    nameItalian: 'Lasagne della Nonna',
    description: 'Ragù bolognaise 8h de cuisson, béchamel maison, Parmigiano',
    price: 20,
    category: 'paste',
    badges: ['signature']
  },
  {
    id: 'cacio-e-pepe',
    name: 'Cacio e Pepe',
    nameItalian: 'Cacio e Pepe',
    description: 'Tonnarelli, pecorino romano, poivre noir Tellicherry',
    price: 16,
    category: 'paste'
  },
  {
    id: 'pappardelle-cinghiale',
    name: 'Pappardelles au Sanglier',
    nameItalian: 'Pappardelle al Cinghiale',
    description: 'Larges pâtes, sauce sanglier braisé, romarin, vin rouge',
    price: 22,
    category: 'paste'
  },
  {
    id: 'ravioli-ricotta-spinaci',
    name: 'Raviolis Ricotta et Épinards',
    nameItalian: 'Ravioli Ricotta e Spinaci',
    description: 'Raviolis maison, beurre sauge, pignons de pin torréfiés',
    price: 19,
    category: 'paste',
    badges: ['vegetarian']
  },
  {
    id: 'tagliatelle-tartufo',
    name: 'Tagliatelles à la Truffe Blanche',
    nameItalian: 'Tagliatelle Tartufo Bianco',
    description: 'Pâtes fraîches, crème légère, truffe blanche d\'Alba (saison)',
    price: 32,
    category: 'paste',
    badges: ['signature']
  },

  // SECONDI
  {
    id: 'osso-buco',
    name: 'Osso Buco Milanaise',
    nameItalian: 'Osso Buco alla Milanese',
    description: 'Jarret de veau braisé, risotto safran, gremolata',
    price: 28,
    category: 'secondi'
  },
  {
    id: 'saltimbocca-romana',
    name: 'Saltimbocca Romaine',
    nameItalian: 'Saltimbocca alla Romana',
    description: 'Escalope de veau, jambon Parme, sauge, vin blanc',
    price: 24,
    category: 'secondi'
  },
  {
    id: 'branzino-forno',
    name: 'Bar de Ligne Rôti',
    nameItalian: 'Branzino al Forno',
    description: 'Bar de ligne entier, légumes méditerranéens rôtis, citron',
    price: 26,
    category: 'secondi'
  },

  // DOLCI
  {
    id: 'tiramisu-classico',
    name: 'Tiramisu Classique',
    nameItalian: 'Tiramisù Classico',
    description: 'Recette traditionnelle, mascarpone, café expresso, cacao Valrhona',
    price: 9,
    category: 'dolci',
    badges: ['bestseller']
  },
  {
    id: 'panna-cotta-frutti',
    name: 'Panna Cotta Fruits Rouges',
    nameItalian: 'Panna Cotta Frutti di Bosco',
    description: 'Crème vanille Bourbon, coulis fruits rouges maison',
    price: 8,
    category: 'dolci'
  },
  {
    id: 'cannoli-siciliani',
    name: 'Cannolis Siciliens',
    nameItalian: 'Cannoli Siciliani',
    description: 'Tubes croustillants, ricotta sucrée, pépites de chocolat, pistaches',
    price: 9,
    category: 'dolci'
  },
  {
    id: 'affogato-caffe',
    name: 'Affogato au Café',
    nameItalian: 'Affogato al Caffè',
    description: 'Glace vanille artisanale, double expresso, amaretti',
    price: 7,
    category: 'dolci'
  },
  {
    id: 'torta-limone',
    name: 'Gâteau au Citron d\'Amalfi',
    nameItalian: 'Torta al Limone di Amalfi',
    description: 'Gâteau citron moelleux, crème citron, meringue italienne',
    price: 10,
    category: 'dolci'
  }
]

export const categories = [
  { id: 'antipasti', name: 'Antipasti', nameFrench: 'Entrées' },
  { id: 'pizze', name: 'Pizze', nameFrench: 'Pizzas' },
  { id: 'paste', name: 'Paste', nameFrench: 'Pâtes' },
  { id: 'secondi', name: 'Secondi', nameFrench: 'Plats Principaux' },
  { id: 'dolci', name: 'Dolci', nameFrench: 'Desserts' }
] as const

export type Category = typeof categories[number]['id']
