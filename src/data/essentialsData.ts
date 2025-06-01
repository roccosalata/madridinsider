
export interface Embassy {
  country: string;
  address: string;
  phone: string;
  website?: string;
  email?: string;
}

export interface EmergencyContact {
  service: string;
  phone: string;
  description: string;
}

export interface PlaceOfWorship {
  name: string;
  religion: string;
  address: string;
  phone?: string;
  website?: string;
  notes?: string;
}

export interface PoliceContact {
  type: string;
  location?: string;
  phone: string;
}

export interface PoliceStation {
  name: string;
  address: string;
  phone: string;
  district: string;
}

export interface PostOffice {
  name: string;
  address: string;
  hours: string;
  phone?: string;
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
  mailboxes: {
    description: string;
  };
  stamps: {
    purchaseLocations: string;
    notes: string;
    websites?: { name: string; url: string; }[];
  };
  mailingRates: {
    notes: string;
    rates: { destination: string; cost: string; }[];
  };
}

export const embassies: Embassy[] = [
  {
    country: "United States",
    address: "Calle de Serrano, 75, 28006 Madrid",
    phone: "+34 91 587 2200",
    website: "https://es.usembassy.gov",
    email: "acsmadrid@state.gov"
  },
  {
    country: "United Kingdom",
    address: "Paseo de la Castellana, 259D, 28046 Madrid",
    phone: "+34 91 714 6300",
    website: "https://www.gov.uk/world/spain",
    email: "ukinspain@fcdo.gov.uk"
  },
  {
    country: "Germany",
    address: "Calle de Fortuny, 8, 28010 Madrid",
    phone: "+34 91 557 9000",
    website: "https://madrid.diplo.de"
  }
];

export const emergencyContacts: EmergencyContact[] = [
  {
    service: "Emergency Services (Police, Fire, Ambulance)",
    phone: "112",
    description: "General emergency number for all services"
  },
  {
    service: "National Police",
    phone: "091",
    description: "For crime reporting and general police matters"
  },
  {
    service: "Municipal Police",
    phone: "092",
    description: "For local issues and traffic matters"
  },
  {
    service: "Medical Emergency",
    phone: "061",
    description: "Medical emergencies and ambulance services"
  }
];

export const religions: PlaceOfWorship[] = [
  {
    name: "St. George's Anglican Church",
    religion: "Anglican/Episcopal",
    address: "Calle de Núñez de Balboa, 43, 28001 Madrid",
    phone: "+34 91 576 5109",
    website: "https://www.stgeorgesmadrid.com",
    notes: "English-speaking congregation"
  },
  {
    name: "Madrid Islamic Cultural Center",
    religion: "Islam",
    address: "Calle de Salvador de Madariaga, s/n, 28027 Madrid",
    phone: "+34 91 326 2610",
    notes: "Main mosque in Madrid"
  },
  {
    name: "Synagogue Beth Yaacov",
    religion: "Judaism",
    address: "Calle de Balmes, 3, 28010 Madrid",
    phone: "+34 91 445 9843",
    notes: "Orthodox synagogue"
  }
];

export const policeContacts: PoliceContact[] = [
  {
    type: "Emergency",
    phone: "112"
  },
  {
    type: "National Police",
    phone: "091"
  },
  {
    type: "Municipal Police",
    phone: "092"
  }
];

export const policeStations: PoliceStation[] = [
  {
    name: "Comisaría Centro",
    address: "Calle de Leganitos, 19, 28013 Madrid",
    phone: "+34 91 548 7900",
    district: "Centro"
  },
  {
    name: "Comisaría Salamanca",
    address: "Calle de Núñez de Balboa, 78, 28006 Madrid",
    phone: "+34 91 562 8400",
    district: "Salamanca"
  }
];

export const postOffices: PostOffice[] = [
  {
    name: "Correos Madrid Centro",
    address: "Plaza de las Cibeles, s/n, 28014 Madrid",
    hours: "Monday-Friday 8:30-20:30, Saturday 9:30-13:00",
    phone: "+34 902 197 197"
  },
  {
    name: "Correos Sol",
    address: "Calle de Carmen, 5, 28013 Madrid",
    hours: "Monday-Friday 8:30-20:30, Saturday 9:30-13:00"
  }
];

export const postAndMailInfo: PostAndMail = {
  mainBranch: {
    name: "Correos Madrid Centro",
    location: "Plaza de las Cibeles",
    generalHours: "Monday-Friday 8:30-20:30",
    stampHours: "Monday-Friday 8:30-20:30, Saturday 9:30-13:00",
    phone: "+34 902 197 197"
  },
  pickingUpMail: {
    instructions: "Present valid ID to collect mail at general delivery",
    requiredDocument: "Valid passport or national ID"
  },
  generalDeliveryAddress: {
    namePlaceholder: "[Your Name]",
    addressLine1: "Lista de Correos",
    addressLine2: "28080 Madrid, Spain"
  },
  mailboxes: {
    description: "Public mailboxes available throughout the city center"
  },
  stamps: {
    purchaseLocations: "Available at post offices, tobacco shops, and some newsstands",
    notes: "Stamps can also be purchased online"
  },
  mailingRates: {
    notes: "Rates vary by destination and service type",
    rates: [
      { destination: "Within Spain", cost: "€0.70" },
      { destination: "Europe", cost: "€1.60" },
      { destination: "Rest of World", cost: "€2.90" }
    ]
  }
};

export const essentialsData = {
  embassies,
  emergencyContacts,
  religions,
  policeContacts,
  policeStations,
  postOffices,
  postAndMailInfo
};
