
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TouristOffices = () => {
  return (
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
  );
};

export default TouristOffices;
