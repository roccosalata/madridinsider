
export interface Embassy {
  country: string;
  address: string;
  phone: string;
  website?: string;
  email?: string;
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
