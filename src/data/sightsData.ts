// src/data/sightsData.ts
export interface Sight {
  id: string; // Unique identifier (e.g., 'prado-museum', 'retiro-park')
  name: string;
  category: 'Museum' | 'Landmark' | 'Park' | 'Palace' | 'Square' | 'Viewpoint'; // Add more as needed
  shortDescription: string;
  longDescription?: string; // Optional more detailed description
  imageUrl?: string; // URL for an image
  address?: string;
  hours?: string; // e.g., "10:00 AM - 6:00 PM, Closed Mondays"
  website?: string; // Link to official website
  tags?: string[]; // e.g., ['art', 'history', 'free entry times']
}

export const sights: Sight[] = [
  {
    id: 'prado-museum',
    name: 'Prado Museum (Museo Nacional del Prado)',
    category: 'Museum',
    shortDescription: 'Spain\'s main national art museum, showcasing masterpieces by Goya, Velázquez, and El Greco.',
    longDescription: 'The Prado Museum is considered one of the greatest art museums in the world, with an extensive collection of European art from the 12th century to the early 20th century. It boasts the most comprehensive collection of Spanish painting.',
    imageUrl: 'https://images.unsplash.com/photo-1560421027-761784610427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', // Replace with a real, good image URL
    address: 'C. de Ruiz de Alarcón, 23, 28014 Madrid',
    hours: 'Mon-Sat: 10am-8pm, Sun & holidays: 10am-7pm. Free entry times available.',
    website: 'https://www.museodelprado.es/',
    tags: ['art', 'goya', 'velazquez', 'european art', 'must-see']
  },
  {
    id: 'retiro-park',
    name: 'Retiro Park (Parque del Buen Retiro)',
    category: 'Park',
    shortDescription: 'A vast and magnificent park, perfect for strolling, boating, and enjoying outdoor art.',
    longDescription: 'Once belonging to the Spanish Monarchy, Retiro Park is now a public green oasis in the heart of Madrid. It features a large artificial lake, the Crystal Palace, beautiful fountains, and numerous sculptures.',
    imageUrl: 'https://images.unsplash.com/photo-1590155109069-041279810591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', // Replace
    address: 'Plaza de la Independencia, 7, 28001 Madrid',
    hours: 'Usually open from dawn till dusk.',
    website: 'https://www.esmadrid.com/en/tourist-information/parque-del-retiro',
    tags: ['outdoors', 'nature', 'boating', 'crystal palace', 'free']
  },
  {
    id: 'royal-palace',
    name: 'Royal Palace of Madrid (Palacio Real)',
    category: 'Palace',
    shortDescription: 'The official residence of the Spanish Royal Family, though now primarily used for state ceremonies.',
    longDescription: 'With over 3,000 rooms, the Royal Palace of Madrid is one of the largest functioning palaces in Europe. Visitors can tour lavish staterooms, the armory, and the royal pharmacy.',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', // Replace
    address: 'C. de Bailén, s/n, 28071 Madrid',
    hours: 'Varies by season, check website. Usually 10am-6pm or 7pm.',
    website: 'https://www.patrimonionacional.es/visita/palacio-real-de-madrid',
    tags: ['history', 'royalty', 'architecture', 'ceremonial']
  },
  // TODO: Add more sights based on your old "Sightseeing" section
  // Examples: Plaza Mayor, Puerta del Sol, Reina Sofia Museum, Thyssen-Bornemisza Museum,
  // Temple of Debod, Gran Vía, Santiago Bernabéu Stadium (if considered a sight)
];
