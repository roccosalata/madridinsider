
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { healthcareServices } from '@/data/healthcareData';

const HealthcareServices = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-8">Healthcare Services Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {healthcareServices.map((service, index) => (
        <Card key={index} className="h-full hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="bg-madrid-red/10 p-2 rounded-md">
                <service.icon className="h-6 w-6 text-madrid-red" />
              </div>
              <span className="text-lg">{service.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-1">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm text-gray-700">• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default HealthcareServices;
