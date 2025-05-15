
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VisitTiming = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>When to Visit</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Madrid is a year-round destination, but some seasons offer better experiences:</p>
        <ul className="space-y-2">
          <li><strong>Spring (April-June):</strong> Mild temperatures and blooming parks make this an ideal time to visit.</li>
          <li><strong>Fall (September-October):</strong> Pleasant temperatures and fewer tourists than summer.</li>
          <li><strong>Summer (July-August):</strong> Hot weather (often 35°C+/95°F+), many locals leave for vacation.</li>
          <li><strong>Winter (November-March):</strong> Cooler temperatures, occasional rain or light snow, fewer crowds.</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default VisitTiming;
