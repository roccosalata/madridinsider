// src/data/activitiesData.ts
export interface Activity {
  id: string; // Unique identifier (e.g., 'corral-moreria-flamenco', 'madrid-tapas-tour')
  name: string;
  type: 'Flamenco Show' | 'Theater' | 'Concert' | 'Guided Tour' | 'Cooking Class' | 'Workshop' | 'Sporting Event' | 'Festival'; // Add more as needed
  shortDescription: string;
  longDescription?: string;
  imageUrl?: string; // URL for an image
  location?: string; // General area or specific address
  duration?: string; // e.g., "Approx. 2 hours"
  website?: string; // Link to book or get more info
  priceRange?: string; // e.g., "€20-€50", "Free", "Varies"
  tags?: string[]; // e.g., ['traditional', 'music', 'dance', 'foodie', 'interactive']
}

export const activities: Activity[] = [
  {
    id: 'corral-moreria-flamenco',
    name: 'Corral de la Morería Flamenco Show',
    type: 'Flamenco Show',
    shortDescription: 'Experience authentic, world-renowned flamenco in one of Madrid\'s most historic "tablaos".',
    longDescription: 'Corral de la Morería is often considered the "cathedral of flamenco art" in Spain. It has hosted legendary artists and offers an intimate and powerful performance experience, often with dining options.',
    imageUrl: 'https://images.unsplash.com/photo-1604187351079-738501710468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', // Replace with a real, good image URL
    location: 'C. de la Moreria, 17, 28005 Madrid',
    website: 'https://www.corraldelamoreria.com/',
    priceRange: '€50+',
    tags: ['flamenco', 'traditional', 'dance', 'music', 'iconic', 'nightlife']
  },
  {
    id: 'madrid-tapas-tour',
    name: 'Madrid Tapas Walking Tour',
    type: 'Guided Tour',
    shortDescription: 'Discover Madrid\'s culinary scene by hopping between traditional tapas bars with a local guide.',
    longDescription: 'A tapas tour is a fantastic way to sample a variety of Spanish snacks and drinks while learning about the city\'s history and food culture. Many tours visit historic neighborhoods like La Latina or Huertas.',
    imageUrl: 'https://images.unsplash.com/photo-1558030000-464f59304387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', // Replace
    location: 'Various locations, often starting in central Madrid',
    duration: 'Approx. 3-4 hours',
    priceRange: '€60-€100',
    tags: ['foodie', 'tapas', 'walking tour', 'culinary', 'local experience']
  },
  {
    id: 'el-reton-musical',
    name: 'El Rey León (The Lion King) Musical',
    type: 'Theater',
    shortDescription: 'Enjoy the spectacular Broadway hit musical, "The Lion King," in Spanish at the Lope de Vega Theatre.',
    longDescription: 'This award-winning musical features stunning visuals, incredible puppetry, and Elton John\'s iconic music. A great option for families and theater lovers, performed in Spanish.',
    imageUrl: 'https://images.unsplash.com/photo-1596066180030-dba112997395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', // Replace
    location: 'Teatro Lope de Vega, Gran Vía, 57, 28013 Madrid',
    website: 'https://www.elreyleon.es/',
    priceRange: 'Varies, €30-€100+',
    tags: ['musical', 'theater', 'family-friendly', 'gran via', 'show']
  },
  // TODO: Add more activities based on your old "Arts & Entertainment" section
  // Examples: Other flamenco venues, cooking classes, concerts, specific tours (e.g., Bernabeu tour if not a "sight"),
  // language exchange events, specific festivals if relevant.
];
