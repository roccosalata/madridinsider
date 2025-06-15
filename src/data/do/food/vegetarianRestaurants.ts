
export interface VegetarianRestaurant {
  name: string;
  address: string;
  description?: string;
  hours?: string;
  phone?: string;
  email?: string;
  website?: string;
}

export const vegetarianRestaurants: VegetarianRestaurant[] = [
  { name: 'Al Natural', address: 'Zorilla, 11', website: 'www.alnatural.biz', phone: '91 369 4709' },
  { name: 'Comme Bio', address: 'Plaza Olavide Esq. Trafalgar, 25 (Metro: Quevedo)', website: 'www.commebio.es', phone: '91 446 1666' },
  { name: 'Artemisa', address: 'Tres Cruces, 4 (Metro: Gran Via)', hours: 'Daily 1:30pm-4:30pm / 9pm-midnight', website: 'www.la_red.com/artemisa', email: 'artemisa@la_red.com', phone: '91 521 8721' },
  { name: 'Ecocentro', address: 'Esquilache, 4 (Metro: Rios Rosas)', hours: 'Mon-Sun 10am-10pm', website: 'www.ecocentro.es', phone: '91 553 5502' },
  { name: 'La Biotica', address: 'Amor de Dios, 3 (Metro: Anton Martin)', phone: '91 429 0780' },
  { name: 'El Estragon', address: 'Pl de la Paja, 10 (Metro: La Latina)', hours: 'Daily 1pm-4:30pm / 8pm-12:30am', phone: '91 365 8982' },
  { name: 'Vegetarian House', address: 'Costanilla de los Desamparados, 21 (Metro: Anton Martin)', description: 'Hindu Vegetarian', hours: 'Tue-Sat 1pm-4:30pm / 8pm-11pm; Sun 1pm-4:30pm', phone: '91 420 3928' },
  { name: 'Fresc Co', address: 'Sagasta, 30 (Metro: Alonso Martinez)', description: 'All you can eat buffet', hours: 'Daily 1pm-1am', phone: '91 447 4388' },
  { name: 'Chez Pomme', address: 'Pelayo, 4 (Metro: Chueca)', hours: 'Mon-Sat 1:30pm-4:30pm / 8:30pm-11:30pm. Fri-Sat until midnight', phone: '91 532 1646' },
  { name: 'La Mazorca', address: 'Paseo Infanta Isabel, 21 (Metro: Atocha)', phone: '91 501 7013' },
];
