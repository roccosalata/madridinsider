
export interface CheapEat {
  name: string;
  address: string;
  description: string;
}

export const cheapEats: CheapEat[] = [
  { name: 'El Tigre', address: 'Infantas, 30 (Metro: Chueca / Banco de España)', description: "If you can elbow your way through the crowds to the bar, you'll find beer or cider for €1.50, immediately followed by a plate of hot tapas: croquettes, patatas bravas and tostadas galore. Amazingly, the bar staff never repeat the dishes that accompany each round." },
  { name: 'Maoz', address: 'Mayor, 4 (Metro: Sol)', description: 'Famished and impoverished vegetarians need look no further than Maoz, where nothing on the menu is over €5. Pick up a falafel pita and cram it with as many fresh toppings and sauces from the DIY bar as you can handle. Seating is limited, so stroll into the nearby Plaza Mayor.' },
  { name: 'Cervecería 100 Montaditos', address: 'Mayor, 22 (Metro: Sol) & Fuencarral, 96 (Metro: Bilbao)', description: 'This chain offers a list of 100 small sandwiches, all at just €1. Fillings range from basic jamón to fresh cheese and caviar. Two or three make a meal, and are served with chips / crisps.' },
  { name: 'Casa Camuñas', address: 'Alonso Cano, 101 (Metro: Nuevos Ministerios) & Juan de Olías, 39 (Metro: Estrecho)', description: 'Another affordable Spanish chain, Casa Camuñas offers generous tostas in the €2 to €3 range and delicious patato dishes topped with jamón, chorizo and eggs for around €6.' },
  { name: 'La Taberna de la Tía Cebolla', address: 'Calle de la Cruz, 27 (Metro: Sol)', description: 'Perched on the hill between Sol and Plaza Santa Ana, La Tía Cebolla (auntie onion) serves fantastic tortilla española (€4) and generous slabs of homemade empanada (tuna or mincemeat filled pie) for just €2.50. Plus, the friendly waiters bring fresh bread, chorizo and cheese free with each drink.' },
];
