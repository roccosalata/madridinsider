
export interface NightlifeCategory {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const nightlifeCategoriesData: NightlifeCategory[] = [
  {
    "id": "salsa-clubs",
    "title": "Salsa & Latin Dance Clubs",
    "description": "Experience the passion of Latin dance. These clubs are dedicated to salsa, bachata, and other Latin rhythms, offering a vibrant and energetic atmosphere for dancers of all levels.",
    "image": "/placeholder.svg"
  },
  {
    "id": "nightclubs",
    "title": "Nightclubs",
    "description": "For those who want to dance the night away, Madrid's nightclubs offer everything from electronic music to pop hits in multi-level venues that stay open until sunrise.",
    "image": "/placeholder.svg"
  },
  {
    "id": "cocktail-bars",
    "title": "Cocktail Bars",
    "description": "Sophisticated spots for inventive drinks. Madrid's cocktail bars range from classic speakeasies to modern lounges, perfect for a relaxed yet refined evening.",
    "image": "/placeholder.svg"
  },
  {
    "id": "rooftop-terraces",
    "title": "Rooftop Bars (For Evening Views)",
    "description": "Enjoy stunning city views with a drink in hand. These rooftop 'terrazas' are perfect for watching the sunset and enjoying Madrid's skyline, typically popular in the evening and at night.",
    "image": "/placeholder.svg"
  },
  {
    "id": "street-terraces",
    "title": "Classic 'Terrazas' (Day & Night)",
    "description": "A quintessential Madrid experience. These street-level 'terrazas' are perfect for people-watching with a coffee, caña, or glass of wine, bustling from morning until late at night.",
    "image": "/placeholder.svg"
  }
];

export interface NightlifeVenue {
    name: string;
    address?: string;
    description?: string;
    website?: string;
    phone?: string;
    metro?: string;
    notes?: string;
}

export const salsaClubs: NightlifeVenue[] = [
    { name: 'Azucar', address: 'c/ Atocha, 107', description: 'Popular salsa club', metro: 'Atocha' },
    { name: 'El Son', address: 'c/ de la Victoria, 6', description: 'Cuban music and salsa', metro: 'Sol' }
];

export const nightclubs: NightlifeVenue[] = [
    { name: 'Teatro Kapital', address: 'c/ Atocha, 125', description: '7-floor mega-club', metro: 'Atocha' },
    { name: 'Fabrik', address: 'Av. de la Industria, 82, Humanes de Madrid', description: 'Massive techno club on the outskirts' }
];

export const cocktailBars: NightlifeVenue[] = [
    { name: 'Salmon Guru', address: 'c/ Echegaray, 21', description: 'World-renowned creative cocktail bar', metro: 'Sevilla' },
    { name: '1862 Dry Bar', address: 'c/ del Pez, 27', description: 'Classic cocktails in a sophisticated setting', metro: 'Noviciado' }
];

export const rooftopTerraces: NightlifeVenue[] = [
    { name: 'Círculo de Bellas Artes Rooftop', address: 'c/ de Alcalá, 42', description: 'Iconic 360° views of Madrid', metro: 'Banco de España' },
    { name: 'Ginkgo Restaurante & Sky Bar', address: 'Plaza de España, 3', description: 'Stylish bar with great views', metro: 'Plaza de España' }
];

export const streetTerraces: NightlifeVenue[] = [
    { name: 'Plaza de Santa Ana', description: 'A whole plaza filled with classic terrazas, great for people-watching.' },
    { name: 'Plaza de Olavide', description: 'A local favorite, a large circular plaza with many street-level cafes and bars.' }
];

