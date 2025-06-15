
export interface Diner {
  name: string;
  address: string;
  description: string;
  schedule?: string;
  website?: string;
  email?: string;
  phone?: string;
}

export const diners: Diner[] = [
  { name: 'Chesscafe Company', address: 'Paseo de las Acacias, 25 (Metro: Acacias)', description: 'Cappuccino & Sandwich Bar. Muffins, Bagels, Sandwiches, coffee, Donuts, Cake, etc.', schedule: 'Sunday-Thursday: 8am-11pm. Friday, Saturday, Holidays: 8am-Midnight', website: 'www.echesscafe.com', email: 'alamb@echesscafe.com', phone: '915-303-376' },
  { name: 'VIPS', address: 'Various locations', description: '' },
  { name: 'Nebraska', address: 'Various locations', description: '' },
  { name: 'TGIF', address: 'Gran Via (Metro: Santo Domingo / Plaza España) & Paseo de la Habana (Metro: Santiago Bernabeau)', description: '' },
];
