import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const WhatsOnContent = () => {
  return (
    <div className="space-y-8">

      {/* Featured Now Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <span role="img" aria-label="spotlight">✨</span>
            Featured Now in Madrid
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <Tabs defaultValue="bullfights">
            <TabsList className="mb-4 w-full gap-1">
              <TabsTrigger value="bullfights">Bullfights</TabsTrigger>
              <TabsTrigger value="flamenco">Flamenco</TabsTrigger>
              <TabsTrigger value="planetarium">Planetarium & IMAX</TabsTrigger>
              <TabsTrigger value="magic">Magic &amp; Comedy</TabsTrigger>
            </TabsList>

            {/* Bullfights */}
            <TabsContent value="bullfights">
              <div>
                <h3 className="font-semibold text-lg mb-1">Plaza de Toros Monumental de las Ventas</h3>
                <p className="text-sm mb-2">
                  Spain’s most iconic bullring hosting regular bullfights, especially during San Isidro festival (spring). Tickets can be hard to get for the biggest festivals, plan ahead!
                </p>
                <ul className="text-sm mb-2">
                  <li><strong>Address:</strong> Alcala, 237 (Metro: Ventas)</li>
                  <li><strong>Website:</strong> <a href="https://www.las-ventas.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.las-ventas.com</a></li>
                  <li><strong>Phone:</strong> 91 356 2200</li>
                </ul>
              </div>
            </TabsContent>

            {/* Flamenco */}
            <TabsContent value="flamenco">
              <div>
                <h3 className="font-semibold text-lg mb-1">Flamenco Shows &amp; Tablaos</h3>
                <p className="text-sm mb-2">
                  Madrid is the world's flamenco capital! Experience world-class dance, music &amp; tapas―visit an authentic tablao.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium">Cardamomo</h4>
                    <p className="text-sm">Calle de Echegaray, 15</p>
                    <p className="text-sm">Hours: 22:30 to 3:30</p>
                    <p className="text-sm">Entrance varies</p>
                    <a href="http://www.cardamomo.es" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener">cardamomo.es</a>
                  </div>
                  <div>
                    <h4 className="font-medium">Corral de la Moreria</h4>
                    <p className="text-sm">Moreria, 17 (Metro: Opera)</p>
                    <p className="text-sm">From 9:30pm</p>
                    <p className="text-sm">Tel. 913-658-446</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Las Tablas</h4>
                    <p className="text-sm">Plaza España, 9</p>
                    <a href="https://lastablasmadrid.com" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener">lastablasmadrid.com</a>
                  </div>
                  <div>
                    <h4 className="font-medium">Las Carboneras</h4>
                    <p className="text-sm">Pl. Conde de Miranda, 1</p>
                    <p className="text-sm">Mon-Thurs 9pm-10:30pm, Fri-Sat 8:30pm-11pm</p>
                    <p className="text-sm">Tel. 91 542 8677</p>
                  </div>
                </div>
                <p className="text-xs mt-2 text-gray-500">+ Many other venues―see local listings!</p>
              </div>
            </TabsContent>

            {/* Planetarium & IMAX */}
            <TabsContent value="planetarium">
              <div>
                <h3 className="font-semibold text-lg mb-1">Planetarium & IMAX Madrid</h3>
                <div className="mb-2">
                  <h4 className="font-medium">Planetario de Madrid</h4>
                  <p className="text-sm">Parque Tierno Galvan, Metro: Mendez Alvaro</p>
                  <p className="text-sm">Tues-Fri 5:30 PM &amp; 6:45 PM; Sat/Sun 11:30 AM, 12:45 PM, 5:30 PM, 6:45 PM, 8:00 PM (Closed Mondays)</p>
                  <a href="https://www.planetmad.es" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener">planetmad.es</a>
                </div>
                <div>
                  <h4 className="font-medium">IMAX Madrid</h4>
                  <p className="text-sm">Parque Tierno Galvan, Meneses, s/n</p>
                  <p className="text-sm">11:00am – 10:15pm, open year round</p>
                  <a href="https://www.imaxmadrid.com" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener">imaxmadrid.com</a>
                  <p className="text-sm">imaxmdr@imaxmadrid.com</p>
                  <p className="text-sm">Tel. 914-674-800</p>
                </div>
              </div>
            </TabsContent>

            {/* Magic & Comedy */}
            <TabsContent value="magic">
              <div>
                <h3 className="font-semibold text-lg mb-2">Magic &amp; Comedy Clubs</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium">Houdini Sala de Magia</h4>
                    <p className="text-sm">Garcia Luna, 13 (Metro: Cruz del Rayo)</p>
                    <a href="https://www.houdinimadrid.com" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener">houdinimadrid.com</a>
                  </div>
                  <div>
                    <h4 className="font-medium">Giggling Guiri Comedy Club</h4>
                    <p className="text-sm">Teatro Alfil - Pez, 10 (Metro: Noviciado)</p>
                    <a href="https://www.comedyinspain.com" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener">comedyinspain.com</a>
                  </div>
                </div>
                <p className="text-sm mt-2">For classical &amp; alternative comedy or magic shows check local listings and ask at your hotel!</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Seasonal & Recurring Events */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-3">Current Events</h3>
          <p className="mb-4">Stay updated with the latest happenings in Madrid.</p>
          <ul className="space-y-2 text-sm">
            <li>• Check local newspapers like El País or ABC for current events</li>
            <li>• Visit madrid.es for official city events and announcements</li>
            <li>• Follow @madrid on social media for real-time updates</li>
            <li>• Ask at your hotel or tourist information centers for event calendars</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-3">Seasonal Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Spring/Summer</h4>
              <ul className="text-sm space-y-1">
                <li>• Outdoor concerts in parks</li>
                <li>• Terrace season begins</li>
                <li>• San Isidro Festival (May)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Fall/Winter</h4>
              <ul className="text-sm space-y-1">
                <li>• Christmas markets</li>
                <li>• New Year celebrations at Puerta del Sol</li>
                <li>• Three Kings Day (January 6)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhatsOnContent;
