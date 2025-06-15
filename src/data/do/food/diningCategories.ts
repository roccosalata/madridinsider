
export interface DiningCategory {
  name: string;
  description: string;
  priceRange: string;
  bestTimes: string;
  tips: string[];
  recommendations: string[];
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
