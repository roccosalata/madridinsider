
export interface TouristOffice {
  name: string;
  address: string;
  hours: string;
  phone: string;
  services: string[];
  languages: string[];
}

export interface UsefulApp {
  name: string;
  category: string;
  description: string;
  platforms: string[];
  cost: 'Free' | 'Paid' | 'Freemium';
  rating: number;
  keyFeatures: string[];
}

export interface SafetyTip {
  category: string;
  tips: string[];
}

export const touristOffices: TouristOffice[] = [
  {
    name: "Madrid Visitor Center",
    address: "Plaza Mayor, 27, 28012 Madrid",
    hours: "Daily 9:30-20:30",
    phone: "+34 91 578 7810",
    services: ["Maps", "Event information", "Transport passes", "Tour bookings"],
    languages: ["Spanish", "English", "French", "German"]
  },
  {
    name: "Tourist Information Adolfo Suárez Madrid-Barajas Airport",
    address: "Terminal 2 & 4, Madrid Airport",
    hours: "Daily 8:00-20:00",
    phone: "+34 91 305 8656",
    services: ["City maps", "Transport info", "Hotel assistance"],
    languages: ["Spanish", "English"]
  },
  {
    name: "Atocha Tourist Information",
    address: "Atocha Railway Station",
    hours: "Monday-Friday 9:00-20:00, Weekends 9:00-14:00",
    phone: "+34 91 506 6969",
    services: ["Transport connections", "Day trip information"],
    languages: ["Spanish", "English"]
  }
];

export const usefulApps: UsefulApp[] = [
  {
    name: "Metro Madrid",
    category: "Transportation",
    description: "Official Madrid Metro app with maps and real-time info",
    platforms: ["iOS", "Android"],
    cost: "Free",
    rating: 4.2,
    keyFeatures: ["Offline maps", "Route planning", "Real-time delays", "Station information"]
  },
  {
    name: "EMT Madrid",
    category: "Transportation",
    description: "Official bus network app with routes and schedules",
    platforms: ["iOS", "Android"],
    cost: "Free",
    rating: 4.0,
    keyFeatures: ["Real-time bus arrivals", "Route planning", "Bus stop locator"]
  },
  {
    name: "BiciMAD",
    category: "Transportation",
    description: "Bike sharing system for Madrid",
    platforms: ["iOS", "Android"],
    cost: "Free",
    rating: 3.8,
    keyFeatures: ["Station locator", "Bike availability", "Payment system"]
  },
  {
    name: "MyTaxi (FREE NOW)",
    category: "Transportation",
    description: "Taxi booking app",
    platforms: ["iOS", "Android"],
    cost: "Free",
    rating: 4.1,
    keyFeatures: ["GPS tracking", "Cashless payment", "Fare estimates"]
  },
  {
    name: "Google Translate",
    category: "Language",
    description: "Essential for Spanish translation",
    platforms: ["iOS", "Android"],
    cost: "Free",
    rating: 4.5,
    keyFeatures: ["Camera translation", "Offline Spanish", "Voice translation"]
  },
  {
    name: "Citymapper",
    category: "Navigation",
    description: "Comprehensive transport planning for Madrid",
    platforms: ["iOS", "Android"],
    cost: "Free",
    rating: 4.6,
    keyFeatures: ["Multi-modal planning", "Real-time updates", "Walking directions"]
  },
  {
    name: "ElTenedor (TheFork)",
    category: "Dining",
    description: "Restaurant reservations with discounts",
    platforms: ["iOS", "Android"],
    cost: "Free",
    rating: 4.4,
    keyFeatures: ["Restaurant bookings", "Reviews", "Special offers"]
  },
  {
    name: "Tiqets",
    category: "Tourism",
    description: "Skip-the-line tickets for Madrid attractions",
    platforms: ["iOS", "Android"],
    cost: "Free",
    rating: 4.3,
    keyFeatures: ["Mobile tickets", "Last-minute bookings", "Audio guides"]
  }
];

export const safetyTips: SafetyTip[] = [
  {
    category: "Pickpocketing",
    tips: [
      "Keep belongings secure in tourist areas (Sol, Gran Vía, Metro)",
      "Use front pockets or hidden money belts",
      "Be extra careful on crowded Metro lines 1, 2, 3",
      "Watch for distractions (someone asking for directions while accomplice steals)",
      "Keep phones and cameras secured when taking photos"
    ]
  },
  {
    category: "Scams",
    tips: [
      "Avoid the 'three card monte' games in tourist areas",
      "Be wary of people offering to help with Metro tickets",
      "Don't accept drinks from strangers in bars",
      "Verify taxi meters are running (should start around €2.50)",
      "Be cautious of 'helpful' strangers pointing out 'bird droppings' on your clothes"
    ]
  },
  {
    category: "Emergency",
    tips: [
      "Emergency number: 112 (works in any EU country)",
      "Police: 091 (National) or 092 (Local)",
      "Medical emergency: 061",
      "Tourist police station: Plaza Mayor area",
      "Always carry ID (passport copy sufficient for tourists)"
    ]
  },
  {
    category: "Night Safety",
    tips: [
      "Madrid is generally very safe at night",
      "Avoid poorly lit areas and empty streets",
      "Use official taxis or ride-sharing apps",
      "Travel in groups when possible",
      "Know your route home before going out"
    ]
  },
  {
    category: "Health",
    tips: [
      "EU citizens: bring European Health Insurance Card",
      "Pharmacies (farmacia) - green cross sign",
      "Tap water is safe to drink",
      "Sun protection essential in summer",
      "Emergency pharmacy locations posted on all pharmacy doors"
    ]
  }
];

export const currencyInfo = {
  currency: "Euro (€)",
  coins: ["1, 2, 5, 10, 20, 50 cents", "€1, €2"],
  notes: ["€5, €10, €20, €50, €100, €200, €500"],
  tips: [
    "Cards widely accepted, but carry some cash",
    "Many small bars/cafés prefer cash",
    "ATMs (cajero automático) widely available",
    "Avoid exchange bureaus in tourist areas - poor rates",
    "Banks usually offer best exchange rates",
    "Tipping: round up or 5-10% in restaurants",
    "Market stalls and street vendors usually cash only"
  ]
};

export const languageBasics = {
  essentialPhrases: [
    { spanish: "Hola", english: "Hello", pronunciation: "OH-lah" },
    { spanish: "Gracias", english: "Thank you", pronunciation: "GRAH-see-ahs" },
    { spanish: "Por favor", english: "Please", pronunciation: "por fah-VOR" },
    { spanish: "Disculpe", english: "Excuse me", pronunciation: "dees-KOOL-peh" },
    { spanish: "¿Habla inglés?", english: "Do you speak English?", pronunciation: "AH-blah in-GLAYS" },
    { spanish: "No hablo español", english: "I don't speak Spanish", pronunciation: "no AH-blo es-pahn-YOHL" },
    { spanish: "¿Cuánto cuesta?", english: "How much?", pronunciation: "KWAN-toh KWES-tah" },
    { spanish: "La cuenta, por favor", english: "The bill, please", pronunciation: "lah KWEN-tah por fah-VOR" },
    { spanish: "¿Dónde está...?", english: "Where is...?", pronunciation: "DON-deh es-TAH" },
    { spanish: "Ayuda", english: "Help", pronunciation: "ah-YOO-dah" }
  ],
  diningPhrases: [
    { spanish: "Una mesa para dos", english: "A table for two", pronunciation: "OO-nah MEH-sah PAH-rah dos" },
    { spanish: "El menú, por favor", english: "The menu, please", pronunciation: "el meh-NOO por fah-VOR" },
    { spanish: "Soy vegetariano/a", english: "I'm vegetarian", pronunciation: "soy veh-heh-tah-ree-AH-no/nah" },
    { spanish: "Sin gluten", english: "Gluten-free", pronunciation: "seen GLOO-ten" },
    { spanish: "Está delicioso", english: "It's delicious", pronunciation: "es-TAH deh-lee-see-OH-so" }
  ],
  emergencyPhrases: [
    { spanish: "Necesito ayuda", english: "I need help", pronunciation: "neh-seh-SEE-toh ah-YOO-dah" },
    { spanish: "Llame a la policía", english: "Call the police", pronunciation: "YAH-meh ah lah po-lee-SEE-ah" },
    { spanish: "Estoy perdido/a", english: "I'm lost", pronunciation: "es-TOY per-DEE-do/dah" },
    { spanish: "¿Dónde está el hospital?", english: "Where is the hospital?", pronunciation: "DON-deh es-TAH el os-pee-TAHL" }
  ]
};
