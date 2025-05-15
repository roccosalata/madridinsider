
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UsefulApps = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Useful Apps</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li><strong>Madrid EMT:</strong> Official bus app with real-time information</li>
          <li><strong>Metro de Madrid:</strong> Official metro app with maps and times</li>
          <li><strong>Cabify/FreeNow:</strong> Ride-hailing services</li>
          <li><strong>El Tiempo:</strong> Weather forecasts</li>
          <li><strong>TripAdvisor/TheFork:</strong> Restaurant reviews and bookings</li>
          <li><strong>Fever/Meetup:</strong> Local events and activities</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default UsefulApps;
