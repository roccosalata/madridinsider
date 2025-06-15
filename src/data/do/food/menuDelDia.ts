
export interface MenuDelDia {
  name: string;
  address: string;
  schedule: string;
  phone?: string;
}

export const menuDelDia: MenuDelDia[] = [
  { name: 'Syvarya', address: 'Avda Brazil, 19 (Metro: Cuzco)', schedule: 'Monday-Friday 1pm-4pm' },
  { name: 'Vianvi', address: 'Principe, 15 (Metro: Sol)', schedule: 'Monday-Friday 1pm-9pm', phone: '914-293-868' },
  { name: 'New Pub Carlota Cafetería', address: 'Orense, 18 (Metro: Nuevos Ministerios)', schedule: 'Monday-Friday 1pm-9pm', phone: '915-550-483' },
  { name: 'Carosal', address: 'Finistrre, 19 (Metro: Barrio del Pilar)', schedule: 'Monday-Friday 1pm-4pm', phone: '917-399-068' },
  { name: 'Cafeteria Cerveceria Esquerdo', address: 'Doctor Esquerdo, 16 (Metro: Goya)', schedule: 'Monday-Friday 1:00 PM - 3:00', phone: '914-019-199' },
  { name: 'Mayke', address: 'Corredera Baja de San Pablo, 31 (Metro: Callao)', schedule: 'Monday-Friday 1:00 PM - 4:00 PM', phone: '915-316-846' },
  { name: 'Orly', address: 'Pilar de Zaragoza, 95 (Metro: Ave. de America)', schedule: 'Monday-Friday 1:00 PM - 4:00 PM', phone: '917-260-044' },
  { name: 'La Cervecera de Gaztambide', address: 'Gaztambide, 50 (Metro: Islas Filipinas)', schedule: 'Seated at the Bar. Monday-Friday 1:00 PM - 4:00 PM' },
];
