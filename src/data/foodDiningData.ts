
export interface DiningCategory {
  name: string;
  description: string;
  priceRange: string;
  bestTimes: string;
  tips: string[];
  recommendations: string[];
}

export interface MadridSpecialty {
  name: string;
  description: string;
  whereToFind: string[];
  price: string;
  vegetarian?: boolean;
  mustTry: boolean;
}

export interface FoodMarket {
  name: string;
  address: string;
  hours: string;
  description: string;
  highlights: string[];
  priceLevel: 'Budget' | 'Mid-range' | 'Upscale';
}

export const diningCategories: DiningCategory[] = [
  {
    name: "Traditional Tapas Bars",
    description: "Authentic Spanish small plates experience",
    priceRange: "€2-6 per tapa",
    bestTimes: "Evening (7-10pm), Sunday lunch",
    tips: [
      "Order at the bar for cheaper prices",
      "Try different bars - tapas crawl tradition",
      "Ask for local recommendations",
      "Share multiple tapas rather than individual meals"
    ],
    recommendations: ["Casa Labra", "El Sur", "Taberna Real", "La Casa del Abuelo"]
  },
  {
    name: "Traditional Restaurants (Tabernas)",
    description: "Century-old establishments serving classic Madrid cuisine",
    priceRange: "€25-45 per person",
    bestTimes: "Lunch (2-4pm), Dinner (9-11pm)",
    tips: [
      "Reservations recommended for dinner",
      "Try the menu del día at lunch for value",
      "Don't rush - Spanish dining is leisurely",
      "Ask about regional specialties"
    ],
    recommendations: ["Sobrino de Botín", "Casa Lucio", "Taberna La Bola", "Casa Ciriaco"]
  },
  {
    name: "Modern Spanish Cuisine",
    description: "Contemporary takes on traditional Spanish dishes",
    priceRange: "€40-80 per person",
    bestTimes: "Dinner reservations essential",
    tips: [
      "Book well in advance",
      "Try tasting menus for full experience",
      "Wine pairings often excellent value",
      "Dress code may apply"
    ],
    recommendations: ["DiverXO", "Coque", "Ramón Freixa", "Santceloni"]
  },
  {
    name: "International Cuisine",
    description: "Diverse global dining options throughout the city",
    priceRange: "€15-40 per person",
    bestTimes: "Varies by cuisine",
    tips: [
      "Lavapiés area for diverse international options",
      "Malasaña for Asian and fusion",
      "Check reviews for authentic vs. tourist-oriented",
      "Many close during siesta (3-7pm)"
    ],
    recommendations: ["Kabuki (Japanese)", "Amazónico (Latin American)", "Punto MX (Mexican)", "Ramsés (International)"]
  },
  {
    name: "Rooftop & Terrace Dining",
    description: "Dining with spectacular city views",
    priceRange: "€30-60 per person",
    bestTimes: "Sunset drinks, warm evenings",
    tips: [
      "Book sunset tables in advance",
      "Dress codes often enforced",
      "Prices higher for the view",
      "Best from April to October"
    ],
    recommendations: ["Tartan Roof", "The Hat Rooftop", "Círculo de Bellas Artes", "Dear Hotel Sky Bar"]
  }
];

export const madridSpecialties: MadridSpecialty[] = [
  {
    name: "Cocido Madrileño",
    description: "Traditional chickpea stew with meat and vegetables, served in three courses",
    whereToFind: ["Taberna La Bola", "Malacatín", "Casa Carola"],
    price: "€20-30",
    mustTry: true
  },
  {
    name: "Callos a la Madrileña",
    description: "Tripe stew with chorizo and blood sausage - not for everyone but authentically Madrid",
    whereToFind: ["Casa Lucio", "Taberna Agrado", "El Landó"],
    price: "€12-18",
    mustTry: false
  },
  {
    name: "Huevos Estrellados",
    description: "Fried eggs over crispy potatoes, often with jamón ibérico",
    whereToFind: ["Casa Lucio", "Taberna Real", "La Sanabresa"],
    price: "€8-15",
    mustTry: true
  },
  {
    name: "Bocadillo de Calamares",
    description: "Fried squid sandwich - Madrid's most famous street food",
    whereToFind: ["La Campana", "Los Gallos", "Bar Postas"],
    price: "€3-5",
    mustTry: true
  },
  {
    name: "Torrijas",
    description: "Spanish French toast, especially popular during Easter",
    whereToFind: ["Malacatín", "Casa Labra", "El Madroño"],
    price: "€4-7",
    mustTry: true
  },
  {
    name: "Patatas Bravas",
    description: "Crispy potatoes with spicy tomato sauce and aioli",
    whereToFind: ["Everywhere - each bar has their own version"],
    price: "€4-8",
    mustTry: true
  },
  {
    name: "Jamón Ibérico",
    description: "Premium cured ham from acorn-fed pigs",
    whereToFind: ["Museo del Jamón", "Casa Mingo", "Lateral"],
    price: "€18-35 per plate",
    mustTry: true
  },
  {
    name: "Gazpacho",
    description: "Cold tomato soup, perfect for hot summer days",
    whereToFind: ["Most restaurants (seasonal)", "Taberna del Alabardero"],
    price: "€6-10",
    vegetarian: true,
    mustTry: true
  }
];

export const foodMarkets: FoodMarket[] = [
  {
    name: "Mercado de San Miguel",
    address: "Plaza de San Miguel, s/n, 28005 Madrid",
    hours: "Daily 10:00-24:00",
    description: "Historic covered market with gourmet food stalls and wine bars",
    highlights: ["Gourmet tapas", "Wine tasting", "Artisanal products", "Tourist-friendly"],
    priceLevel: "Upscale"
  },
  {
    name: "Mercado de San Antón",
    address: "Calle de Augusto Figueroa, 24, 28004 Madrid",
    hours: "Monday-Saturday 10:00-22:00, Sunday 11:00-20:00",
    description: "Three-story market with fresh produce, prepared foods, and rooftop terrace",
    highlights: ["Fresh produce", "Prepared foods", "Rooftop restaurant", "Local atmosphere"],
    priceLevel: "Mid-range"
  },
  {
    name: "Mercado de la Paz",
    address: "Calle de Ayala, 28, 28001 Madrid",
    hours: "Monday-Friday 9:00-14:30, 17:30-20:00, Saturday 9:00-14:30",
    description: "Traditional neighborhood market in upscale Salamanca district",
    highlights: ["High-quality produce", "Local vendors", "Authentic experience", "Salamanca location"],
    priceLevel: "Upscale"
  },
  {
    name: "Mercado de Maravillas",
    address: "Calle de Bravo Murillo, 122, 28020 Madrid",
    hours: "Monday-Friday 9:00-14:00, 17:00-20:00, Saturday 9:00-14:00",
    description: "Largest traditional market in Madrid, authentic local experience",
    highlights: ["Authentic local market", "Great prices", "Huge variety", "Off tourist path"],
    priceLevel: "Budget"
  },
  {
    name: "Mercado de Chamberí",
    address: "Calle de Alonso Cano, 10, 28003 Madrid",
    hours: "Monday-Friday 9:00-14:00, 17:30-20:00, Saturday 9:00-14:00",
    description: "Recently renovated traditional market with modern food stalls",
    highlights: ["Mix of traditional and modern", "Quality vendors", "Local neighborhood feel"],
    priceLevel: "Mid-range"
  }
];

export const diningEtiquette = {
  mealTimes: {
    breakfast: "8:00-10:00 (usually light - coffee and pastry)",
    lunch: "14:00-16:00 (main meal of the day)",
    dinner: "21:00-23:00 (don't go before 9pm)"
  },
  tips: [
    "Lunch is the main meal - dinner is often lighter",
    "Many restaurants close 16:00-20:00 (siesta time)",
    "Tipping: round up or 5-10% for good service",
    "Bread is often charged separately (€1-2)",
    "Free tapas still exists but rare in tourist areas",
    "Ask for 'la cuenta' to get the bill",
    "Splitting bills ('cuentas separadas') is less common"
  ],
  drinkingCulture: [
    "Wine or beer with meals is normal",
    "Coffee after meals, not during",
    "Sangría is mostly for tourists - locals drink tinto de verano",
    "Bars serve food until late",
    "Happy hour not common - steady prices throughout day"
  ]
};
