
export interface ShopContact {
  name: string;
  address: string;
  metro?: string;
  phone?: string;
  email?: string;
  website?: string;
  hours?: string;
  description?: string;
  notes?: string;
}

export const opticalShops: ShopContact[] = [
  {
    name: "Optica Principe",
    address: "Principe, 5",
    metro: "Sevilla / Sol",
    description: "Centrally located. Contact Lenses and Glasses.",
    notes: "Fermin Villa",
    phone: "91 429 0433"
  },
  {
    name: "Centro Optico Canalejas",
    address: "Principe, 1 (Corner Plaza Canalejas)",
    metro: "Sevilla / Sol",
    description: "Centrally located. Good prices on Toric Contact lenses.",
    phone: "913-691-100"
  }
];

export const musicStores: ShopContact[] = [
  {
    name: "Adagio",
    address: "Carrera de San Jeronimo, 26",
    metro: "Sevilla",
    description: "Spanish guitars, Acoustic guitars, Electric guitars, Amps, Pianos, Organs, Electronic instruments, Classical / traditional Instruments, Sheet music, Accessories, etc.",
    hours: "July & August: Mon.-Fri: 10am-1:45pm / 4:30pm-8pm. Closed on Saturday & Sunday. Sept.: Mon.-Fri: 10am-1:45pm / 4:30pm-8pm. Saturday: 10am-1:45pm. Closed Sunday",
    notes: "Juan Jose de Las Casas or Ruben",
    website: "www.adagio.es",
    email: "Carrera-ume@adagio.es",
    phone: "91 429 2877 / 91 429 3877"
  }
];

export const electronicStores: ShopContact[] = [
  {
    name: "Conectrol, S.A.",
    address: "Jorge Juan, 57-58",
    metro: "Goya",
    website: "www.conectrol.com",
    phone: "915-781-034"
  },
  {
    name: "J & S",
    address: "Barquillo, 15 - Locales 10, 11 & 12",
    metro: "Sevilla",
    website: "www.jsaplicacioneselectronicas.com",
    email: "Componentes@jsaplicacioneselectronicas.com",
    phone: "915-311-894"
  }
];

export const computerStores: ShopContact[] = [
  {
    name: "Abyss",
    address: "Cavanilles, 49",
    metro: "Conde Casal",
    website: "www.abyss-computer.com",
    email: "info@abyss-computer.com",
    phone: "902 118 684"
  },
  {
    name: "K-tuin (Mac Store)",
    address: "Orense, 52",
    metro: "Cuzco",
    description: "Mac computer Sales & Repairs",
    phone: "915-556-798"
  },
  {
    name: "PC City",
    address: "Gaztambide",
    metro: "Arguelles"
  }
];

export const bookStores: ShopContact[] = [
  {
    name: "Book World (Madrid)",
    address: "Goya, 56",
    metro: "Goya",
    hours: "Monday to Saturday: 10am-8pm",
    website: "www.bookworldespana.com",
    phone: "91 578 2316"
  },
  {
    name: "Hartley's Good Bookshop",
    address: "Padilla, 74",
    metro: "Diego de Leon / Lista",
    description: "New & Used Books.",
    hours: "Mon-Sat: 11am-8pm",
    phone: "91 401 9077"
  },
  {
    name: "J & J's Books & Coffee",
    address: "Espiritu Santo, 47",
    metro: "Noviciado",
    description: "Buy: Mon-Fri 10am-2pm. One fith the selling price. Sell: Top quality books at low prices. Trade: Anytime, but not all books are accepted. Any language. Trade three books for one.",
    phone: "915-218-576",
    website: "www.jandjbooksandcoffee.com"
  },
  {
    name: "La Libreria de Lavapies",
    address: "Argumosa, 39",
    metro: "Lavapies / Atocha",
    description: "Alternative bookshop. New and second hand books in English, Spanish and French.",
    hours: "Open daily: 10am-10pm",
    phone: "91 527 8992"
  },
  {
    name: "Petra's International Bookshop",
    address: "Campomanes, 13",
    metro: "Opera / Santo Domingo",
    description: "2nd Hand Books - Special offers every month",
    hours: "Mon-Sat: 11AM - 9 PM",
    phone: "915-417-291"
  },
  {
    name: "Booksellers",
    address: "Plaza Olavide, 10",
    metro: "Iglesia",
    phone: "91 702 7944",
    email: "booksellers@wanadoo.es"
  },
  {
    name: "Booksellers",
    address: "Fernandez de la Hoz, 40",
    metro: "Iglesia / Ruben Dario",
    phone: "917-027-044",
    email: "booksellers@wanadoo.es"
  },
  {
    name: "Discount Casa del Libro",
    address: "Salud, 17",
    metro: "Gran Via",
    description: "Special Offers / School Books",
    hours: "9:30 AM to 9:00 PM",
    phone: "915-241-939",
    email: "granvia@casadellibro.com"
  },
  {
    name: "FNAC",
    address: "Preciados, 28",
    metro: "Callao",
    phone: "915-956-100",
    email: "callao@fnac.es"
  },
  {
    name: "Happy Books",
    address: "Goya, 55",
    metro: "Velazquez",
    phone: "915-751-781"
  },
  {
    name: "Pasajes: International Bookshop",
    address: "Genova, 3",
    metro: "Alonso Martinez",
    description: "English - French - German - Spanish. Book Order Service",
    phone: "913-101-245",
    email: "pasajes@infornet.es"
  },
  {
    name: "Ocho y Medio",
    address: "Martin de los Heros, 11",
    metro: "Plaza España",
    description: "Bookshop that deals exclusively in publications on cinema, art and industry, as well as, on all subjects concerning audiovisual media (TV, Photography, Video...)",
    phone: "915-590-628",
    website: "www.ochoymedio.com",
    email: "libros@ochoymedio.com"
  }
];

export const internationalGroceries: ShopContact[] = [
  {
    name: "Al-Nur Food",
    address: "Antonio Calvo, 11",
    metro: "Barrio de la Concepcion / Parque de las Avenidas",
    description: "Middle Eastern.",
    hours: "Daily 10:30 a.m.–10 p.m.",
    phone: "91 326 0901"
  },
  {
    name: "American Store",
    address: "Paseo San Francisco de Sales, 3",
    metro: "Islas Filipinas",
    hours: "Mon-Sat: 10am to 9pm",
    phone: "915-442-703",
    website: "www.theamericanstore.es"
  },
  {
    name: "Canasta Mexicana",
    address: "Segovia, 15",
    metro: "La Latina",
    description: "Mexican food.",
    hours: "Mon-Fri: 11am-9pm; Sat: 11am-2:30pm",
    phone: "91 366 5794"
  },
  {
    name: "Desi Gourmet",
    address: "Ricardo Ortiz, 24 Madrid 28017",
    description: "Bringing groceries from across the world and India to create exciting spicy food in Madrid. We have a wide variety of spices, basmati rice, ready meals, sweets, flours, international products, vegetarian products and more!",
    website: "www.desigourmet.es",
    email: "info@desigourmet.es",
    phone: "91 383 9063"
  },
  {
    name: "Dong Fang Extremo Oriente",
    address: "Galeria Subterraneo, Plaza de España Parking",
    metro: "Plaza de España",
    description: "Chinese, Japanese, and Korean, plus food from the Philippines.",
    hours: "Daily 10 a.m.–2 p.m. / 4:30 p.m.–8:30 p.m.",
    phone: "91 542 1464"
  },
  {
    name: "Food Hall",
    address: "Islas de la Alegranza, 6, Nave 38 (San Sebastian de los Reyes)",
    description: "All your favorite foods from home now available under one roof. Largest selection of UK food, Over 1,000 items, Home delivery.",
    website: "www.thefoodhall.es",
    hours: "Mon-Fri: 10am-8:30pm / Sat: 11am-9pm",
    phone: "902 43 1136"
  },
  {
    name: "Hossain SL",
    address: "Miguel Servet, 5",
    metro: "Lavapies / Embajadores",
    description: "All of your Indian spices in one place.",
    hours: "Daily 1am-11pm",
    phone: "91 528 0463"
  },
  {
    name: "Nasima Store Alimentacion",
    address: "Miguel Servet, 6",
    metro: "Lavapies / Embajadores",
    description: "Specializing in Indian, Pakistani, and Bangladeshi rice and teas.",
    hours: "Daily 10 a.m.–10 p.m.",
    phone: "91 468 3817"
  },
  {
    name: "Flavors of the World",
    address: "Dr. Gómez Ulla Street 10",
    metro: "Plaza Manuel Becerra",
    description: "Your one-stop shop for all international groceries, be they British, American, Asian or Oriental!",
    phone: "913 771 940",
    email: "info@saboresmundo.com",
    website: "www.saboresmundo.com",
    hours: "11 to 8:30 Mondays to Saturdays and 11 to 2:30 Sundays"
  },
  {
    name: "Taste of America",
    address: "Serrano, 149",
    metro: "Republica de Argentina",
    phone: "915-621-632",
    hours: "Open daily 9am-9pm",
    website: "www.tasteofamerica.es"
  },
  {
    name: "Tea Shop",
    address: "Fernando VI, 5",
    description: "Tea Shop is a small shop with a homely atmosphere. They sell only one product - Tea - but in more than one hundred varieties.",
    phone: "913-081-166"
  },
  {
    name: "Things That You Miss",
    address: "Juan de Austria, 11",
    metro: "Iglesias",
    description: "Not only the things, but the brand names too: McVities, Heinz, Rowntrees, Sharwood's and tetley. Can't find your favorite foods? You'll find everything UK that you need.",
    hours: "Mon-Friday: 9:30am-2:30pm / 5:30pm-8:30pm. Sat: 10am-2:30pm",
    website: "www.thethingsyoumiss.com"
  },
  {
    name: "La Tiendita",
    address: "Libertad, 11",
    metro: "Chueca",
    description: "Buy your Mexican stuff here.",
    hours: "Daily 10am-10pm",
    website: "www.lapanzaesprimero.com",
    phone: "91 524 1379"
  },
  {
    name: "The Shop Madrid",
    address: "Av. Europa, 20 (Pozuelo de Alarcon) Madrid 28224",
    description: "The first British convenience store to be founded in Madrid, offering the widest and most select range of what the UK has to offer. Specialists in British food, ranging from fresh sausages and cereals to teas and those sweets that remind you of your childhood. We also have Union Jack branded merchandise, a range of American brands and all of your basic necessities, all under one roof. We are open 7 days a week, and have knowledgeable, bilingual staff who are here to help you with anything you need.",
    email: "info@theshopmadrid.com",
    phone: "91 182 6787"
  }
];

export const barberShops: ShopContact[] = [
  {
    name: "Pelucaria de Caballeros",
    address: "Cuchilleros, 15",
    metro: "Sol",
    description: "Casa fundada en 1900. Reasonably priced men's barber offering good basic cuts. Claim to be one of the oldest shops in Madrid.",
    phone: "913 665 887"
  },
  {
    name: "Pelucaria de Caballeros",
    address: "Toledo, 16",
    metro: "Latina",
    phone: "913 665 887"
  },
  {
    name: "Alta Peluqueria Vallejo",
    address: "Santa Isabel, 22",
    metro: "Anton Martin",
    description: "Reasonably priced men's barber offering good basic cuts.",
    hours: "Mon-Fri, 9am-2pm and 4:30-8:30pm; Sat, 9am-1:30pm",
    phone: "91 527 4448"
  },
  {
    name: "Jofer",
    description: "Chain with branches throughout Madrid. Cheap, cheerful and no appointment needed. Good if you just want a simple trim. Also does massages, waxing and a range of other beauty treatments.",
    hours: "Mon-Sat, 8am-10pm",
    phone: "91 556 1352"
  },
  {
    name: "No Te Cortes",
    address: "Olivar, 31",
    metro: "Lavapies",
    description: "Small but friendly and very reasonably priced. Stylist Miguel speaks English and listens patiently while you explain exactly what you want.",
    phone: "91 539 4320"
  },
  {
    name: "Sally Whitmore (Mobile Hairdresser)",
    description: "British hairdresser Sally trained with Vidal Sassoon and formerly worked for Trevor Sorbie in London. She offers a full range of hairdressing services for men, women and children, including perms and tints in the comfort of your own home. A cut and blow dry runs from 40 euros, with a man's trim costing 25 euros. Popular and very busy so leave plenty of time to secure an appointment.",
    phone: "91 857 9623 / 651 481 916",
    email: "sallyinmadrid@hotmail.com"
  },
  {
    name: "Alex Douglas (English Hairdresser)",
    description: "Ex Vidal Sassoon and Ex Toni & Guy staff trainer. Alex is a very busy local hairdresser in madrid so leave plenty of time to make an appointment with him.",
    phone: "636837143",
    email: "theenglishhairdresser@gmail.com",
    website: "www.theenglishhairdresserinmadrid.es"
  }
];
