import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Cable, FerrisWheel, Tent, Zap, Dices, Ticket, Music, Telescope, Sparkles, VenetianMask } from 'lucide-react';

// Data from FlamencoVenuesCard
const flamencoVenues = [
  { name: "Las Carboneras", address: "Pl. Conde de Miranda, 1 (Metro: Sol)", hours: "Mon-Thurs 9pm-10:30pm; Fri-Sat 8:30pm-11pm", phone: "91 542 8677", website: null, email: null },
  { name: "Cardamomo", address: "Calle de Echegaray, 15", hours: "22:30 to 3:30", phone: "91 369 0757", website: "http://www.cardamomo.es", email: null },
  { name: "El Juglar", address: "Lavapies, 37 (Metro: Lavapies)", hours: "Sundays: 10pm; Classes available", phone: "91 528 4381", website: null, email: "anaccarrasco@hotmail.com" },
  { name: "Clan", address: "Ribera de Curtidores, 30 (Metro: Embajadores)", hours: "Mon-Thurs call for hours, Fri & Sat 13:00-3:00; Sun from noon", phone: "91 528 84 01", website: "http://www.osclan.com/", email: null },
  { name: "Cafe de Chinitas", address: "Torija, 7 (Metro: Santo Domingo)", hours: "From 9:30pm", phone: "915-471-502", website: null, email: null },
  { name: "Las Tablas. Nuevo Espacio Escenico", address: "Plaza España, 9 (Metro: Plaza España)", hours: "Mon-Sun 7pm-1am", phone: "91 542 0520", website: "https://lastablasmadrid.com", email: null },
  { name: "Casa Patas", address: "Cañizares, 10 (Metro: Anton Martin)", hours: "From 8pm", phone: "913-690-496", website: null, email: null },
  { name: "Corral de la Moreria", address: "Moreria, 17 (Metro: Opera)", hours: "From 9:30pm", phone: "913-658-446", website: null, email: null },
  { name: "Corral de la Pacheca", address: "Juan Ramon Jimenez, 26 (Metro: Cuzco)", hours: "From 9pm", phone: "913-592-660", website: "http://www.corraldelapacheca.com", email: null },
  { name: "Torres Bermejas", address: "Mesonero Romanos, 11 (Metro: Gran Via)", hours: "From 9:30pm", phone: "915-323-322", website: null, email: null }
];

// Data from MagicComedyCard
const magicComedyVenues = [
  { name: "Houdini Sala de Magia", address: "Garcia Luna, 13 (Metro: Cruz del Rayo)", website: "https://www.houdinimadrid.com", phones: ["91 416 4274", "91 448 9458"] },
  { name: "Giggling Guiri Comedy Club", address: "Teatro Alfil - Pez, 10 (Metro: Noviciado)", website: "https://www.comedyinspain.com" },
  { name: "Magnus Bar", address: "San Marcos, 28 (Metro: Chueca)", hours: "Thurs, Fri & Sun: Midnight-2am" },
];

// New data for Live Theater
const liveTheaterVenues = [
    { name: "El Canto de la Cabra", address: "San Gregorio, 8 (Metro: Chueca)", details: "El canto is one of Madrid's most experimental theaters with works by contemporary writers, both Spanish and foreign. The theater is intimate with a capacity of just 70 and in the summer there are outdoor performances in the adjoining square.", phone: "913-104-222" },
    { name: "La Cuarta Pared", address: "Ercilla, 17 (Metro: Embajadores)", details: "With lots of space and sometimes daring programming, the Cuarta Pared is a great alternative venue. They also run a parallel season of theater for children.", phone: "915-172-317" },
    { name: "Ensayo 100", address: "Raimundo Lulio, 20 (Metro: Bilbao)", details: "Founded by an Argentine, the Ensayo is generally considered an intellectual fringe venue; it occasionally stages English theater.", phone: "914-479-486" },
    { name: "Teatro Alfil", address: "Pez, 10 (Metro: Noviciado)", details: "This small, cozy theater, well known for its risky, wacky productions gives playgoers a chance to drink during the performance with a bar right next to the stage.", phone: "915-215-827" },
    { name: "Teatro Pradillo", address: "Pradillo, 12 (Metro: Concha Espina)", details: "A primary participant in the Festival de Otoño, the Pradillo is known for its consistently outstanding performances - including a lot of puppet theater - and its lobby art gallery.", phone: "914-169-011" },
    { name: "Sala Triangulo", address: "Zurita, 20 (Metro: Lavapies)", details: "Often premiering new actors and writers, this is one of Madrid's best alternative theaters.", phone: "915-306-891" },
    { name: "Abadia", address: "Fernandez de los Rios, 42 (Metro: Quevedo)", details: "One of Madrid's newest theaters, the Abadia offers outstanding theatrical and dance performances as well as poetry recitals and chamber concerts.", phone: "914-481-627" },
    { name: "Albeniz", address: "Paz, 11 (Metro: Sol)", details: "The cornerstone of Madrid theater plays a central role in the city's theater and dance festivals. Also of note is their ten-year collaboration with the National Ballet of Cuba.", phone: "915-318-311" },
    { name: "Teatro de la Comedia", address: "Principe, 14 (Metro: Sevilla)", details: "This venue offers classical Spanish theater at its best. The company puts on only three productions a year, but they are considered some of Spain's finest.", phone: "915-214-931" },
    { name: "Teatro Español", address: "Principe, 25 (Metro: Seville)", details: "The Teatro Español was one the site of the Corral del Principe, a theater which dates from 1583 in which many of Lope de Vega's plays premiered. The current theater was built in 1745 and is one of the most elegant in Madrid.", phone: "914-296-297" },
    { name: "Teatro de Madrid", address: "Ave. de la Ilustracion (Metro: Barrio del Pilar)", details: "A beautiful modern theater, recently built by the city council, this is an ideal venue for ballet and Spanish dance.", phone: "917-301-750" },
    { name: "Teatro Real", address: "Plaza de Oriente (Metro: Opera)", details: "Madrid's famed opera house first opened in 1850. It was closed for renovation in 1987, and only just came back into business in 1997. The fruits of the lengthy renovation were well worth the wait.", phone: "915-160-606" },
    { name: "Wonderland Theater Productions", address: "Teatro Calderón: C/ Atocha, 18 & Teatro Mayor: C/ Mayor, 6 (Metro: Sol)", details: "Enjoy all the performances by the WONDERLAND GROUP, the biggest producer of children's theater and family entertainment, by using your Madrid Card and also enjoy the great prices! The Lunnis, the Tweenies, Garfield, Spiderman live, Merlin the Magician or Alice in Wonderland are just some of the productions performed by WONDERLAND. Check billboards and enjoy an afternoon performance with a fairy-tale ending. Websites: www.teatromayor.com, www.teatrocalderon.com, www.elpaisdelasmaravillas.com", phone: "916 376 685" },
];

const entertainmentSections = [
  {
    id: 'teleferico',
    title: 'Teleférico / Cable Car',
    icon: <Cable className="h-6 w-6 text-madrid-red" />,
    address: 'Paseo del Pintor Rosales, s/n (Metro: Arguelles)',
    description: `A sky lift ride that goes through the Parque del Oeste, la Rosaleda, the Principe Pio railway station, the famous hermitage of San Antonio de la Florida, with its twin and the Manzanares river is the first thing that calls your attention. While enjoying the panoramic views, you can also see the Ministry of the Air building, the Egyptian Temple of Debod, the skyscrapers of Plaza de España, the famous Torrespaña tower, the Palacio de Oriente and the Campo del Moro Gardens, the Almudena Cathedral, and the San Francisco el Grande church with its huge dome. And when flying over the Casa de Campo, you can see the immense expanse of the landscape, the spices, and the vegetation, surrounded by the entertainment facilities of Lago and Parque de Atracciones.`,
    hours: 'Spring-Summer: Starting 11:00 AM, Fall-Winter: Starting 12:00 noon',
    website: 'www.teleferico.com',
    email: 'terosa@teleferico.com',
    phone: '915-417-450 / 915-411-118',
  },
  {
    id: 'bullfights',
    title: 'Bullfights – Plaza de Toros de las Ventas',
    icon: <Ticket className="h-6 w-6 text-madrid-red" />,
    description: 'Spain’s most iconic bullring hosting regular bullfights, especially during San Isidro festival (spring). Tickets can be hard to get for the biggest festivals, plan ahead!',
    address: 'Alcala, 237 (Metro: Ventas)',
    website: 'https://www.las-ventas.com',
    phone: '91 356 2200',
  },
  {
    id: 'flamenco-shows',
    title: 'Flamenco Shows & Tablaos',
    icon: <Music className="h-6 w-6 text-madrid-red" />,
    description: 'Madrid is the world capital of Flamenco! Below are some highly recommended venues for music, dance, and tapas:',
    venues: flamencoVenues,
  },
  {
      id: 'live-theater',
      title: 'Live & Alternative Theater',
      icon: <VenetianMask className="h-6 w-6 text-madrid-red" />,
      description: 'Madrid boasts a rich and diverse theater scene, from grand classical stages to intimate, experimental venues. Below are some recommended theaters.',
      venues: liveTheaterVenues,
  },
  {
      id: 'planetarium-imax',
      title: 'Planetarium & IMAX Madrid',
      icon: <Telescope className="h-6 w-6 text-madrid-red" />,
      subSections: [
          {
              title: "Planetario de Madrid",
              details: [
                  'Parque Tierno Galvan, 28045 (Metro: Mendez Alvaro)',
                  'Modern exhibitions and Cosmos observation for all ages.',
                  'Tues-Fri: 5:30 PM & 6:45 PM; Sat/Sun/Holidays: 11:30 AM, 12:45 PM, 5:30 PM, 6:45 PM, 8:00 PM',
                  'Closed Mondays'
              ],
              website: 'https://www.planetmad.es',
              phone: '914-673-898'
          },
          {
              title: 'IMAX Madrid',
              details: [
                  'Parque Tierno Galvan, Meneses, S/N, 28045 (Metro: Mendez Alvaro)',
                  'The most advanced Large Scale Cinema in history. Three projection systems: Imax, Omnimax, Imax 3D',
                  '11:00 AM - 10:15 PM, open year round'
              ],
              website: 'https://www.imaxmadrid.com',
              email: 'imaxmdr@imaxmadrid.com',
              phone: '914-674-800'
          }
      ]
  },
  {
    id: 'magic-comedy',
    title: 'Magic & Comedy Clubs',
    icon: <Sparkles className="h-6 w-6 text-madrid-red" />,
    description: 'Madrid features a vibrant magic and comedy scene. Here are some recommended clubs and venues:',
    venues: magicComedyVenues,
  },
  {
    id: 'casinos-gambling',
    title: 'Casinos & Gambling',
    icon: <Dices className="h-6 w-6 text-madrid-red" />,
    description: 'Casino Gran Madrid offers a wide variety of games including poker, roulette, blackjack, and 170+ slot machines. Conditions for admission: Persons over 18 years of age. A special offer for admission plus a drink is available for 6 euros.',
    address: 'Autovía A 6, Km 29. Free buses from Plaza de España and Plaza de Colón.',
    hours: '4:00 p.m. - 5:00 a.m. (until 6:00 a.m. on Fridays, Saturdays and holiday eves)',
    phone: '900 900 810 / 91-856-1100',
    website: 'www.casinogranmadrid.es',
    placeholder: 'For documentation details, please call or inquire at your hotel.',
  },
  {
    id: 'theme-parks',
    title: 'Theme Parks',
    icon: <FerrisWheel className="h-6 w-6 text-madrid-red" />,
    description: 'Parque de Atracciones de Madrid is one of Spain\'s leading theme parks. Located in the Casa de Campo, it offers a wide variety of roller coasters, water rides, and shows for all ages.',
    address: 'Casa de Campo, s/n (Metro: Batán)',
    website: 'https://www.parquedeatracciones.es',
    phone: '912 00 07 95',
  },
  {
    id: 'water-parks',
    title: 'Water Parks',
    icon: <Tent className="h-6 w-6 text-madrid-red" />,
    description: 'Aquopolis Villanueva de la Cañada is a massive water park near Madrid, perfect for cooling off during the summer. Features a wide range of slides, pools, and relaxation areas. Typically open from June to September.',
    address: 'Av. de la Dehesa, s/n, 28691 Villanueva de la Cañada',
    website: 'https://vca.aquopolis.es',
    phone: '918 15 69 11',
  },
  {
    id: 'zoo-aquarium',
    title: 'Zoo / Aquarium',
    icon: <Zap className="h-6 w-6 text-madrid-red" />,
    description: 'The Zoo Aquarium de Madrid, located in the Casa de Campo, is one of the largest zoos in Spain. It features a zoo, aquarium, dolphinarium, and aviary, housing over 6,000 animals from 500 different species.',
    address: 'Casa de Campo, s/n (Metro: Casa de Campo)',
    website: 'https://www.zoomadrid.com',
    phone: '911 54 74 79',
  }
];

const EntertainmentPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Entertainment & Shows in Madrid"
        subtitle="Explore theme parks, zoos, casinos, live shows, and more exciting activities."
      />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Madrid's Entertainment Scene</h1>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {entertainmentSections.map((section) => (
            <Card key={section.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  {section.icon}
                  {section.title}
                </CardTitle>
                {section.address && <CardDescription>{section.address}</CardDescription>}
              </CardHeader>
              <CardContent className="flex-grow">
                {section.description && <p className="text-gray-700 mb-3">{section.description}</p>}
                
                {section.subSections && (
                  <div className="space-y-4">
                    {section.subSections.map(sub => (
                      <div key={sub.title}>
                        <h4 className="font-semibold text-base mt-2">{sub.title}</h4>
                        <ul className="text-sm space-y-1 mt-1">
                          {sub.details?.map((detail, index) => <li key={index}>{detail}</li>)}
                        </ul>
                        {sub.phone && <p className="text-sm text-gray-600 mt-1"><strong>Phone:</strong> {sub.phone}</p>}
                        {sub.website && <p className="text-sm text-gray-600"><a href={sub.website.startsWith('http') ? sub.website : `http://${sub.website}`} target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">Visit Website</a></p>}
                        {sub.email && <p className="text-sm text-gray-600"><strong>Email:</strong> <a href={`mailto:${sub.email}`} className="text-madrid-red hover:underline">{sub.email}</a></p>}
                      </div>
                    ))}
                  </div>
                )}
                
                {section.venues && (
                  <div className="space-y-3 max-h-60 overflow-y-auto mt-2 pr-2">
                    {section.venues.map((venue: any) => (
                      <div key={venue.name} className="border rounded px-3 py-2 bg-muted/50 text-sm">
                        <div className="font-medium">{venue.name}</div>
                        <div className="text-xs">{venue.address}</div>
                        {venue.details && <p className="text-xs text-gray-600 mt-1">{venue.details}</p>}
                        {venue.hours && <div className="text-xs"><strong>Hours:</strong> {venue.hours}</div>}
                        {venue.phone && <div className="text-xs"><strong>Tel.:</strong> {venue.phone}</div>}
                        {venue.phones && <div className="text-xs"><strong>Tel.:</strong> {venue.phones.join(' / ')}</div>}
                        {venue.website && <a href={venue.website.startsWith('http') ? venue.website : `http://${venue.website}`} target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline text-xs">Visit Website</a>}
                        {venue.email && <a href={`mailto:${venue.email}`} className="text-madrid-red hover:underline text-xs">Send Email</a>}
                      </div>
                    ))}
                  </div>
                )}

                {section.hours && !section.subSections && <p className="text-sm text-gray-600 mb-1"><strong>Hours:</strong> {section.hours}</p>}
                {section.phone && !section.venues && <p className="text-sm text-gray-600 mb-1"><strong>Phone:</strong> {section.phone}</p>}
                {section.website && !section.subSections && !section.venues && <p className="text-sm text-gray-600 mb-1"><strong>Website:</strong> <a href={section.website.startsWith('http') ? section.website : `http://${section.website}`} target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">{section.website.replace(/^https?:\/\//, "")}</a></p>}
                {section.email && <p className="text-sm text-gray-600"><strong>Email:</strong> <a href={`mailto:${section.email}`} className="text-madrid-red hover:underline">{section.email}</a></p>}
                
                {section.placeholder && <p className="text-gray-500 text-sm italic mt-4">{section.placeholder}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
         <Card className="mt-8 shadow-lg bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">Looking for More Parks & Attractions?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-2">
              For a comprehensive directory of theme parks, zoos, aquariums, and water parks in Madrid and across Spain, check out Parques Reunidos.
            </p>
            <a href="http://www.parquesreunidos.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-madrid-red hover:underline">
              Visit www.parquesreunidos.com →
            </a>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default EntertainmentPage;
