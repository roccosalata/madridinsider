
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Transport = () => {
  return (
    <Layout>
      <HeroSection 
        title="Getting Around Madrid" 
        subtitle="Everything you need to know about navigating Madrid's excellent public transportation system" 
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Transportation Overview</h2>
          
          <div className="mb-12">
            <p className="text-lg mb-6">
              Madrid boasts one of Europe's best public transportation systems, making it easy to explore the city without a car. The integrated network includes metro, buses, light rail, and commuter trains that can take you anywhere in the city and surrounding areas.
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Transport Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Multi Card (Tarjeta Multi)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Rechargeable card that can be used for all public transport</li>
                      <li>• Initial cost: €2.50 (non-refundable)</li>
                      <li>• Can be loaded with single tickets or 10-journey tickets</li>
                      <li>• Available at all metro stations and tobacco shops</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tourist Travel Pass</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Available for 1, 2, 3, 5, or 7 days</li>
                      <li>• Unlimited travel on all public transport</li>
                      <li>• Zones A, B1, B2, B3 available (most tourists only need Zone A)</li>
                      <li>• Available at airport metro stations and tourist information centers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="metro">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="metro">Metro</TabsTrigger>
              <TabsTrigger value="bus">Bus</TabsTrigger>
              <TabsTrigger value="cercanias">Cercanías</TabsTrigger>
              <TabsTrigger value="taxi">Taxi & Rideshare</TabsTrigger>
              <TabsTrigger value="other">Other Options</TabsTrigger>
            </TabsList>
            
            <TabsContent value="metro">
              <Card>
                <CardHeader>
                  <CardTitle>Madrid Metro</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="mb-4">
                        The Madrid Metro is the fastest and most efficient way to get around the city. With 12 lines and over 300 stations, it can take you almost anywhere in Madrid.
                      </p>
                      
                      <h4 className="font-semibold mb-2">Key Information:</h4>
                      <ul className="mb-4 space-y-1">
                        <li>• Hours: 6:00 AM to 1:30 AM daily</li>
                        <li>• Frequency: Every 3-5 minutes during peak hours, 5-15 minutes off-peak</li>
                        <li>• Single ticket: €1.50-€2.00 depending on zones</li>
                        <li>• 10-journey ticket: €12.20 for Zone A</li>
                      </ul>
                      
                      <h4 className="font-semibold mb-2">Tips:</h4>
                      <ul className="space-y-1">
                        <li>• Download the official Metro de Madrid app for maps and route planning</li>
                        <li>• Avoid rush hours (8:00-9:30 AM and 6:00-7:30 PM)</li>
                        <li>• Keep your ticket until you exit the station</li>
                        <li>• Airport supplement: €3.00 extra when traveling to/from the airport</li>
                      </ul>
                    </div>
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1557223562-6e3a8363de01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                        alt="Madrid Metro" 
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="bus">
              <Card>
                <CardHeader>
                  <CardTitle>Madrid City Buses (EMT)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="mb-4">
                        Madrid's extensive bus network complements the metro and reaches areas not covered by the underground system. Buses are an excellent way to see the city while traveling.
                      </p>
                      
                      <h4 className="font-semibold mb-2">Key Information:</h4>
                      <ul className="mb-4 space-y-1">
                        <li>• Day buses: 6:00 AM to 11:30 PM</li>
                        <li>• Night buses ("Búhos"): 11:30 PM to 6:00 AM</li>
                        <li>• Frequency: Every 5-15 minutes for most lines</li>
                        <li>• Same pricing as metro: €1.50 single, €12.20 for 10 journeys</li>
                      </ul>
                      
                      <h4 className="font-semibold mb-2">Tips:</h4>
                      <ul className="space-y-1">
                        <li>• Board at the front door and exit from the middle/rear doors</li>
                        <li>• Signal to the driver when you want to get off</li>
                        <li>• The EMT Madrid app provides real-time bus arrivals</li>
                        <li>• Route 100 is great for tourists - connects Atocha station to the city center</li>
                        <li>• The Airport Express bus runs 24/7 between Atocha/Cibeles and the airport (€5)</li>
                      </ul>
                    </div>
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                        alt="Madrid City Bus" 
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="cercanias">
              <Card>
                <CardHeader>
                  <CardTitle>Cercanías (Commuter Trains)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="mb-4">
                        The Cercanías commuter train network is perfect for reaching suburbs and nearby towns around Madrid. It's also useful for some journeys within the city center.
                      </p>
                      
                      <h4 className="font-semibold mb-2">Key Information:</h4>
                      <ul className="mb-4 space-y-1">
                        <li>• Hours: 5:30 AM to midnight (varies by line)</li>
                        <li>• 10 lines connecting Madrid with surrounding areas</li>
                        <li>• Pricing varies by zones (€1.70-€8.70)</li>
                        <li>• Main stations: Atocha, Chamartín, Sol, Nuevos Ministerios</li>
                      </ul>
                      
                      <h4 className="font-semibold mb-2">Popular Destinations:</h4>
                      <ul className="space-y-1">
                        <li>• El Escorial (historic royal site)</li>
                        <li>• Alcalá de Henares (UNESCO World Heritage city)</li>
                        <li>• Aranjuez (royal palace and gardens)</li>
                        <li>• Cercedilla (mountain getaway)</li>
                      </ul>
                    </div>
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1553870084-09e326e76c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                        alt="Cercanías Train" 
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="taxi">
              <Card>
                <CardHeader>
                  <CardTitle>Taxis & Ridesharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="mb-4">
                        Madrid has plenty of taxis and ridesharing options for when you need direct transportation or are traveling late at night.
                      </p>
                      
                      <h4 className="font-semibold mb-2">Official Taxis:</h4>
                      <ul className="mb-4 space-y-1">
                        <li>• White cars with a diagonal red stripe and city shield</li>
                        <li>• Starting fare: €2.50 (Mon-Fri daytime), €3.15 (nights/weekends)</li>
                        <li>• Per kilometer: €1.10-€1.30</li>
                        <li>• Airport fixed rate: €30 to/from anywhere in the city center</li>
                        <li>• Can be hailed on the street, found at taxi stands, or ordered by phone</li>
                      </ul>
                      
                      <h4 className="font-semibold mb-2">Ridesharing Apps:</h4>
                      <ul className="space-y-1">
                        <li>• Cabify: Popular local alternative to Uber</li>
                        <li>• FreeNow: App for ordering official taxis</li>
                        <li>• Uber: Available in Madrid with varying service levels</li>
                      </ul>
                    </div>
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1626208503243-a9495b6cfcaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                        alt="Madrid Taxi" 
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="other">
              <Card>
                <CardHeader>
                  <CardTitle>Other Transportation Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">BiciMAD (Bike Sharing)</h4>
                      <img 
                        src="https://images.unsplash.com/photo-1559348349-86f1f65817fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                        alt="BiciMAD Bikes" 
                        className="rounded-lg mb-3 h-48 w-full object-cover"
                      />
                      <p className="mb-3">
                        Madrid's electric bike-sharing system is an eco-friendly way to explore the city.
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Over 2,500 electric bikes and 200+ docking stations</li>
                        <li>• €2 casual user registration + €0.30-€2.00 per 30 minutes</li>
                        <li>• Register via the BiciMAD app</li>
                        <li>• Credit card required for registration</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Electric Scooters</h4>
                      <img 
                        src="https://images.unsplash.com/photo-1586007959167-01d941d624f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                        alt="Electric Scooters" 
                        className="rounded-lg mb-3 h-48 w-full object-cover"
                      />
                      <p className="mb-3">
                        Several companies offer electric scooter rentals throughout Madrid.
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Companies include Lime, Bird, and Reby</li>
                        <li>• Typical cost: €1 to unlock + €0.15-0.25 per minute</li>
                        <li>• Download respective apps to locate and rent</li>
                        <li>• Must use bike lanes or roads (not sidewalks)</li>
                        <li>• Park in designated areas only</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Walking</h4>
                      <img 
                        src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                        alt="Walking in Madrid" 
                        className="rounded-lg mb-3 h-48 w-full object-cover"
                      />
                      <p className="mb-3">
                        Madrid's compact city center is perfect for exploring on foot.
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Many major attractions are within walking distance</li>
                        <li>• Sol to Plaza Mayor: 5 minutes</li>
                        <li>• Sol to Prado Museum: 10-15 minutes</li>
                        <li>• Sol to Royal Palace: 10 minutes</li>
                        <li>• Download offline maps for easier navigation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Car Rental & Sharing</h4>
                      <img 
                        src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                        alt="Car Rental" 
                        className="rounded-lg mb-3 h-48 w-full object-cover"
                      />
                      <p className="mb-3">
                        Not recommended for city center travel, but useful for day trips.
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Car sharing: Zity, Share Now, and WiBLE</li>
                        <li>• Traditional rentals available at airport and train stations</li>
                        <li>• Central Madrid has restricted traffic zones</li>
                        <li>• Parking is expensive and difficult to find</li>
                        <li>• Consider renting only for day trips outside the city</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Airport Transfers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Metro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Line 8 connects all terminals to the city center.</p>
                <ul className="text-sm space-y-1">
                  <li>• Journey time: ~30 minutes to Nuevos Ministerios</li>
                  <li>• Cost: €1.50-€2.00 + €3.00 airport supplement</li>
                  <li>• Hours: 6:00 AM - 1:30 AM</li>
                  <li>• Best for: Solo travelers, budget travelers</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Airport Express Bus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">24-hour bus service connecting the airport with O'Donnell, Cibeles, and Atocha.</p>
                <ul className="text-sm space-y-1">
                  <li>• Journey time: ~40 minutes to Atocha</li>
                  <li>• Cost: €5.00 (cash to driver or contactless payment)</li>
                  <li>• Frequency: Every 15-20 minutes</li>
                  <li>• Best for: Late-night arrivals, travelers with luggage</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Taxi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Official white taxis with red stripe are available at all terminals.</p>
                <ul className="text-sm space-y-1">
                  <li>• Journey time: 20-30 minutes (traffic dependent)</li>
                  <li>• Fixed rate: €30 to anywhere in the city center</li>
                  <li>• Available 24/7</li>
                  <li>• Best for: Groups, late arrivals, convenience</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Cercanías Train</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Connects Terminal 4 only with several stations in Madrid.</p>
                <ul className="text-sm space-y-1">
                  <li>• Journey time: ~25 minutes to Atocha</li>
                  <li>• Cost: €2.60</li>
                  <li>• Frequency: Every 30 minutes</li>
                  <li>• Best for: Travelers arriving/departing at Terminal 4</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transport;
