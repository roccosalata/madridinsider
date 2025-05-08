
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Essentials = () => {
  return (
    <Layout>
      <HeroSection 
        title="Essential Madrid" 
        subtitle="Everything you need to know for your visit to Madrid" 
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Madrid at a Glance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><strong>Population:</strong> ~3.4 million (city), ~6.7 million (metropolitan area)</li>
                  <li><strong>Language:</strong> Spanish (Castilian)</li>
                  <li><strong>Currency:</strong> Euro (€)</li>
                  <li><strong>Time Zone:</strong> Central European Time (CET/CEST)</li>
                  <li><strong>Emergency Number:</strong> 112</li>
                  <li><strong>Climate:</strong> Continental Mediterranean with hot summers and cool winters</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>When to Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Madrid is a year-round destination, but some seasons offer better experiences:</p>
                <ul className="space-y-2">
                  <li><strong>Spring (April-June):</strong> Mild temperatures and blooming parks make this an ideal time to visit.</li>
                  <li><strong>Fall (September-October):</strong> Pleasant temperatures and fewer tourists than summer.</li>
                  <li><strong>Summer (July-August):</strong> Hot weather (often 35°C+/95°F+), many locals leave for vacation.</li>
                  <li><strong>Winter (November-March):</strong> Cooler temperatures, occasional rain or light snow, fewer crowds.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold mb-6">Essential Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Tourist Offices</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <div className="font-medium">Plaza Mayor Tourist Center</div>
                    <div className="text-sm text-gray-600">Plaza Mayor, 27</div>
                    <div className="text-sm text-gray-600">Daily: 9:30 - 20:30</div>
                  </li>
                  <li>
                    <div className="font-medium">Reina Sofía Museum</div>
                    <div className="text-sm text-gray-600">Santa Isabel, 52</div>
                    <div className="text-sm text-gray-600">Mon-Sat: 9:30 - 20:00, Sun: 9:30 - 19:00</div>
                  </li>
                  <li>
                    <div className="font-medium">Madrid-Barajas Airport (T2 & T4)</div>
                    <div className="text-sm text-gray-600">Daily: 9:00 - 20:00</div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Useful Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><strong>Madrid EMT:</strong> Official bus app with real-time information</li>
                  <li><strong>Metro de Madrid:</strong> Official metro app with maps and times</li>
                  <li><strong>Cabify/FreeNow:</strong> Ride-hailing services</li>
                  <li><strong>El Tiempo:</strong> Weather forecasts</li>
                  <li><strong>TripAdvisor/TheFork:</strong> Restaurant reviews and bookings</li>
                  <li><strong>Fever/Meetup:</strong> Local events and activities</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Tourist Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <strong className="block">Madrid Tourist Card</strong>
                  <p className="text-sm text-gray-600">Includes free entry to major museums and attractions, plus public transport.</p>
                </div>
                <div>
                  <strong className="block">Madrid Card Culture</strong>
                  <p className="text-sm text-gray-600">Focuses on cultural attractions with skip-the-line access to major museums.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold mb-6">Essential Tips</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Safety Tips</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>Madrid is generally very safe, but watch for pickpockets in crowded tourist areas and public transport.</li>
                  <li>Keep valuables secure and be aware of your surroundings, especially at night.</li>
                  <li>Avoid carrying all your documents, cards, and cash together.</li>
                  <li>Save emergency numbers in your phone: General Emergency (112), Police (091), Ambulance (061).</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Money & Payments</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>Credit cards are widely accepted, but some small businesses prefer cash.</li>
                  <li>Avoid currency exchange at airports or tourist areas - use bank ATMs instead.</li>
                  <li>Tipping is not mandatory but appreciated (5-10% in restaurants is common).</li>
                  <li>Always have some cash for small purchases and traditional markets.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Local Customs & Etiquette</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>Greeting with two kisses on the cheeks is common among friends.</li>
                  <li>Madrileños typically eat lunch between 2-4 PM and dinner after 9 PM.</li>
                  <li>Speaking loudly in public is common and not considered rude.</li>
                  <li>Learning a few Spanish phrases will be appreciated by locals.</li>
                  <li>On Sundays and holidays, many small shops and some restaurants may be closed.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Weather Preparation</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>Summer: Bring light clothing, sunscreen, and sunglasses. Temperatures regularly exceed 35°C (95°F).</li>
                  <li>Winter: Pack layers and a warm coat. Temperatures can drop to around 0°C (32°F) at night.</li>
                  <li>Madrid has very low humidity year-round, so stay hydrated.</li>
                  <li>Sudden rain showers are possible in spring and fall, so a small umbrella can be useful.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Current Events & Festivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Annual Festivals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <div className="font-medium">San Isidro Festival (May)</div>
                    <div className="text-sm text-gray-600">Madrid's patron saint festival with traditional music, dance, and food.</div>
                  </li>
                  <li>
                    <div className="font-medium">Madrid Pride (Late June - Early July)</div>
                    <div className="text-sm text-gray-600">One of Europe's largest LGBTQ+ pride celebrations.</div>
                  </li>
                  <li>
                    <div className="font-medium">Christmas & Three Kings (December - January)</div>
                    <div className="text-sm text-gray-600">Festive lights, markets, and the Three Kings Parade on January 5th.</div>
                  </li>
                  <li>
                    <div className="font-medium">La Paloma Festival (August)</div>
                    <div className="text-sm text-gray-600">Traditional festivities in the La Latina neighborhood.</div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Cultural Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <div className="font-medium">ARCO Madrid (February)</div>
                    <div className="text-sm text-gray-600">International contemporary art fair.</div>
                  </li>
                  <li>
                    <div className="font-medium">PhotoEspaña (June - August)</div>
                    <div className="text-sm text-gray-600">International festival of photography and visual arts.</div>
                  </li>
                  <li>
                    <div className="font-medium">Jazz Madrid Festival (November)</div>
                    <div className="text-sm text-gray-600">International jazz performances throughout the city.</div>
                  </li>
                  <li>
                    <div className="font-medium">Madrid Fashion Week (February & September)</div>
                    <div className="text-sm text-gray-600">Spain's premier fashion event showcasing local and international designers.</div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Essentials;
