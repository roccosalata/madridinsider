
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Music, MapPin, Ticket, Clock, PartyPopper } from 'lucide-react';

const salsaClubs = [
  {
    name: 'Randall',
    metro: 'Plaza de España',
    description: 'It is big, nice, clean, and has a dance floor. It is really spacious and has a large dance floor, and lots of couches to lounge on. It also has two very large bars.',
    coverCharge: 'Yes',
  },
  {
    name: 'El Son',
    metro: 'Sol',
    description: 'This place has one bar, it has a very small dance floor, and doesn´t play the best salsa around. It is more of a pick up joint than anything. But at 5:00am, if you still want to party, El Son is open and is always packed.',
    coverCharge: 'Yes',
  },
  {
    name: 'Azucar',
    metro: 'Atocha Renfe',
    description: 'It is very small and crowded and has a terrible dance floor. The dance floor is small, and then it also has a big pillar right in the middle of the dance floor. It\'s kind of a sleazy joint.',
    coverCharge: 'Yes',
  },
  {
    name: 'Cardamomo',
    metro: 'Sol',
    description: 'Cardamomo being in the heart of the "Huertas" area, is always packed, especially on Saturdays. This place plays a variety of Salsa and Pop Flamenco. It is hard to dance there cause it is really packed. There are 2 bars and the place can get really smoky. It is really lively though, highly suggested you go on a Friday instead of a Saturday.',
    coverCharge: 'No',
  },
];

const nightClubs = [
  {
    name: 'Areia',
    address: 'Hortaleza, 92 (Metro: Alonso Martinez)',
    hours: 'Daily: Noon-3am',
    description: 'If it\'s a "so-hip-it-hurts" atmosphere you\'re after then check out the newly opened Areia. What was once an old Irish bar has been decked out with sofas so comfy they\'re practically beds as well as cool decor and great DJs. It\'s a good place to chill out or neck.',
  },
  {
    name: 'Bash Line',
    address: 'Plaza Callao, 4 (Metro: Callao / Gran Via)',
    hours: 'Wednesdays: midnight-6am',
    description: 'Hip-hop is a much maligned genre in Madrid, but it gets a regular outing on Wednesday nights at Bash Line. There\'s r\'n\'b on the agenda too. Popular with the student population, there\'s an international vibe at these nights.',
  },
  {
    name: 'Black Jack',
    address: 'Metro: Sol',
    coverCharge: 'No',
    description: 'It\'s free to get in so everyone who is looking to hook up with tourists goes to Black Jack. It is full of tourists and Spanish guys. The music is terrible and the dance floor is the size of a bathroom. NO WHERE else to go at 5:00am. It is always packed, sweaty and smoky. It has two floors, each with a bar.',
  },
  {
    name: 'Campus Bar',
    address: 'Paseo Juan XXIII, 22 (Metro: Metropolitano)',
    hours: 'Daily: 6pm-6am',
    description: 'If it\'s a bit of Spanish you\'re after, try Campus Bar. A popular one for students, there are plenty of drinks offers and the music is a touch more española than the other places listed here.',
  },
  {
    name: 'Cartuja',
    address: 'Metro: Sol',
    coverCharge: 'Yes',
    description: 'Cartuja always has a line to get in. It has 2 bars and a funky dance floor. It has a step in the middle of it, which is a guarantee to cause accidents. They play the latest Pop chart hits, even though one time they played a Sevillana, that was weird. it\'s cool and I\'d go again.',
  },
  {
    name: 'Chango',
    address: 'Covarubias, sem-esq Luchana (Metro: Bilbao)',
    hours: 'Friday & Saturday: midnight-6am',
    description: 'If it\'s quality house music you\'re after, Chango is a must. The venue is a converted theater, and the promoters make good use of the stage, with go-gos, break dancers and live musicians accompanying the soulful soundtrack.',
  },
  {
    name: 'Deep',
    address: 'Paseo Hermita del Santo, 48 - Inside shopping center (Metro: Puerto del Angel)',
    hours: 'Friday: midnight-8:30am',
    description: 'One of the hottest nightspots of the moment is the very successful Deep. The DJ roster is impressive, with residents JL Magoya and Juan Sanchez being bolstered by the presence of John Digweed, Angel Molina and Carl Cox to name a few. It goes on until 8:30am, takes place in a great venue and counts on a really up-for-it crowd.',
  },
  {
    name: 'Kapital',
    address: 'Atocha, 125 (Metro: Atocha)',
    hours: 'Friday & Saturday: midnight-6am',
    description: 'Welcome to Madrid\'s super-club. Boasting seven floors, a retractable roof, three dance floors, a karaoke bar and even elevators, Kapital has something for everyone. Expect house, r&b and hip hop, as well as some good, old fashioned cheesy Spanish pop.',
  },
  {
    name: 'Ministry of Sound',
    address: 'Pl Estacion de Chamartin (Metro: Chamartin)',
    hours: 'Saturdays: midnight-6am',
    description: 'A more internationally recognized super-club is to be found every Saturday night at Macumba in the shape of Ministry of Sound. The resident DJs are home grown, but expect to see guest DJs from the Ministry stable passing through. The venue is airy and quite enormous (albeit a bit grubby) and the sound system is one of the best in Madrid.',
  },
  {
    name: 'Mondo',
    address: 'Sala Stella, Arlaban, 7 (Metro: Sevilla)',
    hours: 'Thurs & Sat: 1am-7am',
    description: 'The Mondo crew have been pioneering the now-ubiquitous sound of Berlin electro for the last few years. The musical selection can be a bit limited, but the comfortable club and up-for-it crowd compensate.',
  },
  {
    name: 'OHM',
    address: 'Plaza Callao, 4 (Metro: Callao / Gran Via)',
    hours: 'Friday & Saturday: midnight-6am',
    description: 'Expect tip-top funky house from the ohm djs, and a fun polysexual crowd on the dancefloor. Word got out about Ohm, and what once was a gay night has been invaded by the heteros.',
  },
  {
    name: 'Oui',
    address: 'Marques de Santa Ana, 11 (Metro: San Bernardo)',
    hours: 'Wednesday-Sunday: 10pm-3am',
    description: 'With more character than 3 London Bars put together, Oui is an unmissable stop on your pre-club tour of Madrid. Located in Malasaña, the layout is interesting, the music minimal and spacey, the bar staff super-friendly and the prices reasonable.',
  },
  {
    name: 'Palacio Gaviria',
    address: 'Arenal, 9 (Metro: Sol / Opera)',
    hours: 'Open daily: midnight to 6am',
    description: 'A converted palace with a disco in it. Yes, really. Do your bit for international relations on Thursday nights at International Student Night, when people put on stickers with the name of their country, and get friendly.',
  },
  {
    name: 'Party Ya!',
    address: 'Chesterfield Café, Serrano Jover, 5, esq. Albert Aguilera (Metro: Arguelles)',
    hours: 'Weds: 11:30pm-5am',
    description: 'On Wednesday nights, the Chesterfield Café is transformed into an international fiesta for students, with themed costume parties, drinking games, dance competitions and prize giveaways - all set to the backdrop of booty-shaking hip hop and r&b.',
  },
  {
    name: 'El Perro de la Parte Atrás del Coche',
    address: 'Puebla, 15 (Metro: Callao)',
    hours: 'Tues-Sat: 10pm-4am',
    description: 'Curiously named after those dogs you find in the back windows of cars, this bar plays an even more curious mix of rock, metal, soul, latin, dub, funk and hip hop.',
  },
  {
    name: 'The Room',
    address: 'Arlaban, 7 (Metro: Sevilla)',
    hours: 'Friday & Saturday: 1am-7am',
    description: 'An absolute Madrid classic, this club benefited from a complete facelift last year. The decor is great, the visuals and lighting impressive, the music sublime and the crowd fantastic. Give this one a look.',
  },
  {
    name: 'Sirocco',
    address: 'San Dimas, 3 (Metro: Noviciado)',
    hours: 'Thursday-Saturday: midnight-6am',
    description: 'When all of the house and techno gets too much, Sirocco is what you need. The decor is strictly 60s and the music policy a very open one, with everything from 80s rock to 90s acid jazz and jungle.',
  },
  {
    name: 'Space of Sound',
    address: 'Pl Estacion de Chamartin (Metro: Chamartin)',
    hours: 'Sun: 10am-7pm',
    description: 'Something of a Madrid institution, this one. Opening its doors at 10am every Sunday, Space gets more faithful devotees through the door than the local church. Expect plenty of dancefloor madness at this all-day house sessions, full of those who got up especially for a day in a club, and those who are still going from the night before.',
  },
  {
    name: 'Taboo',
    address: 'San Vicente Ferrer, 23 (Metro: Tribunal)',
    hours: 'Daily: 10:30pm-6am',
    description: 'Check out their website www.taboo-madrid.com to find out what\'s on because you are bound to find something you like. Expect plenty of live acts showcasing reggae, Asian influences, ethnic sounds, jazz, funk and electronica. Something very different in a central location, this one you won\'t want to miss.',
  },
  {
    name: 'Twist',
    address: 'Sala Okama, Santa Engracia, 17 (Metro: Bilbao)',
    hours: 'Thurs, midnight to 6am',
    description: 'If drum \'n\' bass attracts a cool urban crowd in the UK, in Spain it pulls in a grungy lot. Expect plenty of piercings, pineapple-headed dreadlocked youngsters and more tattoos than you can wave a needle at.',
  },
  {
    name: 'Villa Rosa',
    address: 'Metro: Sol',
    coverCharge: 'Yes',
    description: 'Villa Rosa is one of those places you go to at like 4:30 in the morning cause you are just not ready to go home yet. The only thing is that this place does charge. Villa Rosa is big and spacious, but the dance floor is small and elevated so people fall off often, they play the latest chart hits and have 2 bars.',
  },
   {
    name: 'Joy Eslava',
    address: 'Calle del Arenal, 11 (Metro: Sol)',
    description: 'A very fun and famous venue located in a former 19th-century theater. It\'s a popular spot for both locals and tourists.',
  },
];


const Nightlife = () => {
  return (
    <Layout>
      <HeroSection
        title="Nightlife & Bars"
        subtitle="Discover Madrid's vibrant nightlife, from energetic salsa clubs to trendy bars and super-clubs."
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Music className="h-8 w-8 text-madrid-red" />
            Salsa Dancing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {salsaClubs.map(club => (
              <Card key={club.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle>{club.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 mb-4">{club.description}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> <strong>Metro:</strong> {club.metro}</p>
                    <p className="flex items-center gap-2"><Ticket className="h-4 w-4 text-madrid-red" /> <strong>Cover Charge:</strong> {club.coverCharge}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <PartyPopper className="h-8 w-8 text-madrid-red" />
            Night Clubs & Dancing
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {nightClubs.map(club => (
              <Card key={club.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle>{club.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 mb-4">{club.description}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    {club.address && <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> {club.address}</p>}
                    {club.hours && <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-madrid-red" /> <strong>Hours:</strong> {club.hours}</p>}
                    {club.coverCharge && <p className="flex items-center gap-2"><Ticket className="h-4 w-4 text-madrid-red" /> <strong>Cover Charge:</strong> {club.coverCharge}</p>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Nightlife;
