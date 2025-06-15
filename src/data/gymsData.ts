
export interface Gym {
  name: string;
  address?: string;
  phone?: string;
  fax?: string;
  metro?: string;
  description?: string;
  prices?: string[];
  contact?: string;
  hours?: string;
  fees?: string;
  website?: string;
  note?: string;
  locations?: {
      address: string;
      metro?: string;
      tel: string;
  }[];
}

export const gymsData: Gym[] = [
  {
    name: 'Holiday Gym',
    prices: [
      'Prices Castillana (Only): 12 months is 489 euros',
      'VIP (All Gyms): 12 months is 579 euros',
      'Group Discounts are available'
    ],
    contact: 'Patricia',
    locations: [
      { address: 'Pl. Carlos Trias Beltran, 4', metro: 'Santiago Bernabeu', tel: '915-559-624 / Fax. 915-568-502' },
      { address: 'Plaza Republica Dominicana, 8', metro: 'Colombia', tel: '91 344 0867' },
      { address: 'Princesa, 40', metro: 'Arguelles', tel: '91 547 4033' },
      { address: 'Condado de Trevino, 33', tel: '91 383 9962' },
      { address: 'Ortega y Gasset, 56', metro: 'Nunez de Balboa', tel: '91 410 4491' },
      { address: 'Sector Musicos, 14 Tres Cantos', tel: '91 803 9260' },
      { address: 'Avenida de Mortalaz, 40', metro: 'Vinateros', tel: '91 430 1952' }
    ]
  },
  {
    name: 'Abasota Club',
    address: 'c/Pradillo 44',
    phone: '91 519 3470',
    metro: 'Alfonso XIII'
  },
  {
    name: 'Adrian',
    address: 'c/Flora 3',
    phone: '91 559 0514',
    metro: 'Sol and Opera',
    description: 'Large, modern facilities in a central location. Has a swimming pool.',
    fees: '55 euros a month'
  },
  {
    name: 'Amoros Squash',
    address: 'c/Azcona 44',
    phone: '91 726 5127',
    metro: 'Parque de las Avenidas'
  },
  {
    name: 'Atenas CB',
    address: 'c/Victor De La Serna 37',
    phone: '91 345 1675',
    metro: 'Colombia',
    description: 'Luxury gym with pool, sauna and weights room, plus aerobic, yoga, tai chi and ballroom dancing classes.',
    hours: 'Mon-Fri 7am-10pm; Sat 9am-2pm',
    fees: '63.11 euros (men) and 57.10 euros (women) a month for two days use; 78.13 euros (men) and 72.12 euros (women) per month for whole week use. Joining fee: 30 euros.'
  },
  {
    name: 'Bodhidharma',
    address: 'c/Moratines 18',
    phone: '91 517 2816',
    metro: 'Embajadores',
    description: 'Well-equipped gym with aerobic and martial arts classes plus a sauna.',
    hours: '8am-11pm on Mon-Fri; 9am to 2pm and 6-10pm on Sat; and 10am-3pm on Sun',
    fees: '55.89 euros per month, 136.43 euros for three months'
  },
  {
    name: 'Body Factory',
    description: 'Sauna, Jacuzzi, weights room and indoor cycling, plus aerobic, body-pump, step, maintenance, combat and karate classes.',
    hours: 'Mon-Fri 8am-11pm; Sat 10am-10pm; Sun 10am-3pm and 5pm-9pm',
    locations: [
      { address: 'c/Santa Rita 10', metro: 'Alfonso XIII and Serrano', tel: '91 416 1778' },
      { address: 'c/Serrano 50', tel: '91 435 5928' }
    ]
  },
  {
    name: 'Calypso Gimnasio',
    address: 'Pje. Can Menor 3',
    phone: '91 573 4748',
    metro: 'Estrella',
    description: 'Sauna, Jacuzzi, weights room plus aerobic, step and tai-chi classes.',
    hours: 'Mon-Fri, 8am-10pm; Sat, 9:30am-2:30pm',
    fees: '45.07 euros a month for adults; 39.06 euros a month for children'
  },
  {
    name: 'Centro De Medicina China',
    address: 'c/Modesto Lafuente 10',
    phone: '91 448 1838',
    website: 'www.chikungtaichi.com',
    metro: 'Iglesia',
    description: 'Tai chi classes only.',
    fees: '33 euros a month for a one-hour class a week; 52 euros for two hours of classes a week'
  },
  {
    name: 'Club Deportivo Saidok',
    address: 'Avenida Brasilia 33',
    phone: '91 356 9119',
    metro: 'Parque de las Avenidas',
    description: 'Sauna and weights room, plus aerobic, tai chi, fitness and karate classes.',
    hours: 'Mon-Fri 10:30am-10pm; Sat 10:30am-2:30pm',
    fees: '42.07 euros a month. Joining fee: 30.05 euros'
  },
  {
    name: 'Energy Gym',
    address: 'c/Hortaleza 19',
    phone: '91 531 1029',
    metro: 'Gran Via and Chueca',
    description: "Stylish environment in which to create your body beautiful while surrounded by those who've already got theirs in perfect working order. In addition to a large, airy work out space filled with great pieces equipment, it also offers male members a Jacuzzi, while women are catered to with a sauna and steam room.",
    fees: '55 euros a month'
  },
  {
    name: 'El Presidente',
    address: 'c/Professor Waksman 3',
    phone: '91 359 14 36',
    metro: 'Santiago Bernabeu',
    description: 'Luxury, men-only establishment with swimming pool, sauna, Turkish bath, weights room, plus aerobic and maintenance classes.',
    hours: 'Mon-Fri 9am-9:30pm and Sat 9am-2pm',
    fees: 'around 48.10 euros a month'
  },
  {
    name: 'Gimnasio Adrian',
    address: 'c/Flora 3',
    phone: '91 559 0514',
    metro: 'Santo Domingo',
    description: 'Pool, sauna, Jacuzzi, weights room and tanning facilities, plus yoga, tai-chi, kapoira, Aikido, kick boxing, aerobic and ballroom dancing classes.',
    hours: 'Mon-Fri 7:30am-11pm; Sat 8:30am-10pm; Sun 10am-3pm',
    fees: '73.92 euros a month, includes aerobic classes, gym, pool, Jacuzzi and sauna'
  },
  {
    name: 'Gimnasio Club Arguelles',
    address: 'c/Andres Mellado 21',
    phone: '91 549 0040',
    metro: 'Arguelles',
    description: 'Sauna, weights room and sunbeds, plus yoga, tai-chi, aerobic, karate, ballroom dancing and kick boxing classes.',
    hours: 'Mon-Fri 8am-11pm; Sat-Sun 9am-3pm'
  },
  {
    name: 'Gimnasio De Laly Ruiz',
    address: 'c/Doce de Octubre 32',
    phone: '91 504 1542',
    metro: 'Ibiza',
    description: 'Specialist gym using the Laly aerobic exercise system.',
    hours: 'Mon-Fri 8:30am-8:30pm; Sat 10:30am-11:30am'
  },
  {
    name: 'Gimnasio Femenino Hermosilla',
    address: 'c/Hermosilla 56',
    phone: '91 577 3384',
    metro: 'Serrano',
    description: 'Has a weights room plus aerobic, step and body toning classes.',
    hours: 'Mon-Fri 8am-10pm; Sat 11am-2:30pm',
    fees: '54.09 euros a month'
  },
  {
    name: 'Gimnasio Palestra',
    address: 'c/Bravo Murillo 5',
    phone: '91 446 5590',
    metro: 'Quevedo'
  },
  {
    name: 'Gimnasio Tendo',
    address: 'Paseo Delicias 47',
    phone: '91 467 4329',
    metro: 'Palos de la Frontera',
    description: 'Weights room plus aerobic, step, judo, karate, personal defense, tai-chi and yoga classes.',
    hours: 'Mon-Fri, 10am-11pm',
    fees: '32.45 euros for three days a month'
  },
  {
    name: 'Gimnasio Villacieros II',
    address: 'c/Sanchez Preciado 15',
    phone: '91 450 4469',
    metro: 'Franco Rodriguez'
  },
  {
    name: 'Health/Fitness Center',
    address: 'Paseo Santa Maria de la Cabeza 64',
    phone: '91 474 6281',
    metro: 'Atocha',
    description: 'Turkish baths, weights room, sun beds and massage, plus aerobic, step, karate, tai-chi, chikum and mohai-tai classes.',
    hours: 'Mon-Fri 9am-11pm; Sat 11am-2pm'
  },
  {
    name: 'El Horno',
    address: 'c/Esgrima 11',
    phone: '91 527 5701',
    metro: 'Tirso de Molina',
    description: "Spainalive says: Located in one of the narrow streets in the old part of the city and a favourite hangout of many of the barrio's flamenco folk, this gym is something of an institution. Over the last couple of years the equipment rooms have been redecorated and restocked and there are now a total of 10 dance studios. Classes in a wide range of healthy activities, from belly dancing to tai chi are also available.",
    fees: '37 euros a month'
  },
  {
    name: 'Kuk-Sul Konging',
    address: 'c/Leon Gil de Palacio 3',
    phone: '91 551 0129',
    metro: 'Pacifico'
  },
  {
    name: 'Mr Gim',
    address: 'c/Comandante Zorita 48',
    phone: '91 572 1935',
    metro: 'Nuevos Ministerios',
    description: 'Weights room and sauna, plus aerobic, karate, kung-fu and tai-chi classes.',
    hours: 'Mon-Fri, Sat-Sun 8am-11pm',
    note: 'Closed for the summer',
    fees: '33 euros a month'
  },
  {
    name: 'Opera Sport',
    address: 'c/Fomento 3',
    phone: '91 547 2668',
    metro: 'Santo Domingo',
    description: 'Large gym with weight room and sauna, plus aerobic, boxing, tai-chi and karate classes.',
    hours: 'Mon-Fri 9am-11pm; Sat 10am-3pm and 5pm- 9pm; Sun 11am-3pm',
    fees: 'Joining fee: 24.04 euros; monthly fee 49.28 euros a month'
  },
  {
    name: 'Pardinas 50 Sport Club',
    address: 'c/General Pardiñas 50',
    phone: '91 309 1457',
    metro: 'Nunez de Balboa'
  },
  {
    name: 'Podium Fitness Club',
    address: 'c/Marques de Mondojar 26',
    phone: '91 361 2689',
    metro: 'Ventas',
    description: 'Sauna, Turkish bath and weights room, plus aerobic, fitness and karate classes.',
    hours: 'Mon-Fri 8:30am-11pm; Sat 10am-3pm; Sun 11am-2pm'
  },
  {
    name: 'Scarlatti Fitness Sport',
    address: 'c/Dominico Scarlatti 1',
    phone: '91 544 8465',
    metro: 'Islas Filipinas',
    description: 'Sauna, Turkish baths and weight room, plus aerobic, cardio-boxing, cross training, tae-kwon-do, and Thai-boxing classes.',
    hours: 'Mon-Fri 9am-10:30pm; Sat-Sun 10am-3pm',
    fees: 'Joining fee: 30.05 euros; monthly fee 37.26-48.08 euros'
  },
  {
    name: 'Sport Club Chamberi',
    address: 'c/Raimundo Lulio 8',
    phone: '91 447 6599',
    metro: 'Bilbao',
    description: 'Sauna and weight room, plus aerobic, body toning , spinning and karate classes.',
    hours: 'Mon-Fri 8am-11pm; Sat-Sun 9am-3pm',
    fees: '38.46-60.10 euros a month'
  },
  {
    name: 'Training Gym',
    address: 'c/Don Ramon de la Cruz 67',
    phone: '91 402 2648',
    metro: 'Lista',
    description: 'Offers wide range of classes from aerobics to sevillana. Also has a weights room.',
    hours: 'Mon-Fri, Sept-June 9am-10pm, July and Aug 10am-9pm',
    note: 'Rates vary according to facilities used.'
  },
  {
    name: 'Votre Ligne',
    description: 'Women only. Luxury gym with pool, Jacuzzi and beauticians, plus weights room and aerobics classes.',
    hours: 'Mon-Fri 8:30am-9:30pm and Sat 10am-2pm',
    fees: 'Membership 90.15 euros per month or 649.09 euros for the year. Special rates for non members in summer.',
    locations: [
      { address: 'c/Lagasca 88, 1', metro: 'Nunez de Balboa', tel: '91 576 4000' },
      { address: 'c/Juan Ramon Jimenez 45', metro: 'Cuzco or Plaza Castilla', tel: '91 359 1436' }
    ]
  }
];
