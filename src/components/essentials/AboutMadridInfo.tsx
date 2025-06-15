
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';

const AboutMadridInfo = () => (
  <Card id="about">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Info className="h-5 w-5" />
        About Madrid
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-600 mb-3">
        When the Court was established in Madrid at the time of Philip II (1561), the small town became the capital of a vast Empire in which the sun never set. From that moment onwards, there commenced the construction of churches and convents, palaces and other monumental civil buildings, which currently form part of what is known as the Madrid of the Hapsburgs, in the area surrounding the Plaza Mayor, one of the city’s tourist areas par excellence (the Monastery of the Encarnación, the Monastery of the Descalzas Reales, Plaza de la Villa).
      </p>
      <p className="text-sm text-gray-600 mb-3">
        During the 18th and 19th centuries, Madrid developed on a grand scale. The new airs of the Enlightenment and the artistic enthusiasm of monarchs like Philip V and Charles III left behind monuments such as the Royal Palace and the Sabatini Gardens, the Fine Arts Academy, the Prado Museum, the Botanical Gardens, etc. Monuments, gardens, squares and fountains that make up Madrid of the Bourbons.
      </p>
      <p className="text-sm text-gray-600 mb-3">
        This extremely important artistic legacy, which is reflected in so many monuments and museums in and around the city, exists in harmony with modern Madrid (3,000,000 inhabitants) of the 21st century, the political, cultural, economic and financial capital of Spain. The city is experiencing a period of cutting-edge urban development which is equipping it with a state-of-the-art transport infrastructure; for example, the expansion of Barajas International Airport, new Underground lines, and the extension of the high-speed train line (AVE), which includes a connection with Zaragoza (2003) and Barcelona (2004).
      </p>
      <p className="text-sm text-gray-600">
        The hectic pace of the Madrid business world co-exists alongside an infinite number of possibilities for leisure and fun. Billboards are overflowing with opera, theatre, musical comedies and flamenco shows, which are complemented by music and dance festivals in the summer and the autumn. The tempting pleasures of eating and shopping join those of the nightlife of a city which is famous for being one of the liveliest in the world due to its ever-increasing leisure offer and more especially to the happy and easy-going lifestyle of Madrid’s citizens. The capital city also has a lot to offer family tourism, such as the Amusement Park, Zoo-Aquarium, Planetarium, Warner Park, Imax Madrid and Faunia biologic park.
      </p>
    </CardContent>
  </Card>
);

export default AboutMadridInfo;
