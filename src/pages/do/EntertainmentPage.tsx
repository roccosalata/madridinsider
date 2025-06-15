
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
    description: 'Rollercoasters, attractions, and fun for all ages.',
    placeholder: 'Details about Madrid\'s theme parks are coming soon!'
  },
  {
    id: 'water-parks',
    title: 'Water Parks',
    icon: <Tent className="h-6 w-6 text-madrid-red" />,
    description: 'Cool off and have a splash at Madrid\'s water parks.',
    placeholder: 'Information on water parks will be available shortly.'
  },
  {
    id: 'zoo-aquarium',
    title: 'Zoo / Aquarium',
    icon: <Zap className="h-6 w-6 text-madrid-red" />,
    description: 'Discover diverse wildlife from around the world.',
    placeholder: 'Zoo and aquarium details will be updated soon.'
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

