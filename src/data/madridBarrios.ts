
export interface Barrio {
  name: string;
  description: string;
  character: string;
  priceLevel: 'Very Low' | 'Low' | 'Medium' | 'High' | 'Very High';
  safety: string;
  bestFor: string[];
  metroStations: string[];
  highlights: string[];
  warnings?: string[];
}

export const madridBarrios: Barrio[] = [
  {
    name: "Arganzuela",
    description: "An old, traditionally working class area in the South of the city with very reasonable rents, but not very attractive from the touristy point of view.",
    character: "Traditional working class, affordable, residential",
    priceLevel: "Low",
    safety: "Generally safe, residential area",
    bestFor: ["Budget living", "Authentic local life", "Young professionals starting out"],
    metroStations: ["Delicias", "Legazpi"],
    highlights: ["Very affordable rent", "Traditional Madrid atmosphere", "Good transport connections", "Local markets"]
  },
  {
    name: "Barrio del Pilar",
    description: "A residential area with reasonable rents and one of Madrid's few shopping malls/centers 'La Vaguada.'",
    character: "Suburban residential, family-oriented, quiet",
    priceLevel: "Medium",
    safety: "Very safe, family area",
    bestFor: ["Families", "Shopping", "Quiet living", "Budget-conscious residents"],
    metroStations: ["Barrio del Pilar"],
    highlights: ["La Vaguada shopping center", "Family-friendly", "Affordable housing", "Good schools nearby"]
  },
  {
    name: "Centro",
    description: "Attractive for students who want to live their Madrid experience to the fullest, with cultural activities, nightlife and tourist attractions, plus enormous number of restaurants.",
    character: "Historic, vibrant, tourist-central, culturally rich",
    priceLevel: "High",
    safety: "Generally safe but watch for pickpockets",
    bestFor: ["Students", "Culture enthusiasts", "First-time visitors", "Nightlife lovers"],
    metroStations: ["Sol", "Callao", "Opera", "La Latina"],
    highlights: ["Historic buildings", "Cultural activities", "Nightlife", "Restaurants", "Tourist attractions", "Classical architecture"]
  },
  {
    name: "Chamartín",
    description: "A well communicated area with prices that range from medium to high.",
    character: "Business district, well-connected, upscale residential",
    priceLevel: "High",
    safety: "Very safe, business area",
    bestFor: ["Business professionals", "Train travelers", "Upper-middle class families"],
    metroStations: ["Alfonso XII", "Prosperidad", "República Argentina"],
    highlights: ["Excellent transport connections", "Business district", "Modern buildings", "Train station proximity"]
  },
  {
    name: "Chamberí",
    description: "A typical student area, very central and well communicated, with lots of old apartments, most of which have been renovated recently.",
    character: "Student-friendly, central, renovated historic buildings",
    priceLevel: "Medium",
    safety: "Very safe, well-patrolled",
    bestFor: ["Students", "Young professionals", "Those wanting central location"],
    metroStations: ["Alonso Cano", "Bilbao", "Iglesia"],
    highlights: ["Central location", "Renovated apartments", "Student atmosphere", "Good transport", "Local restaurants"]
  },
  {
    name: "Chueca",
    description: "Once a refuge for 'public sinners' and drug addicts, now one of Europe's finest gay quarters and Madrid's coolest neighborhood. A focal point for the gay community with diverse attractions.",
    character: "Trendy, diverse, LGBTQ+ friendly, sophisticated, welcoming",
    priceLevel: "High",
    safety: "Very safe and welcoming to all",
    bestFor: ["LGBTQ+ community", "Trendy lifestyle", "Design enthusiasts", "Diverse dining"],
    metroStations: ["Chueca", "Gran Vía"],
    highlights: ["Gay-friendly atmosphere", "Designer shops", "Diverse restaurants", "Welcoming plaza", "Chic wine bars", "Alternative to exclusive venues"]
  },
  {
    name: "Las Cortes",
    description: "Plenty of bars and restaurants around these parts, but they're on the pricey side - perhaps thanks to the parliament having its home there.",
    character: "Political center, upscale dining, governmental",
    priceLevel: "High",
    safety: "Very safe, government area",
    bestFor: ["Government workers", "Fine dining", "Business meetings", "Political interest"],
    metroStations: ["Sevilla", "Antón Martín"],
    highlights: ["Spanish Parliament", "Upscale restaurants", "Political atmosphere", "Central location"]
  },
  {
    name: "Cuatro Caminos / Tetuán",
    description: "Cheap and not far from el Parque del Retiro, well communicated. However, being relatively inexpensive, it's home to many immigrants and can be conflictive, particularly at night.",
    character: "Multicultural, affordable, working class, diverse",
    priceLevel: "Low",
    safety: "Exercise caution at night, generally safe during day",
    bestFor: ["Budget living", "Multicultural experience", "Students", "Young immigrants"],
    metroStations: ["Cuatro Caminos", "Tetuán"],
    highlights: ["Very affordable", "Near Retiro Park", "Good transport", "Multicultural food"],
    warnings: ["Can be conflictive at night", "Less tourist-friendly"]
  },
  {
    name: "Fuencarral",
    description: "To the North of Madrid, not central, but prices are not terribly high, and it is a safe area. Not far from Barrio del Pilar.",
    character: "Suburban, safe, residential, northern location",
    priceLevel: "Medium",
    safety: "Very safe area",
    bestFor: ["Families", "Safe living", "Moderate budgets", "Suburban lifestyle"],
    metroStations: ["Fuencarral", "Herrera Oria"],
    highlights: ["Safe environment", "Reasonable prices", "Residential feel", "Family-friendly"]
  },
  {
    name: "Gran Vía",
    description: "Madrid's main street lined with bars, restaurants and shops. Once a financial district, now showcasing big-name stores, theaters, and architectural gems.",
    character: "Commercial hub, tourist center, architectural showcase",
    priceLevel: "High",
    safety: "Safe but crowded, watch for pickpockets",
    bestFor: ["Shopping", "Theater goers", "Architecture lovers", "Tourist experience"],
    metroStations: ["Gran Vía", "Callao", "Plaza de España"],
    highlights: ["Main shopping street", "Historic architecture", "Movie theaters", "Museo Chicote bar", "Big-name stores"]
  },
  {
    name: "Hortaleza",
    description: "A little far from Parque del Retiro but good for students with families looking for residential area - apartments usually have garages and swimming pools.",
    character: "Residential, family-oriented, suburban amenities",
    priceLevel: "Medium",
    safety: "Very safe, residential",
    bestFor: ["Families with children", "Students with families", "Those wanting amenities"],
    metroStations: ["Arturo Soria", "Mar de Cristal"],
    highlights: ["Apartments with garages", "Swimming pools", "Residential atmosphere", "Family-friendly", "Calle Arturo Soria shopping"]
  },
  {
    name: "Huertas",
    description: "The party zone. Streets at night are full of promoters offering free drinks. Live here at your peril - you'll never get any sleep. Weekend crush of locals and tourists.",
    character: "Party central, nightlife hub, touristy, energetic",
    priceLevel: "High",
    safety: "Safe but very noisy, crowded at night",
    bestFor: ["Party lovers", "Nightlife enthusiasts", "Young tourists", "Bar hoppers"],
    metroStations: ["Antón Martín", "Atocha"],
    highlights: ["Intense nightlife", "Historic venues", "Sherry bars", "Flamenco venues", "Theater district"],
    warnings: ["Very noisy at night", "Tourist-heavy", "Expensive drinks"]
  },
  {
    name: "La Latina",
    description: "Trendy Spanish neighborhood perfect for Sunday afternoons when Madrid's young crowd gets out for liquid refreshments. Summer bongo drummers and cerveza culture.",
    character: "Trendy, artistic, bohemian, festive atmosphere",
    priceLevel: "Medium",
    safety: "Generally safe, lively area",
    bestFor: ["Sunday socializing", "Artistic types", "30+ crowd", "Weekend activities"],
    metroStations: ["La Latina", "Tirso de Molina"],
    highlights: ["Sunday afternoon scene", "Bohemian elegance", "Artistic venues", "El Rastro market", "Traditional tapas", "Plaza de la Cebada"]
  },
  {
    name: "Lavapiés",
    description: "The most international neighborhood in Madrid. Despite appearances, home to some of the best Chinese, Indian and Moroccan restaurants. Unique international blend populated by immigrants.",
    character: "International, multicultural, chaotic, authentic",
    priceLevel: "Low",
    safety: "Exercise caution, reputation for petty crime",
    bestFor: ["International food", "Cultural diversity", "Budget dining", "Alternative culture"],
    metroStations: ["Lavapiés", "Embajadores"],
    highlights: ["International restaurants", "Ethnic cuisine", "Calle Argumosa terrazas", "Alternative theaters", "Cultural centers", "Multicultural atmosphere"],
    warnings: ["Avoid looking like tourist", "Pickpocketing common", "Some consider dangerous"]
  },
  {
    name: "Malasaña",
    description: "Known for nightlife and young crowd, offers grungy vibe. Full of rockers, metal heads and punks. Love it or hate it neighborhood with impressive quantity of bars and music venues.",
    character: "Grungy, alternative, youthful, energetic, rowdy",
    priceLevel: "Medium",
    safety: "Generally safe but can be rowdy",
    bestFor: ["Young nightlife", "Alternative music", "Students", "Party atmosphere"],
    metroStations: ["Tribunal", "Malasaña", "San Bernardo"],
    highlights: ["Alternative nightlife", "Music venues", "Plaza Dos de Mayo", "Student atmosphere", "Movida history", "Record shops", "Tranquil by day"]
  },
  {
    name: "Moncloa",
    description: "One of the areas favored by students in the capital. Large number of university and postgraduate students live and socialize there. Very well communicated thanks to the Moncloa bus terminal.",
    character: "University area, student-focused, well-connected",
    priceLevel: "Medium",
    safety: "Very safe, university area",
    bestFor: ["University students", "Postgraduate students", "Academic life", "Budget-conscious students"],
    metroStations: ["Moncloa", "Ciudad Universitaria"],
    highlights: ["University proximity", "Student community", "Bus terminal", "Academic atmosphere", "Student prices"]
  },
  {
    name: "Opera",
    description: "Home to the Royal Palace, quite touristy. Great for a stroll, but restaurants and cafes will hit your wallet hard.",
    character: "Royal, touristy, expensive, historic",
    priceLevel: "Very High",
    safety: "Very safe, tourist area",
    bestFor: ["Royal Palace visits", "Historic interest", "Luxury experience", "Tourist attractions"],
    metroStations: ["Opera", "Santo Domingo"],
    highlights: ["Royal Palace", "Historic architecture", "Tourist attractions", "Upscale dining"],
    warnings: ["Very expensive restaurants", "Tourist prices"]
  },
  {
    name: "Prado",
    description: "Mainly expensive hotels line the streets - and of course Madrid's most famous art museum, the Prado. Great for Sunday wander as you head to the Retiro.",
    character: "Museum district, upscale, cultural, tourist-focused",
    priceLevel: "Very High",
    safety: "Very safe, museum area",
    bestFor: ["Art lovers", "Museum visits", "Luxury stays", "Cultural tourism"],
    metroStations: ["Atocha", "Banco de España"],
    highlights: ["Prado Museum", "Art triangle", "Luxury hotels", "Cultural venues", "Retiro Park access"]
  },
  {
    name: "Prosperidad",
    description: "Near Barrio Salamanca and quite reasonably priced, except for new buildings which tend to be more expensive.",
    character: "Residential, accessible, mixed pricing",
    priceLevel: "Medium",
    safety: "Very safe area",
    bestFor: ["Moderate budgets", "Residential living", "Good transport access"],
    metroStations: ["Avenida de América", "Alfonso XIII", "Cartagena"],
    highlights: ["Near Salamanca district", "Good transport", "Reasonable prices", "Residential feel"]
  },
  {
    name: "Retiro",
    description: "Very popular among students, pleasant and near the Parque del Retiro. Expensive, particularly main streets, but possible to find reasonable rents in large, refurbished apartments.",
    character: "Student-popular, park-adjacent, upscale residential",
    priceLevel: "High",
    safety: "Very safe, upscale area",
    bestFor: ["Students", "Park lovers", "Upscale living", "Museum access"],
    metroStations: ["Retiro", "O'Donnell"],
    highlights: ["Retiro Park access", "Student community", "Refurbished apartments", "Museum proximity", "Pleasant atmosphere"]
  },
  {
    name: "Salamanca",
    description: "The posh area for fur coats and designer threads. Strict dress code nightlife. One of the best areas due to central location and Retiro proximity, but most expensive.",
    character: "Luxury, fashionable, upscale, exclusive",
    priceLevel: "Very High",
    safety: "Very safe, upscale area",
    bestFor: ["Luxury shopping", "High-end lifestyle", "Business professionals", "Exclusive nightlife"],
    metroStations: ["Avenida de América", "Goya", "Serrano"],
    highlights: ["Designer shopping", "Luxury boutiques", "High-end restaurants", "Central location", "Retiro Park", "Exclusive nightlife"],
    warnings: ["Most expensive area", "Strict dress codes"]
  },
  {
    name: "Sol",
    description: "The geographical and tourist center of Madrid and Spain. Unfortunately notorious for street prostitution and pickpockets, currently blighted by construction. Major hub of activity.",
    character: "Tourist central, bustling, commercial, crowded",
    priceLevel: "High",
    safety: "Watch for pickpockets and street issues",
    bestFor: ["Tourist access", "Central location", "Transport hub", "Shopping"],
    metroStations: ["Sol"],
    highlights: ["Puerta del Sol plaza", "Geographic center", "Shopping access", "Transport hub", "Tourist attractions"],
    warnings: ["Pickpockets common", "Street prostitution", "Construction work", "Very crowded"]
  }
];

export const getBarriosByPriceLevel = (priceLevel: Barrio['priceLevel']) => {
  return madridBarrios.filter(barrio => barrio.priceLevel === priceLevel);
};

export const getBarriosForStudents = () => {
  return madridBarrios.filter(barrio => 
    barrio.bestFor.some(purpose => 
      purpose.toLowerCase().includes('student') || 
      purpose.toLowerCase().includes('university')
    )
  );
};

export const getSafeBarrios = () => {
  return madridBarrios.filter(barrio => 
    barrio.safety.toLowerCase().includes('safe') || 
    barrio.safety.toLowerCase().includes('very safe')
  );
};
