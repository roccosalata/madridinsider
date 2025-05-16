
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Flag } from 'lucide-react';

const SpanishCustomsInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <Flag className="h-8 w-8 text-madrid-red" />
        <h3 className="text-xl font-semibold">Spanish Customs & Greetings</h3>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="font-semibold mb-3">Social Customs</h4>
          <ul className="space-y-2 mb-4">
            <li><strong>Greetings:</strong> Two kisses on the cheeks is common between friends and when being introduced to someone.</li>
            <li><strong>Meal Times:</strong> Madrileños typically eat lunch between 2-4 PM and dinner after 9 PM.</li>
            <li><strong>Siesta:</strong> The traditional mid-afternoon break is still observed by some businesses.</li>
            <li><strong>Volume:</strong> Speaking loudly in public is common and not considered rude.</li>
          </ul>
        </CardContent>
      </Card>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Madrid's Cultural Heritage</h3>
        <p className="mb-4">
          When the Court was established in Madrid at the time of Philip II (1561), the small town became the capital of a vast Empire in which the sun never set. From that moment onwards, there commenced the construction of churches and convents, palaces and other monumental civil buildings, which currently form part of what is known as the Madrid of the Hapsburgs, in the area surrounding the Plaza Mayor, one of the city's tourist areas par excellence (the Monastery of the Encarnación, the Monastery of the Descalzas Reales, Plaza de la Villa).
        </p>
        <p className="mb-4">
          During the 18th and 19th centuries, Madrid developed on a grand scale. The new airs of the Enlightenment and the artistic enthusiasm of monarchs like Philip V and Charles III left behind monuments such as the Royal Palace and the Sabatini Gardens, the Fine Arts Academy, the Prado Museum, the Botanical Gardens, etc. Monuments, gardens, squares and fountains that make up Madrid of the Bourbons.
        </p>
        <p className="mb-4">
          This extremely important artistic legacy, which is reflected in so many monuments and museums in and around the city, exists in harmony with modern Madrid (3,000,000 inhabitants) of the 21st century, the political, cultural, economic and financial capital of Spain. The city is experiencing a period of cutting-edge urban development which is equipping it with a state-of-the-art transport infrastructure; for example, the expansion of Barajas International Airport, new Underground lines, and the extension of the high-speed train line (AVE), which includes a connection with Zaragoza (2003) and Barcelona (2004).
        </p>
        <p className="mb-4">
          The hectic pace of the Madrid business world co-exists alongside an infinite number of possibilities for leisure and fun. Billboards are overflowing with opera, theatre, musical comedies and flamenco shows, which are complemented by music and dance festivals in the summer and the autumn. The tempting pleasures of eating and shopping join those of the nightlife of a city which is famous for being one of the liveliest in the world due to its ever-increasing leisure offer and more especially to the happy and easy-going lifestyle of Madrid's citizens. The capital city also has a lot to offer family tourism, such as the Amusement Park, Zoo-Aquarium, Planetarium, Warner Park, Imax Madrid and Faunia biologic park.
        </p>
      </div>
    </div>
  );
};

export default SpanishCustomsInfo;
