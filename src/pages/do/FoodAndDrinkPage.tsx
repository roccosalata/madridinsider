import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Utensils, CalendarDays, Clock, Phone, Mail, Globe, MapPin, IceCreamCone, Wine, Vegan, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const cheapEats = [
  { name: 'El Tigre', address: 'Infantas, 30 (Metro: Chueca / Banco de España)', description: "If you can elbow your way through the crowds to the bar, you'll find beer or cider for €1.50, immediately followed by a plate of hot tapas: croquettes, patatas bravas and tostadas galore. Amazingly, the bar staff never repeat the dishes that accompany each round." },
  { name: 'Maoz', address: 'Mayor, 4 (Metro: Sol)', description: 'Famished and impoverished vegetarians need look no further than Maoz, where nothing on the menu is over €5. Pick up a falafel pita and cram it with as many fresh toppings and sauces from the DIY bar as you can handle. Seating is limited, so stroll into the nearby Plaza Mayor.' },
  { name: 'Cervecería 100 Montaditos', address: 'Mayor, 22 (Metro: Sol) & Fuencarral, 96 (Metro: Bilbao)', description: 'This chain offers a list of 100 small sandwiches, all at just €1. Fillings range from basic jamón to fresh cheese and caviar. Two or three make a meal, and are served with chips / crisps.' },
  { name: 'Casa Camuñas', address: 'Alonso Cano, 101 (Metro: Nuevos Ministerios) & Juan de Olías, 39 (Metro: Estrecho)', description: 'Another affordable Spanish chain, Casa Camuñas offers generous tostas in the €2 to €3 range and delicious patato dishes topped with jamón, chorizo and eggs for around €6.' },
  { name: 'La Taberna de la Tía Cebolla', address: 'Calle de la Cruz, 27 (Metro: Sol)', description: 'Perched on the hill between Sol and Plaza Santa Ana, La Tía Cebolla (auntie onion) serves fantastic tortilla española (€4) and generous slabs of homemade empanada (tuna or mincemeat filled pie) for just €2.50. Plus, the friendly waiters bring fresh bread, chorizo and cheese free with each drink.' },
];

const menuDelDia = [
  { name: 'Syvarya', address: 'Avda Brazil, 19 (Metro: Cuzco)', schedule: 'Monday-Friday 1pm-4pm' },
  { name: 'Vianvi', address: 'Principe, 15 (Metro: Sol)', schedule: 'Monday-Friday 1pm-9pm', phone: '914-293-868' },
  { name: 'New Pub Carlota Cafetería', address: 'Orense, 18 (Metro: Nuevos Ministerios)', schedule: 'Monday-Friday 1pm-9pm', phone: '915-550-483' },
  { name: 'Carosal', address: 'Finistrre, 19 (Metro: Barrio del Pilar)', schedule: 'Monday-Friday 1pm-4pm', phone: '917-399-068' },
  { name: 'Cafeteria Cerveceria Esquerdo', address: 'Doctor Esquerdo, 16 (Metro: Goya)', schedule: 'Monday-Friday 1:00 PM - 3:00', phone: '914-019-199' },
  { name: 'Mayke', address: 'Corredera Baja de San Pablo, 31 (Metro: Callao)', schedule: 'Monday-Friday 1:00 PM - 4:00 PM', phone: '915-316-846' },
  { name: 'Orly', address: 'Pilar de Zaragoza, 95 (Metro: Ave. de America)', schedule: 'Monday-Friday 1:00 PM - 4:00 PM', phone: '917-260-044' },
  { name: 'La Cervecera de Gaztambide', address: 'Gaztambide, 50 (Metro: Islas Filipinas)', schedule: 'Seated at the Bar. Monday-Friday 1:00 PM - 4:00 PM' },
];

const diners = [
  { name: 'Chesscafe Company', address: 'Paseo de las Acacias, 25 (Metro: Acacias)', description: 'Cappuccino & Sandwich Bar. Muffins, Bagels, Sandwiches, coffee, Donuts, Cake, etc.', schedule: 'Sunday-Thursday: 8am-11pm. Friday, Saturday, Holidays: 8am-Midnight', website: 'www.echesscafe.com', email: 'alamb@echesscafe.com', phone: '915-303-376' },
  { name: 'VIPS', address: 'Various locations', description: '' },
  { name: 'Nebraska', address: 'Various locations', description: '' },
  { name: 'TGIF', address: 'Gran Via (Metro: Santo Domingo / Plaza España) & Paseo de la Habana (Metro: Santiago Bernabeau)', description: '' },
];

const iceCreamParlours = [
  { name: 'Bajo Cero', address: 'Glorieta de Quevedo, 6', phone: '(+34) 902 11 33 77', description: "A new and revolutionary concept of traditional ice-cream parlour and patisserie arrived in Madrid last summer. An exclusive venue, with avant-garde decoration created by interior designer Tomás Alía, where customers can taste over 250 varieties of ice-creams made with the most exquisite raw materials. These delicacies are one hundred per cent natural and healthy (they are all low fat) and can be enjoyed in the diaphanous, comfortable and minimalist venue. The favourites flavours are: Mojito, raw almond with vanilla from Tahiti, strawberry with rose petal tea, mandarin sorbet and Mascarpone with macerated figs. Bajo Cero's offer is completed with its delicious patisserie that presents refined textures and renovated aesthetics." },
  { name: 'Giangrossi', address: 'Alberto Aguilera, 1 - Velázquez, 44 - Cava Baja, 40 - Sevilla, 4 - Arturo Soria, 200 - CC. La Esquina del Bernabéu - CC. Plenilunio - Hipódromo de la Zarzuela - Plaza de los Ciervos, s/n', phone: '(+34) 902 444 130', description: "All of the nine Giangrossi establishments there are in Madrid make customers feel at home whilst enjoying original and tasty ice-creams made by Argentinean chef Martiniano Molina. Comfortable sofas, piped music, excellent lighting and free wi-fi connection are just some of the luxuries the company offers. With over 45 refreshing flavours to choose from, the most summery are green tea, mandarin and carrot, lemon and lime with ginger or yoghurt with Macadamia nuts. They also serve sandwiches, cakes, chocolates and Argentinean alfajores. The laziest customers can take advantage of Giangrossi's home delivery service." },
  { name: 'Livorno', address: 'Plaza del Rollo, 2', phone: '(+34) 91 307 16 58', description: "One of the most historic ice-cream parlours in Madrid, Livorno has been serving ice-cream for over 25 years, catering for all tastes, even for the Spanish Royal Household. Flavours like lollipop, chocolate mousse with banana, imperial strawberry, violet, chewing gum, cherry... A whole selection of flavours for the most sweet-toothed customers and soya, flower and tropical fruit flavours that are suitable for diabetics and coeliacs. Sixty different ice-creams and one star flavour: dulce de leche, a caramel spread that is the favourite in this small, cosy venue that has become a Madrid classic." },
  { name: 'Bruin', description: "Traditional methods and quality ingredients. These two premises marked the philosophy of this venue that was established 34 years ago. Italian ice-cream parlour Bruin offers about 35 flavours, from classics like chocolate, dulce de leche (caramel spread) or stracciatella to the most daring and tempting proposals like olive oil, Idiazábal cheese, cider, pacharán or Bayley's. They also make sugar-free ice-creams." },
  { name: 'Palazzo', address: 'Puerta del Sol, 11 - Gran Vía, 32 - Bailén, 11 - Carmen, 27 - Luchana, 9 - Bravo Murillo, 127 - Goya, 49 - Oca, 110 - Quero, 63 - Avenida de la Albufera, 11', phone: '(+34) 91 532 26 42', description: "This ice-cream chain has been sweetening Madrid summers for over 30 years. Year after year, the list increases with delicious innovations, without forgetting traditional flavours: lemon, blackberry, raspberry, melon, strawberry, banana, truffle, straciattella, rice pudding, coconut, leche merengada (egg whites, cinnamon and sugar), turrón (ground almond candy), mint, whisky, sherry, caramel, pistachio, chocolate with cognac... and even sugar-free vanilla to keep in shape. Outdoor seating available." },
  { name: 'Gelati e Frullati', address: 'Avenida de Felipe II, 8', phone: '(+34) 91 577 09 52', description: "Surprising Italian recipes made by renowned chef Fabio Morisi. His traditional smooth ice-creams, mousses, Italian coffees and natural juices can be enjoyed in the summer in the busy outdoor area. Don't miss these ice-cream flavours: biscuit, Mascarpone cheese or yoghurt." },
  { name: 'Napoli', address: 'Avenida Ciudad de Barcelona, 19 - Avenida Monte Igueldo, 19 - Carlos Martín Álvarez, 81', phone: '(+34) 91 551 20 58', description: "Rice pudding, vanilla with Boubbon pods, white chocolate with liquorice, Roquefort cheese, yoghurt with blueberries, fresh Burgos cheese, Jamaican chocolate, Reineta apple, Philadelphia cheese with raspberry... Napoli has a selection of over 50 flavours, so choosing just one is almost impossible. Classical decoration and summer flavours: Gorgonzola, mint, rosemary and yoghurt with dulce de leche (caramel spread)." },
  { name: 'Los Alpes', address: 'Arcipestre de Hita, 6', phone: '(+34) 91 543 94 46', description: "Since 1950, Madrid's oldest traditional ice-cream parlour has been plumping up the menu with a tempting variety of flavours, ranging from the most traditional to the most innovative. The lemon sorbet is excellent." },
  { name: 'Poncelet', address: 'Argensola, 27', phone: '(+34) 91 308 02 21', description: "This venue is not an ice-cream parlour, but it is worth visiting. The shop specialises in marketing high quality cheeses. Traditional ice-creams made with Gouda with truffle, Goat's cheese with honey and pine kernels, Pinot Noir with shavings of Parmegiano Reggiano, Buffalo Mozzarella, Fourme D'ambert and Torta de Barros that you can enjoy at home as a desert or to accompany savoury dishes." },
];

const tapasIntro = '“A small portion of food that is served to accompany a drink”. This is the way in which the Dictionary of the Spanish Language defines this concept which, although increasingly popular all over the world, was born and developed here. Tapas, however, are much more than just this. They are a way of understanding gastronomy, as well as a way to interact with other people. Going for tapas is a social event that brings together great conversation, an agreement on exactly what should be ordered and the pleasures of the palate. In essence, going for tapas involves going from bar to bar, trying the specialities offered at each one. You can find great bars, taverns and restaurants all over Madrid in which to enjoy tapas, but don’t miss areas such as La Latina and Conde Duque. You can go from bar to bar, moving from one with traditional aromas to others with the most avant-garde décor and tastes. It is impossible to spend a few days in Madrid and not partake in one of the most typical local activities: going out for tapas. Tapas are everything, from the most traditional declicacy to the most vanguardist bite, and always washed down with a good wine and enjoying the best company. Here is a complete guide to the best tapas.';
const tapasTour = { name: 'Tapas Tour 1', description: 'Fun, relaxed way to explore this exciting city!! Guided walks through the historical centre as we introduce you to the HISTORY, CULTURE, and some of the BEST TAPAS AND WINE in Spain. Also: Spanish Wine Tastings; Cooking Classes; Customised tours of Spain for groups and individuals.', phone: '652 665 862', email: 'simplyspaintours@yahoo.es' };
const tapasBars = [
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

const vegetarianRestaurants = [
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


const FoodAndDrinkPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Food & Dining"
        subtitle="Explore Madrid's vibrant culinary scene"
      />
      
      <div className="container mx-auto py-12 px-4 space-y-16">
        
        {/* Cheap Eats */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Utensils className="h-8 w-8 text-madrid-red" />
            Cheap Eats
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cheapEats.map(item => (
              <Card key={item.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2 pt-1"><MapPin className="h-4 w-4" />{item.address}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Menú del día */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <CalendarDays className="h-8 w-8 text-madrid-red" />
            Menú del Día
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuDelDia.map(item => (
              <Card key={item.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> {item.address}</p>
                  <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-madrid-red" /> {item.schedule}</p>
                  {item.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-madrid-red" /> {item.phone}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Diners */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Utensils className="h-8 w-8 text-madrid-red" />
            Diners
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {diners.map(item => (
              <Card key={item.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-2 text-sm text-gray-600">
                  {item.address && <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> {item.address}</p>}
                  {item.description && <p className="text-gray-700 mb-2">{item.description}</p>}
                  {item.schedule && <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-madrid-red" /> {item.schedule}</p>}
                  {item.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-madrid-red" /> {item.phone}</p>}
                  {item.email && <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-madrid-red" /> <a href={`mailto:${item.email}`} className="text-madrid-red hover:underline">{item.email}</a></p>}
                  {item.website && <p className="flex items-center gap-2"><Globe className="h-4 w-4 text-madrid-red" /> <a href={`http://${item.website}`} target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">{item.website}</a></p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Ice Cream */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <IceCreamCone className="h-8 w-8 text-madrid-red" />
            Ice Cream Parlours
          </h2>
           <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">The best ice-creams in Madrid are a refreshing option with their creativity, natural ingredients and careful home-made methods. In long-established patisseries, under a sunshade in a terraza (outdoor seating areas) or in modern and avant-garde atmospheres. Enjoying one of the creamy frozen temptations prepared by the best traditional ice-cream parlours in Madrid is the most gratifying way of defying the heat. There are infinite flavours, from the most traditional to the most unusual and attractive. A genuine culinary pleasure that you won´t be able to resist.</p>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {iceCreamParlours.map(item => (
              <Card key={item.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 mb-4">{item.description}</p>
                   <div className="space-y-2 text-sm text-gray-600">
                    {item.address && <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> {item.address}</p>}
                    {item.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-madrid-red" /> {item.phone}</p>}
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tapas */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Wine className="h-8 w-8 text-madrid-red" />
            Tapas
          </h2>
          <Card className="mb-8 shadow-lg">
            <CardContent className="pt-6">
              <p className="text-gray-700">{tapasIntro}</p>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <Card key={tapasTour.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader><CardTitle>{tapasTour.name}</CardTitle></CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 mb-4">{tapasTour.description}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-madrid-red" /> {tapasTour.phone}</p>
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-madrid-red" /> <a href={`mailto:${tapasTour.email}`} className="text-madrid-red hover:underline">{tapasTour.email}</a></p>
                </div>
              </CardContent>
            </Card>
            {tapasBars.map(item => (
              <Card key={item.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader><CardTitle>{item.name}</CardTitle></CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> {item.address}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vegetarian */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Vegan className="h-8 w-8 text-madrid-red" />
            Vegetarian Restaurants & Grocery Stores
          </h2>
           <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">Vegetarian food is gaining more and more popularity in Madrid. Recently, more and more restaurants that promote vegetarian cuisine have opened and offer elaborately prepared recipes which yield innovative and very tasty dishes combining basic ingredients such as fresh fruits, vegetables, seitan or tofu.</p>
           <div className="text-center mb-12">
            <Button asChild>
              <Link to="/living-in-madrid/shopping-services/health-food-stores" className="flex items-center">
                Find Health Food & Grocery Stores
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vegetarianRestaurants.map(item => (
              <Card key={item.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader><CardTitle>{item.name}</CardTitle></CardHeader>
                <CardContent className="flex-grow space-y-2 text-sm text-gray-600">
                  {item.address && <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> {item.address}</p>}
                  {item.description && <p className="text-gray-700 mb-2">{item.description}</p>}
                  {item.hours && <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-madrid-red" /> {item.hours}</p>}
                  {item.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-madrid-red" /> {item.phone}</p>}
                  {item.email && <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-madrid-red" /> <a href={`mailto:${item.email}`} className="text-madrid-red hover:underline">{item.email}</a></p>}
                  {item.website && <p className="flex items-center gap-2"><Globe className="h-4 w-4 text-madrid-red" /> <a href={`http://${item.website}`} target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">{item.website}</a></p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default FoodAndDrinkPage;
