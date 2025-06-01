
// src/data/essentialsData.ts

export interface PoliceContact {
  type: string;
  location?: string;
  phone?: string;
}

export interface LostPropertyContact {
  location: string;
  phone: string;
  notes?: string;
}

export interface EmergencyContact {
  type: string;
  phone: string;
}

export interface Embassy {
  country: string;
  address: string;
  phone: string;
  website: string;
}

export interface PlaceOfWorship {
  name: string;
  denomination: string;
  address: string;
  phone?: string;
  website?: string;
  notes?: string;
}

export interface PostAndMail {
  mainBranch: {
    name: string;
    location: string;
    generalHours: string;
    stampHours: string;
    phone: string;
  };
  pickingUpMail: {
    instructions: string;
    requiredDocument: string;
  };
  generalDeliveryAddress: {
    namePlaceholder: string;
    addressLine1: string;
    addressLine2: string;
  };
  mailboxes: { description: string; };
  stamps: {
    purchaseLocations: string;
    notes: string;
    websites?: { name: string; url: string }[];
  };
  mailingRates: {
    notes: string;
    rates: { destination: string; cost: string; }[];
  };
}

export const emergencyContacts: EmergencyContact[] = [
  {
    type: 'General Emergencies (Tourist Helpine & Public Safety)',
    phone: '092',
  },
  {
 type: 'SAMUR', phone: '112', },
  {
    type: 'UVI-MOVIL',
    phone: '061',
  },
  {
    type: 'AMBULANCIAS SASU',
    phone: '91 355 1039',
  },
  {
    type: 'Civil Protection (Proteccion Civil)',
    phone: '915-805-289',
  },
  {
    type: 'Poison Control Center (Instituto de Toxicologia)',
    phone: '915 620 420', // Updated with likely phone number
  },
];

export const policeContacts: PoliceContact[] = [
  { type: 'Local Police Station', location: 'Luna, 29 (Metro: Calla0)', phone: '91 541 7160' },
  { type: 'Local Police Station', location: 'Huertas, 76 (Metro: Anton Martin)', phone: '91 249 0994' },
  { type: 'Local Police Station', location: 'Rafael Calvo, 33 (Metro: Iglesias)', phone: '91 322 3266' },
  { type: 'Local Police Station', location: 'Sol Metro - Carretas Exit', phone: '91 521 0911' },
  { type: 'Reporting Thefts', phone: '900 100 333' },
];

export const lostPropertyContacts: LostPropertyContact[] = [
  { location: 'Plaza Legazpi, 7 (Metro: Legazpi)', phone: '91 588 4348' },
  { location: 'Paseo Molino, 7', phone: '91 527 9590' },
];

export const embassies: Embassy[] = [
  {
    country: 'United States',
    address: 'Serrano, 75 (Metro: Rubeb Dario)',
    phone: '91 577 4000',
    website: 'https://www.embusa.es',
  },
  {
    country: 'Australia',
    address: 'Pl del Descubridor Diego de Ordas, 3 (Metro: Rios Rosas)',
    phone: '81 441 6024',
    website: 'https://www.spain.embassy.gov.au',
  },
  {
    country: 'United Kingdom',
    address: 'Torre EspacioPaseo de la Castellana 259D, 28046 Madrid',
    phone: '917 146 300',
    website: 'https://www.ukinspain.fco.gov.uk', // Website noted as changing
  },
  {
    country: 'Canada',
    address: 'Nuñez de Baboa, 35 (Metro: Velazquez)',
    phone: '91 423 3250',
    website: 'https://www.canada-es.org',
  },
  {
    country: 'Ireland',
    address: 'Paseo de la Castellana, 46 (Metro: Ruben Dario)',
    phone: '91 436 4093',
    website: 'mailto:embajadairlanda@terra.es', // Using mailto for email address
  },
  {
    country: 'New Zealand',
    address: 'Pl de la Lealtad, 2 (Metro: Banco de España)',
    phone: '91 523 0226',
    website: 'mailto:nzembmad@santandersupernet.com', // Using mailto for email address
  },
  {
    country: 'South Africa',
    address: 'Claudio Coello, 91 (Metro: Nuñez de Balboa)',
    phone: '91 436 3780',
    website: 'https://www.sudafrica.com',
  },
];

export const postAndMailInfo: PostAndMail = {
  mainBranch: {
    name: 'Cibeles (Main Branch) / Palacio de Comunicaciones',
    location: 'Palacio de Comunicaciones at Plaza de las Cibeles (Metro: Banco de España)',
    generalHours: 'Monday-Friday 9am-8pm & Saturday 9am-2pm',
    stampHours: 'Monday-Saturday 8am-midnight & Sundays 8am-10pm',
    phone: '902-197-197',
  },
  pickingUpMail: {
    instructions: 'You will need to bring your passport in order to pick up your mail.',
    requiredDocument: 'passport',
  },
  generalDeliveryAddress: {
    namePlaceholder: 'YOUR NAME',
    addressLine1: 'Lista de Correos',
    addressLine2: '28014 Madrid (Spain)',
  },
  mailboxes: {
    description: 'Mailboxes are on many corners. They are yellow and usually have two slots, one marked Ciudad fro mail sent with a Madrid address; the other slot is for mail destined outside Madrid. (If there is only one slot, any destination is allowed).',
  },
  stamps: {
    purchaseLocations: 'Estancos (tobacconists, look for "Tabacos" or "Timbres") and Post Offices. Also a fully functional post office in the basement of the Corte Ingles department store in Puerta del Sol.',
    notes: 'Estancos are generally open during Spanish business hours (approx. Mon-Fri 9am-2pm & 5pm-8/9pm, some Sat mornings). The Corte Ingles post office is open Mon-Sat 10am-9pm, but expect long lines.',
    websites: [
      { name: 'List of Estancos in Madrid', url: 'https://www.cigarros-puros.com/directorio/madrid.htm' },
      { name: 'Spanish Postal Service (Correos)', url: 'https://www.correos.es' },
    ],
  },
  mailingRates: {
    notes: 'Rates vary depending on destination and/or letter weight/size. Normal letter or postcard (up to 20 grams) costs:',
    rates: [
      { destination: 'anywhere within Spain', cost: '0.25 euros (approx. $0.21 cents)' },
      { destination: 'anywhere else in Europe (including Greenland)', cost: '0.45 euros (approx. $0.40 cents)' },
      { destination: 'anywhere else in the world', cost: '0.72 euros (approx. $0.63 cents)' },
    ],
  },
};

export const placesOfWorship: PlaceOfWorship[] = [
  {
    name: "British Embassy Church (St. George's)",
    denomination: "Anglican",
    address: "Nuñez de Balboa, 43 (Metro: Serrano)",
    phone: "91 576 5109",
  },
  {
    name: "Community Church of Madrid",
    denomination: "Community Church",
    address: "Calle de la Viña, 3 (Metro: Metropolitano)",
    notes: "Sundays at 11 a.m.",
    website: "https://www.communitychurchmadrid.org",
    phone: "655-031-857",
  },
  {
    name: "Madrid Presbyterian Church",
    denomination: "Presbyterian",
    address: "Apartado 168 (Las Rozas)",
    notes: "Serving Madrid`s International English Speaking Community with a Christ centered & Biblically Reformed Ministry. Rev. JT Campbell Jr., Pastor. Email: MPM@MadridPres.org",
    phone: "916-302-258",
    website: "https://www.madridpres.org",
  },
  {
    name: "Madrid International Church",
    denomination: "International Christian",
    address: "Matilde Hernandez, 31, Bajo B (Metro: Oporto)",
    notes: "Sundays at 11:30am.",
    website: "https://www.madridinternationalchurch.net",
    phone: "626 621 734",
  },
  {
    name: "Immanuel Baptist Church",
    denomination: "Baptist",
    address: "Hernandez de Tejada, 4 (Metro: Arturo Soria)",
    website: "https://www.ibcmadrid.com",
    notes: "Pastor David Dixon",
    phone: "914-074-347",
  },
  {
    name: "Mountainview International Church",
    denomination: "International Christian",
    address: "N/A", // Address not provided
    website: "https://www.mountainview-church.com",
    notes: "Email: troy@mountainview-church.com",
    phone: "916-303-189",
  },
  {
    name: "Chapel of Our Lady of Mercy",
    denomination: "Catholic",
    address: "Dracena, 23 (Metro: Pio XII)",
    notes: "Mass in English",
    phone: "91 416 9009",
  },
  {
    name: "Madrid Synagogue (Beth Yaacov)",
    denomination: "Jewish",
    address: "Balmes, 3 (Metro: Iglesias)",
    phone: "91 445 9843",
  },
  {
    name: "Islamic Cultural Center of Madrid",
    denomination: "Islamic",
    address: "Salvador de Madriaga, 4 (Metro: Barrio de la Concepcion)",
    phone: "91 326 2610",
  },
  {
    name: "Mokusan Zen Dojo",
    denomination: "Zen Buddhist",
    address: "Madera, 25 (Metro: Noviciado)",
    phone: "91 522 7138 / 659 771 040",
  },
];
