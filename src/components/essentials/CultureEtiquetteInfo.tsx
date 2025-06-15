
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Coffee, MessageSquare, Car, HandCoins } from 'lucide-react';

const CultureEtiquetteInfo = () => (
  <Card id="culture">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Users className="h-5 w-5" />
        Culture & Etiquette
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><Coffee className="h-5 w-5 text-amber-800"/>Time off & The Siesta</h3>
        <p className="text-gray-600">
          Ah, the famed siesta. From 2pm-5pm, you'll find that many stores, banks, and government offices close, allowing workers to go home or to a local cafe for a lengthy lunch. This can be an opportunity to enjoy quieter streets or a relaxed 'menú del día'. Most shops close on Sundays, but many open on the first Sunday of the month.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><MessageSquare className="h-5 w-5 text-blue-600"/>Communication & Queues</h3>
        <p className="text-gray-600 mb-2">
          Spaniards are generally very talkative and friendly. A few social customs can be helpful to know:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 pl-4">
          <li>When joining a line, ask, "¿Quién es el último?" ("Who is last?") to find your place.</li>
          <li>When exiting a crowded bus or Metro, politely ask, "¿Vas a salir/bajar?" ("Are you getting off?").</li>
          <li>It's customary to greet and say goodbye to people in an elevator.</li>
          <li>Give up your seat to older passengers on public transport.</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><Car className="h-5 w-5 text-gray-700"/>On the Road</h3>
        <p className="text-gray-600">
          Many of Madrid's historic streets are narrow and pedestrian-focused. Drivers can be assertive, so always be aware of traffic. If you are driving, avoid double parking, as it will likely be met with persistent honking.
        </p>
      </div>
      
      <div>
        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><HandCoins className="h-5 w-5 text-green-600"/>To Tip or Not to Tip</h3>
        <p className="text-gray-600">
          While guidebooks might say tipping isn't customary, the reality is nuanced. In casual cafes or bars for just a coffee, leaving a few small coins is fine. However, in restaurants for a full meal, a tip of 5-10% is appreciated for good service.
        </p>
      </div>
    </CardContent>
  </Card>
);

export default CultureEtiquetteInfo;
