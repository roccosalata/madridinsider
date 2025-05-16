
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type Neighborhood = {
  id: string;
  name: string;
  description: string;
  metroStations?: string;
  highlights?: string[];
  character?: string;
  group: string;
};

const neighborhoods: Neighborhood[] = [
  {
    id: "arganzuela",
    name: "Arganzuela",
    description: "Is in the South of the city. It is an old, traditionally working class area with very reasonable rents, but not very attractive from the touristy point of view.",
    metroStations: "Delicias or Legazpi",
    group: "south"
  },
  {
    id: "barrio-del-pilar",
    name: "Barrio del Pilar",
    description: "A residential area, not highly attractive but with reasonable rents and one of Madrid's few shopping malls/centers \"La Vaguada.\"",
    metroStations: "Barrio del Pilar",
    group: "north"
  },
  {
    id: "centro",
    name: "Centro",
    description: "Could be attractive for students who want to live their Madrid experience to the fullest, given that here you can find a lot of cultural activities, night life and tourist attractions, along with an enormous number of restaurants. A large number of classical buildings are currently being refurbished, adding to the flavor of the old quarter.",
    metroStations: "Sol or Callao",
    highlights: ["Cultural activities", "Nightlife", "Tourist attractions", "Restaurants"],
    character: "Historic, Lively",
    group: "central"
  },
  {
    id: "chamartin",
    name: "Chamartin",
    description: "A well communicated area with prices that range from medium to high.",
    metroStations: "Alfonso XII, Prosperidad and Republica Argentina",
    group: "north"
  },
  {
    id: "chamberi",
    name: "Chamberi",
    description: "Another typical student area. It is a very central area and well communicated, with lots of old apartments, most of which have been renovated recently.",
    metroStations: "Alonso Cano, Bilbao, Iglesia",
    character: "Traditional, Student-friendly",
    group: "central"
  },
  {
    id: "chueca",
    name: "Chueca",
    description: "A refuge for \"public sinners\" in the 18th century and a shady haven for drug addicts in the 80's. Now Chueca is one of Europe's finest gay quarters, and currently counts as Madrid's coolest neighborhood. It has become a focal point for the gay community, which has given new life to what was a very run down part of the city. The welcoming plaza at its center and the network of little cafes, bars and clubs that extend outward give it a homey feel. Don't let this hominess fool you, though – it's a big neighborhood attracting all ages and types. The stores and restaurants represent this diversity from cheap kebab joints to exclusive restaurants and from alternative clubs to chichi wine bars.",
    character: "LGBTQ+ friendly, Trendy, Diverse",
    highlights: ["Gay quarter", "Cafes", "Bars", "Clubs", "Restaurants"],
    group: "central"
  },
  {
    id: "las-cortes",
    name: "Las Cortes",
    description: "Plenty of bars and restaurants around these parts, but they're on the pricey side - perhaps thanks to the parliament having its home there.",
    character: "Upscale, Political",
    group: "central"
  },
  {
    id: "cuatro-caminos",
    name: "Cuatro Caminos / Tetuan",
    description: "Is cheap and is not far from el Parque del Retiro, as well as being well communicated. However, being a relatively inexpensive part of the city, it is home to a large number of illegal immigrants, and can be a conflictive area, particularly at night.",
    metroStations: "Cuatro Caminos or Tetuan",
    group: "north"
  },
  {
    id: "fuencarral",
    name: "Fuencarral",
    description: "To the North of Madrid is not central, but the prices are not terribly high, and it is a safe area. Not far away from Barrio del Pilar.",
    metroStations: "Fuencarral and Herrera Oria",
    group: "north"
  },
  {
    id: "gran-via",
    name: "Gran Via",
    description: "Once a financial district, Madrid's main street is lined with bars, restaurants and shops. Check out Museo Chicote, a haunt where Hemingway would drink himself silly. Gran Via is Madrid's \"Main Street\" offering a great cross section of the population – ideal for getting a general sense of this town. The street isn't long but showcases many of the big-name clothing stores, movie theaters, cafes and limited restaurants. Even though the streets are jammed with people, don't forget to look up as the architecture here is one of the big draws.",
    highlights: ["Architecture", "Shopping", "Movie theaters", "Cafes", "Museo Chicote"],
    character: "Bustling, Commercial",
    group: "central"
  },
  {
    id: "hortaleza",
    name: "Hortaleza",
    description: "A little far from the Parque del Retiro but it could be a good area for students with families who are looking for a residential area - apartments here usually have garages and swimming pools. Prices are reasonable, but not cheap. Calle Arturo Soria tends to be somewhat more expensive.",
    metroStations: "Arturo Soria and Mar de Cristal",
    character: "Residential, Family-friendly",
    group: "northeast"
  },
  {
    id: "huertas",
    name: "Huertas",
    description: "The party zone. Walk the streets at night and you'll be accosted by millions of PRs plying you with free drinks in exchange for your custom. Live here at your peril - you'll never get any sleep. Huertas is another twenty-something party neighborhood. Weekend nights the streets are a crush of locals and tourists alike. Differing from self-consciously alternative Malasaña, the Huertas crowd seeks larger venues and tends to dress for the occasion. During the week, the area calms down and you can find some interesting historic venues such as sherry bars and flamenco venues.",
    character: "Nightlife, Young crowd",
    highlights: ["Party neighborhood", "Large venues", "Sherry bars", "Flamenco"],
    group: "central"
  },
  {
    id: "la-latina",
    name: "La Latina",
    description: "This trendy Spanish neighborhood is the place to head on a Sunday afternoon, when the whole of Madrid's young and funky crowd gets out on the street for some liquid refreshments. Perfect in the summer, when the bongo drummers appear from nowhere and everyone seems to be clutching a litre bottle of Spanish cerveza. La Latina is perhaps best described as the older sibling of grungy Malasaña. Many of the above dynamics are present to some extent: there is a festive atmosphere and, once again, plenty of bars and clubs. The primary difference is that the crowd is more thirties-and-up. In place of divey clubs you are more likely to encounter venues with artistic flair or bohemian elegance – many of them very affordable.",
    character: "Trendy, Bohemian",
    highlights: ["Sunday atmosphere", "Bars", "Artistic venues"],
    group: "central"
  },
  {
    id: "lavapies",
    name: "Lavapies",
    description: "The most international neighborhood in Madrid. Despite appearances, some of the best Chinese, Indian and Moroccan restaurants call this barrio home. Lavapés is a unique international blend. Populated by immigrants, many consider it a \"dangerous area\", but residents of the hood often laugh at this designation. Unlike the other zones, the cute shops and trendy bars haven't made headway just yet. The neighborhood is a crowded and often chaotic collection of ethic restaurants - including Indian, Arabic and Senegalese - and local bars. In the warm months Calle Argumosa, with its many terrazas, is an ideal way to spend an day or evening.",
    character: "International, Diverse",
    highlights: ["Ethnic restaurants", "Cultural diversity", "Terrazas on Calle Argumosa"],
    group: "central"
  },
  {
    id: "suburbs",
    name: "Majadahonda, Pozuelo, Aravaca & Las Rosas",
    description: "Another idea is to go to Madrid's suburbs, where flats tend to be newer and less expensive. It is a good option for students who bring their families with them, given that apartments are larger with garages, gardens and swimming pools at quite reasionable prices. These are connected by local trains which link up to the metro at Principe Pio, Atocha, Chamartin, and Nuevos Ministerios, among others.",
    character: "Suburban, Family-friendly",
    group: "suburbs"
  },
  {
    id: "malasana",
    name: "Malasaña",
    description: "Known for its nightlife and very young crowd, Malasaña offers a more grungy vibe than frenetic Chueca. Stocked full of rockers, metal heads and punks. Malasaña is a \"love it or hate it\" neighborhood. If you yearn for the rowdy energetic nightlife, it's for you. Stumbling groups of drunken party kids my break into song or line the curbs drinking and laughing. The quantity of bars and music venues is impressive and if you aren't afraid of crowds, chances are you'll find a place that's just right for you. However, don't let all of this student revelry put you off; by day the barrio is quite different – even tranquil at times. Plaza Dos de Mayo offers great terrazas and there are plenty of interesting restaurants scattered throughout the area.",
    character: "Alternative, Grungy, Young",
    highlights: ["Nightlife", "Music venues", "Plaza Dos de Mayo", "Terrazas"],
    group: "central"
  },
  {
    id: "mirasierra",
    name: "Mirasierra",
    description: "Farther North, is more expensive and you could use a bus, but would be better off using a car. It is a very nice residential area.",
    character: "Upscale, Residential",
    group: "north"
  },
  {
    id: "moncloa",
    name: "Moncloa",
    description: "One of the areas favored by students in the capital, and a large number of university and postgraduate students live and socialize there. The area is also very well communicated thanks to the Moncloa bus terminal.",
    character: "Student area, Well-connected",
    group: "west"
  },
  {
    id: "opera",
    name: "Opera",
    description: "This barrio is home to the Royal Palace, so it's quite touristy. Great for a stroll, but restaurants and cafes here will hit your wallet hard.",
    highlights: ["Royal Palace", "Tourist attractions"],
    character: "Touristy, Expensive",
    group: "central"
  },
  {
    id: "prado",
    name: "Prado",
    description: "It's mainly expensive hotels that line the streets of this area - and of course Madrid's most famous art museum, the Prado. Great for a Sunday wander as you head to the Retiro.",
    highlights: ["Prado Museum", "Hotels", "Near Retiro"],
    group: "central"
  },
  {
    id: "prosperidad",
    name: "Prosperidad",
    description: "Is near Barrio Salamanca and is quite reasonably priced, except for new buildings which tend to be more expensive.",
    metroStations: "Avda de America, Alfonso XIII, Cartagena",
    group: "northeast"
  },
  {
    id: "rastro",
    name: "Rastro",
    description: "Head here for antiques, photographic equipment, and on Sundays, the world-famous Rastro flea market. Watch your wallets and purses though there are plenty of wannabe Fagins on the prowl for an open handbag.",
    highlights: ["Sunday flea market", "Antiques", "Photographic equipment"],
    group: "central"
  },
  {
    id: "retiro",
    name: "Retiro",
    description: "Is another area that is very popular among students. It is a pleasant and near the Parque del Retiro. It is expensive, particularly the main streets, although it is possible to find reasonable rents in large, refurbished apartments.",
    metroStations: "Retiro or O'Donnel",
    highlights: ["Near Retiro Park", "Student area"],
    group: "central"
  },
  {
    id: "salamanca",
    name: "Salamanca",
    description: "The posh area, where you can pick up a fur coat or some designer threads. Expect typically Spanish nightlife complete with a strict dress code policy. Possibly one of the best areas in Madrid due to its central location and close proximity to the Parque del Retiro, but it is also one of the most expensive areas of the city.",
    metroStations: "Avda de America, Goya, Serrano",
    character: "Upscale, Posh, Expensive",
    highlights: ["Designer shopping", "Nightlife", "Near Retiro Park"],
    group: "central"
  },
  {
    id: "sol",
    name: "Sol",
    description: "The geographical - and tourist - center of Madrid and Spain. Sol is unfortunately notorious for street prostitution and pickpockets, as well as being currently blighted by roadworks / construction. Puerta del Sol (an enormous plaza) is a major hub of activity. Locals often use it as a meeting place when unsure which direction the day will take. From here you can easily walk to any of the major neighborhoods, attractions or monuments. The streets radiating off the plaza are full of little shops also making it the beginning of many a shopping excursion.",
    character: "Tourist center, Active",
    highlights: ["Puerta del Sol plaza", "Shopping", "Central meeting point"],
    group: "central"
  },
];

const neighborhoodGroups = [
  { id: "central", name: "Central Madrid" },
  { id: "north", name: "North Madrid" },
  { id: "northeast", name: "Northeast Madrid" },
  { id: "east", name: "East Madrid" },
  { id: "south", name: "South Madrid" },
  { id: "west", name: "West Madrid" },
  { id: "suburbs", name: "Suburbs" },
];

const NeighborhoodGuide = () => {
  const [activeGroup, setActiveGroup] = useState("central");
  
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="pb-2">
        <CardTitle>Madrid Neighborhoods / Barrios Guide</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6">
          Madrid is a city of distinct neighborhoods, each with its own character and charm.
          Explore our guide to Madrid's diverse barrios to find the perfect area for your visit.
        </p>
        
        <Tabs value={activeGroup} onValueChange={setActiveGroup} className="mb-6">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 w-full mb-4">
            {neighborhoodGroups.map((group) => (
              <TabsTrigger key={group.id} value={group.id}>
                {group.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {neighborhoodGroups.map((group) => (
            <TabsContent key={group.id} value={group.id}>
              <div className="grid grid-cols-1 gap-4">
                <Accordion type="multiple" className="w-full">
                  {neighborhoods
                    .filter(neighborhood => neighborhood.group === group.id)
                    .map(neighborhood => (
                      <AccordionItem key={neighborhood.id} value={neighborhood.id}>
                        <AccordionTrigger className="font-semibold">
                          {neighborhood.name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            <p>{neighborhood.description}</p>
                            
                            {neighborhood.metroStations && (
                              <div>
                                <span className="font-medium">Metro: </span> 
                                <span>{neighborhood.metroStations}</span>
                              </div>
                            )}
                            
                            {neighborhood.character && (
                              <div>
                                <span className="font-medium">Character: </span>
                                <span>{neighborhood.character}</span>
                              </div>
                            )}
                            
                            {neighborhood.highlights && (
                              <div>
                                <span className="font-medium">Highlights: </span>
                                <span>{neighborhood.highlights.join(", ")}</span>
                              </div>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default NeighborhoodGuide;
