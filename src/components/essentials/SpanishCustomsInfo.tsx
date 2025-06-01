
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SpanishCustomsInfo = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-3">Cultural Customs</h3>
          <ul className="space-y-2">
            <li>• <strong>Greetings:</strong> Two kisses on the cheek for friends, handshake for business</li>
            <li>• <strong>Dining:</strong> Lunch 2-4 PM, dinner 9-11 PM</li>
            <li>• <strong>Siesta:</strong> Many shops close 2-5 PM</li>
            <li>• <strong>Dress code:</strong> Smart casual for restaurants and nightlife</li>
            <li>• <strong>Punctuality:</strong> Arriving 15 minutes late is acceptable for social events</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-3">Social Etiquette</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Do:</h4>
              <p>• Greet with "Buenos días/tardes"</p>
              <p>• Say "Buen provecho" when passing diners</p>
              <p>• Keep hands visible during meals</p>
              <p>• Stand for the national anthem</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Don't:</h4>
              <p>• Point with your finger</p>
              <p>• Put feet on furniture</p>
              <p>• Discuss politics casually</p>
              <p>• Rush through meals</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpanishCustomsInfo;
