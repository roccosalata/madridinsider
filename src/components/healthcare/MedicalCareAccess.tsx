
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

const MedicalCareAccess = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-8">Medical Care Access</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            EU Citizens
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            EU citizens are entitled to free medical care with proper documentation.
          </p>
          <ul className="space-y-2 text-sm">
            <li>• Bring E111 form or European Health Insurance Card (EHIC)</li>
            <li>• Take form to nearest health center (centro de salud)</li>
            <li>• Register by providing your address</li>
            <li>• Note: EHIC doesn't cover dental or private care</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Non-EU Citizens
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Non-EU citizens must have health insurance from their home country.
          </p>
          <ul className="space-y-2 text-sm">
            <li>• Universities recommend Unidad Médica (Conde de Aranda, 1)</li>
            <li>• English-speaking doctors available</li>
            <li>• Familiar with insurance paperwork (recibo)</li>
            <li>• Submit bills to home country insurance</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default MedicalCareAccess;
