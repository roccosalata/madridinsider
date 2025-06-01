
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WhatsOnContent = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-3">Current Events</h3>
          <p className="mb-4">Stay updated with the latest happenings in Madrid.</p>
          <ul className="space-y-2">
            <li>• Check local newspapers like El País or ABC for current events</li>
            <li>• Visit madrid.es for official city events and announcements</li>
            <li>• Follow @madrid on social media for real-time updates</li>
            <li>• Ask at your hotel or tourist information centers for event calendars</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-3">Seasonal Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Spring/Summer</h4>
              <p>• Outdoor concerts in parks</p>
              <p>• Terrace season begins</p>
              <p>• San Isidro Festival (May)</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Fall/Winter</h4>
              <p>• Christmas markets</p>
              <p>• New Year celebrations at Puerta del Sol</p>
              <p>• Three Kings Day (January 6)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhatsOnContent;
