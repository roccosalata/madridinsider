
export interface FoodMarket {
  name: string;
  address: string;
  hours: string;
  description: string;
  highlights: string[];
  priceLevel: 'Budget' | 'Mid-range' | 'Upscale';
}

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
