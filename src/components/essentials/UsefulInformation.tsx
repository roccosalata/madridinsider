
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const UsefulInformation = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-3">First-Timer Tips</h3>
          <ul className="space-y-2">
            <li>• Madrid's metro system is efficient and covers most tourist areas</li>
            <li>• Dinner is typically served late (9-11 PM)</li>
            <li>• Many shops close for siesta (2-5 PM)</li>
            <li>• Tipping is not mandatory but 5-10% is appreciated</li>
            <li>• Most museums offer free hours - check schedules</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-3">Essential Phrases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>Hola</strong> - Hello</p>
              <p><strong>Gracias</strong> - Thank you</p>
              <p><strong>Por favor</strong> - Please</p>
              <p><strong>¿Habla inglés?</strong> - Do you speak English?</p>
            </div>
            <div>
              <p><strong>¿Cuánto cuesta?</strong> - How much does it cost?</p>
              <p><strong>La cuenta, por favor</strong> - The bill, please</p>
              <p><strong>¿Dónde está...?</strong> - Where is...?</p>
              <p><strong>No hablo español</strong> - I don't speak Spanish</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsefulInformation;
