
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
  safety?: string;
  detailedDescription?: string;
}

export const madridNeighborhoods: Neighborhood[] = [
  // Cool Neighborhoods
  {
    name: "La Castellana",
    district: "Various",
    description: "The backbone of the city with summer terrazas and smart clubs around Santiago Bernabeu stadium.",
    detailedDescription: "This street forms the backbone of the city. In the summer it is dotted with terrazas and chiringuitos. All year round it takes you north to a haven of smart, popular clubs and bars around Santiago Bernabeu stadium and Avenida de Brasil.",
    characteristics: ["Main thoroughfare", "Summer terrazas", "Smart clubs", "Stadium area"],
    bestFor: ["Upscale nightlife", "Summer dining", "Football fans", "Business district access"],
    keyAttractions: ["Santiago Bernabeu Stadium", "Avenida de Brasil bars", "Summer terrazas"],
    diningScene: "Upscale terrazas and chiringuitos, smart bars and restaurants",
    transportLinks: ["Metro Santiago Bernabeu", "Various lines along Castellana"],
    priceLevel: "Upscale",
    touristFriendly: true,
    nightlife: "Vibrant"
  },
  {
    name: "Chueca",
    district: "Centro",
    description: "Madrid's slickest neighborhood and heart of gay Madrid with swanky bars and sophisticated nightlife.",
    detailedDescription: "Once a drug and crime haven, this is now Madrid's slickest neighborhood, and the heart of gay Madrid. It gets packed with hunky men in tight shorts during June's Gay Pride festival. With swanky bars and cafes, this barrio is a sophisticated departure from other Madrid nightlife. A refuge for 'public sinners' in the 18th century and a shady haven for drug addicts in the 80's. Now Chueca is one of Europe's finest gay quarters, and currently counts as Madrid's coolest neighborhood.",
    characteristics: ["LGBTQ+ hub", "Trendy", "Fashionable", "Sophisticated", "Transformed area"],
    bestFor: ["LGBTQ+ travelers", "Fashion shopping", "Fine dining", "Sophisticated nightlife"],
    keyAttractions: ["Plaza de Chueca", "Gay Pride festival venue", "Fashion boutiques", "Swanky bars"],
    diningScene: "Sophisticated bars and cafes, from exclusive restaurants to diverse dining options",
    transportLinks: ["Metro Chueca (Line 5)", "Metro Gran Vía (Lines 1, 5)"],
    priceLevel: "Upscale",
    touristFriendly: true,
    nightlife: "Vibrant",
    safety: "Very safe and welcoming"
  },
  {
    name: "Huertas",
    district: "Centro", 
    description: "Theater and nightlife district packed with restaurants, bars, and weekend crowds.",
    detailedDescription: "This area heading down towards Paseo del Prado from Plaza Santa Ana is chock-full of theaters, restaurants and bars. On the weekends, the streets overflow with tourists and Madrileños alike. The party zone. Walk the streets at night and you'll be accosted by millions of PRs plying you with free drinks in exchange for your custom.",
    characteristics: ["Theater district", "Party zone", "Tourist crowds", "Weekend hotspot"],
    bestFor: ["Theater lovers", "Nightlife seekers", "Restaurant hopping", "Weekend parties"],
    keyAttractions: ["Plaza Santa Ana", "Numerous theaters", "Bars and restaurants", "Historic venues"],
    diningScene: "Packed with restaurants and bars, sherry bars, flamenco venues",
    transportLinks: ["Metro Antón Martín (Line 1)", "Metro Sevilla (Line 2)"],
    priceLevel: "Mid-range",
    touristFriendly: true,
    nightlife: "Legendary",
    safety: "Generally safe but crowded on weekends"
  },
  {
    name: "La Latina",
    district: "Centro",
    description: "Traditional meets contemporary with excellent terrazas and post-Rastro Sunday gatherings.",
    detailedDescription: "Home of some of Madrid's best summertime terrazas, caña-slinging bars and slick restaurants, La Latina is in the crossroads of traditional and contemporary Madrid. Many a Sunday has slipped (and been sipped) away in the post-Rastro gatherings in Plaza de la Cebada and San Andres. This trendy Spanish neighborhood is the place to head on a Sunday afternoon, when the whole of Madrid's young and funky crowd gets out on the street for some liquid refreshments.",
    characteristics: ["Traditional meets modern", "Sunday gatherings", "Terraza culture", "Post-Rastro crowds"],
    bestFor: ["Sunday socializing", "Traditional atmosphere", "Terraza dining", "Young crowd"],
    keyAttractions: ["El Rastro flea market", "Plaza de la Cebada", "Plaza San Andres", "Traditional bars"],
    diningScene: "Traditional tapas bars, terrazas, caña-slinging bars, slick restaurants",
    transportLinks: ["Metro La Latina (Line 5)", "Metro Tirso de Molina (Line 1)"],
    priceLevel: "Mid-range",
    touristFriendly: true,
    nightlife: "Vibrant",
    safety: "Generally safe during day, be cautious at night"
  },
  {
    name: "Lavapiés",
    district: "Centro",
    description: "Diverse, international neighborhood with alternative theaters, great bars, and multicultural dining.",
    detailedDescription: "Home to many of Madrid's alternative theaters and some of its best bars, Lavapies is a diverse, funky neighborhood that's equally good by day or by night. In the summer, terrazas buzz and the streets are teeming. The most international neighborhood in Madrid. Despite appearances, some of the best Chinese, Indian and Moroccan restaurants call this barrio home. Populated by immigrants, many consider it a 'dangerous area', but residents of the hood often laugh at this designation.",
    characteristics: ["Multicultural", "Alternative scene", "International", "Diverse", "Artistic"],
    bestFor: ["International food", "Alternative culture", "Diverse community", "Affordable dining"],
    keyAttractions: ["Alternative theaters", "International restaurants", "Calle Argumosa terrazas", "Cultural diversity"],
    diningScene: "International cuisine (Chinese, Indian, Moroccan, Arabic, Senegalese), local bars, ethnic restaurants",
    transportLinks: ["Metro Lavapiés (Line 3)", "Metro Embajadores (Lines 3, 5)"],
    priceLevel: "Budget",
    touristFriendly: true,
    nightlife: "Vibrant",
    safety: "Be aware of pickpocketing and mugging, don't look like a tourist"
  },
  {
    name: "Malasaña",
    district: "Centro",
    description: "Grungy, alternative neighborhood with movida bars, live music, and young crowd energy.",
    detailedDescription: "This less-touristy part of Madrid is home to many of the bars of the movida, the post-Franco fiesta frenzy that launched some of Spain's most famous musicians and artists. A few alternative theaters serve up mostly comedy and some bars here feature live music. Known for its nightlife and very young crowd, Malasaña offers a more grungy vibe than frenetic Chueca. Stocked full of rockers, metal heads and punks.",
    characteristics: ["Alternative culture", "Movida heritage", "Grungy vibe", "Young crowd", "Music scene"],
    bestFor: ["Alternative nightlife", "Live music", "Young travelers", "Historical movida sites"],
    keyAttractions: ["Plaza Dos de Mayo", "Movida bars", "Alternative theaters", "Live music venues"],
    diningScene: "Alternative bars, live music venues, interesting restaurants, great terrazas",
    transportLinks: ["Metro Tribunal (Line 1)", "Metro Noviciado (Lines 2, 10)", "Metro San Bernardo (Lines 2, 4)"],
    priceLevel: "Budget",
    touristFriendly: false,
    nightlife: "Legendary",
    safety: "Generally safe, very crowded at night"
  },
  
  // Areas/Barrios for Living
  {
    name: "Arganzuela",
    district: "Arganzuela",
    description: "Traditional working-class area in the south with reasonable rents but limited tourist attractions.",
    detailedDescription: "Is in the South of the city. It is an old, traditionally working class area with very reasonable rents, but not very attractive from the touristy point of view.",
    characteristics: ["Working class", "Affordable", "South Madrid", "Residential"],
    bestFor: ["Budget housing", "Local experience", "Affordable living", "Working professionals"],
    keyAttractions: ["Local markets", "Residential atmosphere", "Affordable shopping"],
    diningScene: "Local bars and restaurants, traditional working-class establishments",
    transportLinks: ["Metro Delicias", "Metro Legazpi"],
    priceLevel: "Budget",
    touristFriendly: false,
    nightlife: "Quiet"
  },
  {
    name: "Barrio del Pilar",
    district: "Fuencarral-El Pardo",
    description: "Residential area with reasonable rents and La Vaguada shopping center.",
    detailedDescription: "Is a residential area, not highly attractive but with reasonable rents and one of Madrid's few shopping malls/centers 'La Vaguada.'",
    characteristics: ["Residential", "Shopping mall", "Affordable", "Family-friendly"],
    bestFor: ["Families", "Shopping", "Affordable housing", "Residential living"],
    keyAttractions: ["La Vaguada shopping center", "Residential neighborhoods"],
    diningScene: "Shopping center restaurants, local family establishments",
    transportLinks: ["Metro Barrio del Pilar"],
    priceLevel: "Budget",
    touristFriendly: false,
    nightlife: "Quiet"
  },
  {
    name: "Centro",
    district: "Centro",
    description: "Historic center perfect for students wanting the full Madrid experience with culture and nightlife.",
    detailedDescription: "Could be attractive for students who want to live their Madrid experience to the fullest, given that here you can find a lot of cultural activities, night life and tourist attractions, along with an enormous number of restaurants. A large number of classical buildings are currently being refurbished, adding to the flavor of the old quarter.",
    characteristics: ["Historic center", "Cultural hub", "Student area", "Renovated buildings"],
    bestFor: ["Students", "Culture seekers", "Nightlife", "Full Madrid experience"],
    keyAttractions: ["Tourist attractions", "Classical buildings", "Cultural activities", "Restaurants"],
    diningScene: "Enormous number of restaurants, tourist and local establishments",
    transportLinks: ["Metro Sol", "Metro Callao"],
    priceLevel: "Mid-range",
    touristFriendly: true,
    nightlife: "Legendary"
  },
  {
    name: "Chamartín",
    district: "Chamartín",
    description: "Well-connected area with medium to high prices near business district.",
    detailedDescription: "A well communicated area, with prices that range from medium to high.",
    characteristics: ["Well connected", "Business area", "Transport hub", "Mixed pricing"],
    bestFor: ["Business travelers", "Good transport links", "Professional area"],
    keyAttractions: ["Chamartín station", "Business district", "Transport connections"],
    diningScene: "Business restaurants, professional dining establishments",
    transportLinks: ["Metro Alfonso XII", "Metro Prosperidad", "Metro República Argentina", "Chamartín train station"],
    priceLevel: "Upscale",
    touristFriendly: false,
    nightlife: "Moderate"
  },
  {
    name: "Chamberí",
    district: "Chamberí",
    description: "Popular student area that's central, well-connected, with renovated old apartments.",
    detailedDescription: "Another typical student area. It is a very central area and well communicated, with lots of old apartments, most of which have been renovated recently.",
    characteristics: ["Student area", "Central location", "Renovated apartments", "Well connected"],
    bestFor: ["Students", "Central living", "Renovated housing", "Good transport"],
    keyAttractions: ["Central location", "Renovated architecture", "Student life"],
    diningScene: "Student-friendly restaurants, local neighborhood bars",
    transportLinks: ["Metro Alonso Cano", "Metro Bilbao", "Metro Iglesia"],
    priceLevel: "Mid-range",
    touristFriendly: false,
    nightlife: "Moderate"
  },
  {
    name: "Sol",
    district: "Centro",
    description: "Geographic and tourist center of Madrid and Spain, major meeting point and shopping area.",
    detailedDescription: "The geographical - and tourist - center of Madrid and Spain. Sol is unfortunately notorious for street prostitution and pickpockets, as well as being currently blighted by roadworks / construction. Puerta del Sol (an enormous plaza) is a major hub of activity. Locals often use it as a meeting place when unsure which direction the day will take.",
    characteristics: ["Geographic center", "Tourist hub", "Shopping area", "Meeting point"],
    bestFor: ["Tourists", "Shopping", "Central meeting point", "Transport hub"],
    keyAttractions: ["Puerta del Sol", "Shopping streets", "Central plaza", "Historic center"],
    diningScene: "Tourist restaurants, international chains, traditional establishments",
    transportLinks: ["Metro Sol (Lines 1, 2, 3)", "Cercanías Sol"],
    priceLevel: "Mid-range",
    touristFriendly: true,
    nightlife: "Vibrant",
    safety: "Watch for pickpockets and street crime"
  },
  {
    name: "Salamanca",
    district: "Salamanca",
    description: "Posh area with designer shopping, strict dress codes, and proximity to Retiro Park.",
    detailedDescription: "The posh area, where you can pick up a fur coat or some designer threads. Expect typically Spanish nightlife complete with a strict dress code policy. Possibly one of the best areas in Madrid due to its central location and close proximity to the Parque del Retiro, but it is also one of the most expensive areas of the city.",
    characteristics: ["Posh area", "Designer shopping", "Expensive", "Retiro proximity"],
    bestFor: ["Luxury shopping", "Upscale living", "Designer fashion", "High-end dining"],
    keyAttractions: ["Designer boutiques", "Luxury shops", "Upscale restaurants", "Retiro Park access"],
    diningScene: "High-end restaurants, luxury establishments, strict dress code venues",
    transportLinks: ["Metro Avenida de América", "Metro Goya", "Metro Serrano"],
    priceLevel: "Luxury",
    touristFriendly: true,
    nightlife: "Moderate",
    safety: "Very safe, upscale area"
  },
  {
    name: "Retiro",
    district: "Retiro",
    description: "Pleasant student-popular area near the park, expensive on main streets but with reasonable options.",
    detailedDescription: "Is another area that is very popular among students. It is a pleasant and near the Parque del Retiro. It is expensive, particularly the main streets, although it is possible to find reasonable rents in large, refurbished apartments.",
    characteristics: ["Student popular", "Pleasant area", "Park proximity", "Variable pricing"],
    bestFor: ["Students", "Park lovers", "Pleasant living", "Refurbished apartments"],
    keyAttractions: ["Retiro Park", "Pleasant neighborhoods", "Refurbished buildings"],
    diningScene: "Student-friendly options, park-side cafes, varied restaurants",
    transportLinks: ["Metro Retiro", "Metro O'Donnell"],
    priceLevel: "Upscale",
    touristFriendly: true,
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

export const getCoolNeighborhoods = () => {
  return madridNeighborhoods.filter(n => 
    ['La Castellana', 'Chueca', 'Huertas', 'La Latina', 'Lavapiés', 'Malasaña'].includes(n.name)
  );
};

export const getLivingAreaBarrios = () => {
  return madridNeighborhoods.filter(n => 
    ['Arganzuela', 'Barrio del Pilar', 'Centro', 'Chamartín', 'Chamberí', 'Sol', 'Salamanca', 'Retiro'].includes(n.name)
  );
};
