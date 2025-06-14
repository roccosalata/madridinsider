
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HealthcareNotes = () => (
  <section className="mb-12">
    <h3 className="text-2xl font-bold mb-6">Important Healthcare Information</h3>
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Public vs Private Healthcare</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-3">
            Both options provide quality care with similar standards. Key differences:
          </p>
          <ul className="text-sm space-y-1">
            <li>• <strong>Public:</strong> Free with ID and local address</li>
            <li>• <strong>Private:</strong> Less waiting, pay upfront, submit to insurance</li>
            <li>• <strong>Private:</strong> More English-speaking doctors</li>
            <li>• Quality difference is minimal between both systems</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pharmacy Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-3">
            Spanish pharmacies provide extensive services beyond prescriptions.
          </p>
          <ul className="text-sm space-y-1">
            <li>• Many medicines available without prescription</li>
            <li>• Well-trained, helpful pharmacists</li>
            <li>• 24-hour locations around Sol area</li>
            <li>• Look for green cross signs</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default HealthcareNotes;
