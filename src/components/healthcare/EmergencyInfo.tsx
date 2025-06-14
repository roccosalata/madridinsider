
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

const EmergencyInfo = () => (
  <section className="mb-12">
    <Card className="bg-red-50 border-red-200">
      <CardHeader>
        <CardTitle className="text-red-600 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6" />
          Emergency Medical Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold">General Emergency</h4>
            <p className="text-lg font-bold text-red-600">112</p>
          </div>
          <div>
            <h4 className="font-semibold">Medical Emergency</h4>
            <p className="text-lg font-bold text-red-600">061</p>
          </div>
          <div>
            <h4 className="font-semibold">Poison Control</h4>
            <p className="text-lg font-bold text-red-600">915 620 420</p>
            <p className="text-sm text-gray-600">Institute of Toxicology - 24 hours</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </section>
);

export default EmergencyInfo;
