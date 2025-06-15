
export const tapasIntro = '“A small portion of food that is served to accompany a drink”. This is the way in which the Dictionary of the Spanish Language defines this concept which, although increasingly popular all over the world, was born and developed here. Tapas, however, are much more than just this. They are a way of understanding gastronomy, as well as a way to interact with other people. Going for tapas is a social event that brings together great conversation, an agreement on exactly what should be ordered and the pleasures of the palate. In essence, going for tapas involves going from bar to bar, trying the specialities offered at each one. You can find great bars, taverns and restaurants all over Madrid in which to enjoy tapas, but don’t miss areas such as La Latina and Conde Duque. You can go from bar to bar, moving from one with traditional aromas to others with the most avant-garde décor and tastes. It is impossible to spend a few days in Madrid and not partake in one of the most typical local activities: going out for tapas. Tapas are everything, from the most traditional declicacy to the most vanguardist bite, and always washed down with a good wine and enjoying the best company. Here is a complete guide to the best tapas.';

export interface TapasTour {
  name: string;
  description: string;
  phone: string;
  email: string;
}

export const tapasTour: TapasTour = { name: 'Tapas Tour 1', description: 'Fun, relaxed way to explore this exciting city!! Guided walks through the historical centre as we introduce you to the HISTORY, CULTURE, and some of the BEST TAPAS AND WINE in Spain. Also: Spanish Wine Tastings; Cooking Classes; Customised tours of Spain for groups and individuals.', phone: '652 665 862', email: 'simplyspaintours@yahoo.es' };

export interface TapasBar {
  name: string;
  address: string;
  description: string;
}

export const tapasBars: TapasBar[] = [
  { name: 'Taberna Alhambra', address: 'Victoria, 9 (Metro: Sol)', description: 'Two bars under the same ownership, Taberna Alhambra and Venta El Buscon, have genuine Spanish decor and genuine Iberian tapas, such as oil-drenched tuna and albondigas (meatballs), all at affordable prices.' },
  { name: 'Venta el Buscon', address: 'Victoria, 5 (Metro: Sol)', description: 'Right down the street is La Casa del Abuelo, which is still churning out delicious tapas after more than 100 years - don\'t leave without trying the grilled shrimp ali-oli.' },
  { name: 'La Casa del Abuelo', address: 'Victoria, 12 (Metro: Sol)', description: 'Still churning out delicious tapas after more than 100 years - don\'t leave without trying the grilled shrimp ali-oli.' },
  { name: 'El Almendro', address: 'Almendro, 13 (Metro: La Latina)', description: 'After a morning at the Rastro, feed your flea-market appetite here for some huevos estrellados (literally "smashed eggs").' },
  { name: 'Los Huevos de Lucio', address: 'Cava Baja, 30 (Metro: La Latina / Tirso de Molina)', description: 'Go for some huevos estrellados (literally "smashed eggs").' },
  { name: 'Casa Lucas', address: 'Cava Baja, 30 (Metro: La Latina / Tirso de Molina)', description: 'Head next door for their tasty stewed mushrooms and fried seafood.' },
  { name: 'Los Jimenez', address: 'Barbieri, 14 (Metro: Chueca)', description: 'The bright corner bar keeps the free tapas coming, but you must try their flamenquines, an Andalusian combination of fried pork loin and cheese served with dipping sauce.' },
  { name: 'Santander', address: 'Agosto Figueroa, 25 (Metro: Chueca)', description: 'A small hangout with all of their barely-a-euro tapas on display at the counter.' },
  { name: 'La Cerveceria de San Julian', address: 'Alberto Aguilera, 30 (Metro: Arguelles)', description: 'A good choice, with a great mix of students from ICADE and the Compultense, as well as older locals stopping in for their daily slice of tortilla.' },
  { name: 'El Cangrejo', address: 'Amaniel, 25 (Metro: Noviciado)', description: 'Located near Plaza Dos de Mayo, features a wide beer selection to go with your yummy tapas.' },
  { name: 'Albur', address: 'Manuela Malesaña, 15 (Metro: Tribunal)', description: "Albur's menu features tapas from northern Spain, such as roasted red peppers stuffed with cod." },
  { name: 'El Brillante', address: 'Plaza Emperador Carlos V, 8 (Metro: Atocha)', description: 'In the square near the entrance of the Reina Sofia, has a great selection of no-frills tapas, such as tender pulpo a la gallega /Galician-style octopus) and a fantastic fried calamari.' },
];
