
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
    name: "Palacio de Cibeles Post Office (Main Branch)",
    address: "Plaza de las Cibeles, s/n, 28014 Madrid",
    hours: "General Services: Mon-Sat 8:00-24:00, Sun 8:00-22:00. General Delivery: Mon-Fri 9:00-20:00, Sat 9:00-14:00",
    phone: "902 197 197"
  },
  {
    name: "Correos at El Corte Inglés (Sol)",
    address: "Basement of El Corte Inglés, Puerta del Sol, 10",
    hours: "Monday-Saturday 10:00-21:00"
  },
  {
    name: "Correos Sol",
    address: "Calle de Carmen, 5, 28013 Madrid",
    hours: "Monday-Friday 8:30-20:30, Saturday 9:30-13:00"
  }
];

export const postAndMailInfo: PostAndMail = {
  mainBranch: {
    name: "Palacio de Comunicaciones (Main Branch at Cibeles)",
    location: "Plaza de las Cibeles (Metro: Banco de España)",
    generalHours: "Mon-Fri 9:00-20:00, Sat 9:00-14:00",
    stampHours: "Mon-Sat 8:00-24:00, Sun 8:00-22:00",
    phone: "902 197 197"
  },
  pickingUpMail: {
    instructions: "To pick up mail from General Delivery (Lista de Correos), you must present a valid passport or national ID.",
    requiredDocument: "Valid passport or national ID"
  },
  generalDeliveryAddress: {
    namePlaceholder: "[YOUR FULL NAME]",
    addressLine1: "Lista de Correos",
    addressLine2: "28014 Madrid, Spain"
  },
  mailboxes: {
    description: "Yellow mailboxes are located on many street corners. They often have two slots: 'Ciudad' for local Madrid mail and 'Provincias y Extranjero' for mail outside Madrid. If there's only one slot, it can be used for any destination."
  },
  stamps: {
    purchaseLocations: "Stamps (sellos) can be bought at post offices or at tobacco shops called 'estancos' (look for a 'Tabacos' sign). Estancos will often weigh envelopes for you.",
    notes: "Estancos are open during normal business hours (approx. 9:00-14:00 and 17:00-20:30, Mon-Fri, and Sat mornings). A fully functional post office is also in the basement of the El Corte Inglés department store at Puerta del Sol, open Mon-Sat from 10:00 to 21:00, though it can get busy.",
    websites: [
        { name: "Official Spanish Postal Service", url: "https://www.correos.es" },
        { name: "Directory of Estancos", url: "http://www.cigarros-puros.com/directorio/madrid.htm" }
    ]
  },
  mailingRates: {
    notes: "Rates vary by destination and service type. Below are approximate costs for a standard letter or postcard (up to 20 grams) as of 2025:",
    rates: [
      { destination: "Within Spain", cost: "approx. €0.88" },
      { destination: "Europe", cost: "approx. €1.75" },
      { destination: "Rest of World", cost: "approx. €1.90" }
    ]
  }
};
