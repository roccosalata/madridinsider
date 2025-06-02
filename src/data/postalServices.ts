
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
