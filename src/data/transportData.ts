
export interface TransportOption {
  type: 'Metro' | 'Bus' | 'Cercanías' | 'Taxi' | 'Bike' | 'Walking';
  name: string;
  description: string;
  costRange: string;
  when: string;
  tips: string[];
  officialWebsite?: string;
  mobileApp?: string;
}

export interface MetroLine {
  number: string;
  color: string;
  name: string;
  keyStops: string[];
  touristStops: string[];
}

export const transportOptions: TransportOption[] = [
  {
    type: 'Metro',
    name: 'Madrid Metro',
    description: 'Extensive underground railway system covering most of Madrid',
    costRange: '€1.50-€2.00 per trip',
    when: 'Daily 6:00-1:30 (2:30 Fri-Sat)',
    tips: [
      'Buy a 10-trip ticket (Metrobús) for savings',
      'Tourist Travel Pass available for unlimited travel',
      'Avoid rush hours (8-9am, 6-8pm)',
      'Most signs are in Spanish only',
      'Keep your ticket until you exit'
    ],
    officialWebsite: 'https://www.metromadrid.es',
    mobileApp: 'Metro Madrid Official App'
  },
  {
    type: 'Bus',
    name: 'EMT Madrid Buses',
    description: 'Comprehensive bus network including night buses',
    costRange: '€1.50 per trip',
    when: 'Daily 6:00-23:30, Night buses 23:45-6:00',
    tips: [
      'Same ticket as Metro (Metrobús)',
      'Bus stops show real-time arrivals',
      'Night buses (Búhos) run all night weekends',
      'Route maps available at stops',
      'Pay with contactless card or cash'
    ],
    officialWebsite: 'https://www.emtmadrid.es',
    mobileApp: 'EMT Madrid'
  },
  {
    type: 'Cercanías',
    name: 'Cercanías Madrid',
    description: 'Regional train network connecting Madrid with suburbs and nearby cities',
    costRange: '€1.70-€3.60 depending on zones',
    when: 'Daily 5:30-24:00',
    tips: [
      'Essential for airport connection (C1 line)',
      'Different ticket system from Metro',
      'Validate ticket before boarding',
      'Connects to Toledo, Segovia, and other cities',
      'More spacious than Metro'
    ],
    officialWebsite: 'https://www.renfe.com/es/en/cercanias',
    mobileApp: 'Renfe Cercanías'
  },
  {
    type: 'Taxi',
    name: 'Madrid Taxis',
    description: 'White taxis with red stripe, metered service',
    costRange: '€5-15 for city center trips',
    when: '24/7',
    tips: [
      'All official taxis are white with red stripe',
      'Use taxi stands or hail on street',
      'Airport supplement: €5.50',
      'Night supplement after 10pm',
      'Tipping not required but appreciated'
    ],
    mobileApp: 'MyTaxi, Uber available'
  },
  {
    type: 'Bike',
    name: 'BiciMAD',
    description: 'Public bike sharing system with electric bikes',
    costRange: '€2 for 30 minutes',
    when: '24/7',
    tips: [
      'Electric bikes make hills easier',
      'Helmet not required but recommended',
      'Download app to locate stations',
      'Annual pass available for residents',
      'Good for short trips and parks'
    ],
    officialWebsite: 'https://www.bicimad.com',
    mobileApp: 'BiciMAD'
  },
  {
    type: 'Walking',
    name: 'Walking',
    description: 'Madrid city center is very walkable',
    costRange: 'Free',
    when: 'Always',
    tips: [
      'Most tourist sights within walking distance',
      'Watch for pickpockets in tourist areas',
      'Siesta time (2-5pm) - many shops closed',
      'Evening paseo (stroll) is a local tradition',
      'Comfortable shoes essential'
    ]
  }
];

export const metroLines: MetroLine[] = [
  {
    number: '1',
    color: 'Light Blue',
    name: 'Pinar de Chamartín - Valdecarros',
    keyStops: ['Sol', 'Gran Vía', 'Tribunal', 'Iglesia'],
    touristStops: ['Sol', 'Gran Vía', 'Tribunal (Malasaña)']
  },
  {
    number: '2',
    color: 'Red',
    name: 'Cuatro Caminos - Las Rosas',
    keyStops: ['Sol', 'Ópera', 'Retiro', 'Banco de España'],
    touristStops: ['Sol', 'Ópera (Royal Palace)', 'Retiro (Park & Museums)']
  },
  {
    number: '3',
    color: 'Yellow',
    name: 'Villaverde Alto - Moncloa',
    keyStops: ['Sol', 'Callao', 'Plaza de España', 'Moncloa'],
    touristStops: ['Sol', 'Callao (Gran Vía)', 'Plaza de España']
  },
  {
    number: '5',
    color: 'Green',
    name: 'Alameda de Osuna - Casa de Campo',
    keyStops: ['Chueca', 'Gran Vía', 'La Latina', 'Embajadores'],
    touristStops: ['Chueca', 'Gran Vía', 'La Latina (Rastro market)']
  }
];

export const airportConnections = [
  {
    method: 'Metro Line 8',
    duration: '45-60 minutes',
    cost: '€4.50-€5.00',
    description: 'Direct metro connection to city center'
  },
  {
    method: 'Cercanías C1',
    duration: '30-40 minutes',
    cost: '€2.60',
    description: 'Train connection via Nuevos Ministerios'
  },
  {
    method: 'Express Bus',
    duration: '40-50 minutes',
    cost: '€5.00',
    description: 'Airport Express to Atocha station'
  },
  {
    method: 'Taxi',
    duration: '30-45 minutes',
    cost: '€30-40',
    description: 'Direct door-to-door service'
  }
];
