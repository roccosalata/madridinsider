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
    hours: 'Usually open from dawn till dusk. Oct. - May: 6am-10pm',
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
  {
    id: 'the-ages-of-madrid',
    name: 'The Ages of Madrid',
    category: 'Landmark', // Or perhaps a more general category if needed
    shortDescription: 'A journey through Madrid\'s architectural history, visiting buildings that represent different eras.',
    longDescription: 'Explore the historical evolution of Madrid by visiting key buildings like the Chapel of Santa María de la Antigua, Casa de los Lujanes, the Monastery of the Descalzas Reales, Plaza Mayor, El Prado museum, the Bank of Spain, and the Cybele Palace.',
    website: 'https://www.esmadrid.com/' // Placeholder
  },
  {
    id: 'monumental-madrid',
    name: 'Monumental Madrid',
    category: 'Landmark', // Or similar
    shortDescription: 'A virtual tour highlighting the historical evolution of Madrid through its significant buildings and monuments.',
    longDescription: 'Discover Madrid\'s rich past and its blend of tradition and avant-garde through a look at its most important historical buildings and monuments.',
    website: 'https://www.esmadrid.com/' // Placeholder
  },
  {
    id: 'basilica-de-san-francisco',
    name: 'Basilica de San Francisco el Grande',
    category: 'Landmark', // Or 'Religious Site' if you add that category
    shortDescription: 'A basilica representing the transition from baroque to neoclassicism, known for its impressive copula.',
    address: 'Plaza de San Francisco el Grande, S/N',
    hours: 'Tuesday-Saturday: 11am-12:30pm & 4pm-6:30pm, Friday & Saturday: Late (Tel. 913-653-800)',
  },
  {
    id: 'catedral-de-la-almudena',
    name: 'Catedral de Nuestra Señora de la Almudena',
    category: 'Landmark', // Or 'Religious Site'
    shortDescription: 'The main cathedral of Madrid, located next to the Royal Palace.',
    address: 'Bailen, S/N',
    hours: '9am-9pm (Tel. 915-422-200)',
  },
  {
    id: 'plaza-mayor',
    name: 'Plaza Mayor',
category: 'Square',
    shortDescription: 'A historic main square with porticoes, featuring Casa de la Panaderia and Casa de la Carniceria.',
    address: 'Puerta del Sol (Metro: Sol / La Latina)', // Using provided nearby reference
    longDescription: 'Built between 1617 and 1919, Plaza Mayor is a central hub in Madrid\'s history, marked by its distinctive porticoes and important buildings like the Casa de la Panaderia and Casa de la Carniceria. A statue of Philip III stands in the center.',
tags: ['historic', 'square', 'landmark']
  },
  {
    id: 'el-rastro',
    name: 'El Rastro',
    category: 'Landmark', // Or 'Market' if added
    shortDescription: 'Madrid\'s traditional open-air flea market, offering bargains and antiques.',
    address: 'Ribera de Curtidores & Aledaños',
    hours: 'Every Sunday morning. Shops also open on working days.',
tags: ['market', 'flea market', 'shopping', 'sunday']
  },
  {
    id: 'teatro-real',
    name: 'Teatro Real (Royal Theatre)',
    category: 'Landmark', // Or 'Theater'
    shortDescription: 'A neoclassical opera house built in 1850 and rebuilt in 1997.',
    address: 'Plaza de Oriente, S/N',
    hours: 'Visits: Tuesday-Friday: 1pm, Saturdays, Sundays & Holidays: 11:30am-1:30pm. Groups: By Appointment (Tel. 915-160-660)',
    website: 'https://www.teatroreal.es/' // Assuming this is the official site
  },
  {
    id: 'faro-de-moncloa',
    name: 'Faro de Moncloa',
    category: 'Viewpoint',
    shortDescription: 'A viewpoint offering a general view of Madrid from a height of 92m.',
    address: 'Confluencia de la Av. de los Reyes Catolicos con La Pl. del Arco de la Victoria',
    hours: '10am-2pm & 5pm-7pm, Saturdays & Sundays: 10:30am-5:30pm. Closed on Mondays (Tel. 915-448-104)',
  },
  // TODO: Add more sights based on your old "Sightseeing" section
  {
    id: 'atocha-station-greenhouse',
    name: 'Greenhouse in Atocha Station',
    category: 'Landmark',
    shortDescription: 'A pleasant area within Atocha Station, ideal for resting, located near the ART WALK.',
    address: 'Glorieta de Atocha, S/N',
    tags: ['landmark', 'transport', 'rest']
  },
  {
    id: 'el-capricho-park',
    name: 'El Capricho',
    category: 'Garden',
    shortDescription: 'A romantic 18th century garden with a French flavor, considered one of Madrid\'s hidden treasures.',
    address: 'Alameda de Osuna',
    longDescription: 'This Baroque garden features a number of squares and fountains and offers unexpected delights to visitors.',
    tags: ['garden', 'romantic', 'historic', 'hidden gem']
  },
  {
    id: 'crystal-palace-arganzuela',
    name: 'Crystal Palace de la Arganzuela',
    category: 'Park',
    shortDescription: 'An 8,400 square meter space that feels like a huge greenhouse.',
    address: 'Paseo de la Chopera, 10',
    hours: 'Sat., Sun. & Holiday: 11am-9pm / Closed Mon. (Tel. 915-886-137)',
    tags: ['park', 'greenhouse']
  },
 {
    id: 'estufa-fria',
    name: 'Estufa Fria / Green House',
    category: 'Garden',
    shortDescription: 'A habitat showcasing plants from the Madrid area with ongoing and temporary exhibitions.',
    hours: 'Tues. - Sun.: 10am-2pm & 5pm-9pm (Tel. 917-210-079)',
    tags: ['garden', 'plants', 'exhibition']
  },
 {
    id: 'jardines-campo-del-moro',
    name: 'Jardines del Campo del Moro (Palacio Real)',
    category: 'Garden',
    shortDescription: 'Romantic gardens surrounding the Royal Palace, designed in the English landscape style.',
    longDescription: 'These gardens feature two ornamental fountains, Los Tritones (The Newts) and Las Conchas (The Shells), and offer broad avenues leading to the western facade of the Palace.',
    address: 'Paseo Virgen del Puerto',
    tags: ['garden', 'royal palace', 'romantic']
  },
  {
    id: 'gardens-of-discovery',
    name: 'Gardens of Discovery',
    category: 'Garden',
    shortDescription: 'Gardens located in Plaza de Colon.',
    address: 'Plaza de Colon, s/n',
    tags: ['garden', 'square']
  },
 {
    id: 'jardines-de-sabatini',
    name: 'Jardines de Sabatini',
    category: 'Garden',
    shortDescription: 'Geometrically laid out gardens offering a magnificent view of the neighboring Royal Palace.',
    longDescription: 'Named after the Italian architect who designed them, these gardens occupy the area originally intended for the Palace stables.',
    address: 'Bailen',
    tags: ['garden', 'royal palace', 'view']
  },
 {
    id: 'casa-de-campo',
    name: 'Casa de Campo',
    category: 'Park',
    shortDescription: 'The most important open green space in Madrid, covering 1,800 hectares, perfect for relaxation and activities.',
    longDescription: 'Originally a hunting ground for King Philip II, Casa de Campo was opened to the public in 1931. It features a lake for boating, a cable car with city views, a theme park, and a zoo.',
    address: 'Casa de Campo Park',
    tags: ['park', 'outdoors', 'lake', 'cable car', 'zoo', 'theme park']
  },
  {
    id: 'juan-carlos-i-park',
    name: 'Juan Carlos I Park',
    category: 'Park',
    shortDescription: 'A park offering various activities like train journeys, catamaran trips, kite flying, and fishing.',
    address: 'Glorieta de Don Juan de Borbon, S/N',
    hours: 'Activities: Tuesday to Friday in the evening. Saturdays, Sundays and public holidays in the morning and afternoon.',
    tags: ['park', 'activities', 'family-friendly']
  },
  {
    id: 'berlin-park',
    name: 'Berlin Park',
    category: 'Park',
    shortDescription: 'A park located in Plaza Virgen de Guadalupe.',
    address: 'Plaza Virgen de Guadalupe, s/n',
    tags: ['park']
  },
 {
    id: 'dehesa-de-la-villa-park',
    name: 'Dehesa de la Villa Park',
    category: 'Park',
    shortDescription: 'A park located on Dehesa de la Villa Road.',
    address: 'Dehesa de la Villa Road',
    tags: ['park']
  },
 {
    id: 'enrique-d-almonte',
    name: 'Enrique D\' Almonte',
    category: 'Park',
    shortDescription: 'A park area.',
    address: 's/n',
    tags: ['park']
  },
 {
    id: 'parque-del-oeste',
    name: 'Parque del Oeste / West Park',
    category: 'Park',
    shortDescription: 'An English landscape style garden designed by Cecilio Rodriguez.',
    address: 'Paseo del Pintor Rosales, S/N',
    tags: ['park', 'garden']
  },
 {
    id: 'royal-botanical-gardens',
    name: 'Royal Botanical Gardens',
    category: 'Garden',
    shortDescription: 'Part of the historical site of Madrid of the Bourbons, an example of Enlightenment-era monarchy gardens.',
    address: 'Pl. de Murillo, 2',
    hours: '10am-Sunset (Tel. 914-203-017)',
    tags: ['garden', 'historic', 'botanical']
  },
  // Examples: Plaza Mayor, Puerta del Sol, Reina Sofia Museum, Thyssen-Bornemisza Museum,
  // Temple of Debod, Gran Vía, Santiago Bernabéu Stadium (if considered a sight)
];
