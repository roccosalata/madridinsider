
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EventsSection = () => {
  return (
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
  );
};

export default EventsSection;
