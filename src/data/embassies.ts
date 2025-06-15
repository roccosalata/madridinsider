
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
    address: "Serrano, 75 (Metro: Ruben Dario)",
    phone: "91 577 4000",
    website: "http://www.embusa.es",
  },
  {
    country: "United Kingdom",
    address: "Torre Espacio, Paseo de la Castellana 259D, 28046 Madrid",
    phone: "917 146 300",
    website: "https://www.ukinspain.fco.gov.uk",
  },
  {
    country: "Australia",
    address: "Pl del Descubridor Diego de Ordas, 3 (Metro: Rios Rosas)",
    phone: "91 441 6024",
    website: "http://www.spain.embassy.gov.au",
  },
  {
    country: "Canada",
    address: "Nuñez de Balboa, 35 (Metro: Velazquez)",
    phone: "91 423 3250",
    website: "http://www.canada-es.org",
  },
  {
    country: "Ireland",
    address: "Paseo de la Castellana, 46 (Metro: Ruben Dario)",
    phone: "91 436 4093",
    email: "embajadairlanda@terra.es",
  },
  {
    country: "New Zealand",
    address: "Pl de la Lealtad, 2 (Metro: Banco de España)",
    phone: "91 523 0226",
    email: "nzembmad@santandersupernet.com",
  },
  {
    country: "South Africa",
    address: "Claudio Coello, 91 (Metro: Nuñez de Balboa)",
    phone: "91 436 3780",
    website: "http://www.sudafrica.com",
  },
  {
    country: "Germany",
    address: "Calle de Fortuny, 8, 28010 Madrid",
    phone: "+34 91 557 9000",
    website: "https://madrid.diplo.de"
  }
];
