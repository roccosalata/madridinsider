
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TouristCards = () => {
  return (
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
  );
};

export default TouristCards;
