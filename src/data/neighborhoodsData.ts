
export interface Neighborhood {
  name: string;
  district: string;
  description: string;
  characteristics: string[];
  bestFor: string[];
  keyAttractions: string[];
  diningScene: string;
  transportLinks: string[];
  priceLevel: 'Budget' | 'Mid-range' | 'Upscale' | 'Luxury';
  touristFriendly: boolean;
  nightlife: 'Quiet' | 'Moderate' | 'Vibrant' | 'Legendary';
}

export const madridNeighborhoods: Neighborhood[] = [
  {
    name: "Sol",
    district: "Centro",
    description: "The absolute heart of Madrid and Spain, where all distances in the country are measured from Puerta del Sol.",
    characteristics: ["Historic center", "Always bustling", "Tourist central", "Shopping hub"],
    bestFor: ["First-time visitors", "Shopping", "Central location", "Transportation hub"],
    keyAttractions: ["Puerta del Sol", "Plaza Mayor", "Royal Palace nearby", "Gran Vía"],
    diningScene: "Mix of tourist restaurants and traditional taverns, plus international chains",
    transportLinks: ["Metro Sol (Lines 1, 2, 3)", "Cercanías Sol", "Multiple bus lines"],
    priceLevel: "Mid-range",
    touristFriendly: true,
    nightlife: "Vibrant"
  },
  {
    name: "Malasaña",
    district: "Centro",
    description: "Alternative, hipster neighborhood known for its independent shops, vintage stores, and creative scene.",
    characteristics: ["Hipster central", "Alternative culture", "Young crowd", "Creative energy"],
    bestFor: ["Alternative shopping", "Young nightlife", "Vintage finds", "Creative types"],
    keyAttractions: ["Plaza del Dos de Mayo", "Calle Fuencarral shopping", "Independent bookstores"],
    diningScene: "Trendy cafés, international fusion, vegan options, craft beer bars",
    transportLinks: ["Metro Tribunal (Line 1)", "Metro Noviciado (Lines 2, 10)", "Metro San Bernardo (Lines 2, 4)"],
    priceLevel: "Mid-range",
    touristFriendly: true,
    nightlife: "Legendary"
  },
  {
    name: "Chueca",
    district: "Centro",
    description: "LGBTQ+ friendly neighborhood with trendy shops, galleries, and excellent restaurants.",
    characteristics: ["LGBTQ+ hub", "Trendy", "Fashionable", "Inclusive"],
    bestFor: ["LGBTQ+ travelers", "Fashion shopping", "Fine dining", "Art galleries"],
    keyAttractions: ["Plaza de Chueca", "Mercado de San Antón", "Fashion boutiques"],
    diningScene: "Excellent restaurants, trendy tapas bars, international cuisine, rooftop terraces",
    transportLinks: ["Metro Chueca (Line 5)", "Metro Gran Vía (Lines 1, 5)"],
    priceLevel: "Upscale",
    touristFriendly: true,
    nightlife: "Vibrant"
  },
  {
    name: "La Latina",
    district: "Centro",
    description: "Traditional Madrid neighborhood famous for its Sunday flea market and authentic tapas scene.",
    characteristics: ["Traditional", "Historic", "Authentic tapas", "Sunday market"],
    bestFor: ["Traditional Spanish experience", "Tapas crawling", "Sunday market", "Historic atmosphere"],
    keyAttractions: ["El Rastro flea market", "Plaza de la Paja", "Basilica de San Francisco el Grande"],
    diningScene: "Traditional tapas bars, century-old taverns, authentic Madrid cuisine",
    transportLinks: ["Metro La Latina (Line 5)", "Metro Tirso de Molina (Line 1)"],
    priceLevel: "Budget",
    touristFriendly: true,
    nightlife: "Moderate"
  },
  {
    name: "Salamanca",
    district: "Salamanca",
    description: "Upscale neighborhood known for luxury shopping, fine dining, and elegant architecture.",
    characteristics: ["Luxury shopping", "Upscale dining", "Elegant architecture", "Wealthy area"],
    bestFor: ["Luxury shopping", "Fine dining", "High-end hotels", "Business travelers"],
    keyAttractions: ["Serrano shopping street", "IE Business School area", "Luxury boutiques"],
    diningScene: "High-end restaurants, Michelin-starred establishments, luxury hotel dining",
    transportLinks: ["Metro Serrano (Line 4)", "Metro Velázquez (Line 4)", "Metro Retiro (Line 2)"],
    priceLevel: "Luxury",
    touristFriendly: true,
    nightlife: "Moderate"
  },
  {
    name: "Retiro",
    district: "Retiro",
    description: "Elegant residential area surrounding the famous Retiro Park, near major museums.",
    characteristics: ["Park adjacent", "Museum district", "Residential", "Peaceful"],
    bestFor: ["Museum visits", "Park activities", "Quiet stay", "Families"],
    keyAttractions: ["Retiro Park", "Prado Museum", "Reina Sofía Museum", "Crystal Palace"],
    diningScene: "Café culture, park-side restaurants, traditional Spanish cuisine",
    transportLinks: ["Metro Retiro (Line 2)", "Metro Ibiza (Line 9)", "Metro Príncipe de Vergara (Lines 2, 9)"],
    priceLevel: "Upscale",
    touristFriendly: true,
    nightlife: "Quiet"
  },
  {
    name: "Lavapiés",
    district: "Centro",
    description: "Multicultural, diverse neighborhood with international food, alternative culture, and affordable prices.",
    characteristics: ["Multicultural", "Alternative", "Affordable", "Diverse"],
    bestFor: ["Budget travelers", "International food", "Alternative culture", "Young artists"],
    keyAttractions: ["Tabacalera cultural center", "International markets", "Street art"],
    diningScene: "International cuisine, Middle Eastern, Asian, African, budget-friendly options",
    transportLinks: ["Metro Lavapiés (Line 3)", "Metro Embajadores (Lines 3, 5)"],
    priceLevel: "Budget",
    touristFriendly: true,
    nightlife: "Vibrant"
  },
  {
    name: "Chamberí",
    district: "Chamberí",
    description: "Residential neighborhood popular with young professionals and families, great local atmosphere.",
    characteristics: ["Residential", "Local atmosphere", "Young professionals", "Family-friendly"],
    bestFor: ["Local experience", "Families", "Long-term stays", "Authentic Madrid life"],
    keyAttractions: ["Sorolla Museum", "Local markets", "Neighborhood plazas"],
    diningScene: "Local restaurants, neighborhood bars, family-run establishments",
    transportLinks: ["Metro Iglesia (Line 1)", "Metro Bilbao (Lines 1, 4)", "Metro Quevedo (Line 2)"],
    priceLevel: "Mid-range",
    touristFriendly: false,
    nightlife: "Moderate"
  }
];

export const getNeighborhoodsByDistrict = () => {
  const districts: Record<string, Neighborhood[]> = {};
  madridNeighborhoods.forEach(neighborhood => {
    if (!districts[neighborhood.district]) {
      districts[neighborhood.district] = [];
    }
    districts[neighborhood.district].push(neighborhood);
  });
  return districts;
};

export const getNeighborhoodsByPriceLevel = (priceLevel: Neighborhood['priceLevel']) => {
  return madridNeighborhoods.filter(n => n.priceLevel === priceLevel);
};

export const getTouristFriendlyNeighborhoods = () => {
  return madridNeighborhoods.filter(n => n.touristFriendly);
};
