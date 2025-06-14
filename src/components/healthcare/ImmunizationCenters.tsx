
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ImmunizationCenters = () => (
  <section className="mb-12">
    <h3 className="text-2xl font-bold mb-6">Immunization Centers</h3>
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Centro de Vacunación</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p><strong>Address:</strong> Núñez de Balboa, 111 (corner of General Oraa)</p>
            <p><strong>Metro:</strong> Núñez de Balboa</p>
            <p><strong>Ages:</strong> Birth to 14 years</p>
            <p><strong>Hours:</strong> 9am-2pm / 4pm-8pm</p>
            <p><strong>Phone:</strong> 91 561 6195</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Sanidad Internacional</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p><strong>Address:</strong> Francisco Silvela, 57</p>
            <p><strong>Metro:</strong> Diego de León</p>
            <p><strong>Services:</strong> Adult booster vaccinations, travel vaccinations</p>
            <p><strong>Hours:</strong> Mon-Fri: 9am-2pm</p>
            <p><strong>Phone:</strong> 91 309 5603</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default ImmunizationCenters;
