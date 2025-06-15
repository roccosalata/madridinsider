
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building } from 'lucide-react';

const AboutMadridInfo = () => (
  <Card id="about">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Building className="h-5 w-5" />
        About Madrid
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 text-gray-700">
      <p>
        When the Court was established in Madrid under Philip II in 1561, the small town became the capital of a vast Empire. This began the construction of churches, convents, and palaces that form the "Madrid of the Hapsburgs" around the Plaza Mayor, including landmarks like the Monastery of the Encarnación and the Descalzas Reales.
      </p>
      <p>
        During the 18th and 19th centuries, Madrid grew significantly under the influence of the Enlightenment and monarchs like Philip V and Charles III. This era, known as the "Madrid of the Bourbons," gifted the city monuments such as the Royal Palace, Sabatini Gardens, Prado Museum, and the Botanical Gardens.
      </p>
      <p>
        Today, this rich artistic legacy coexists with a modern, 21st-century metropolis of over 3 million people. As Spain's political, cultural, and financial capital, Madrid is undergoing state-of-the-art urban development, including the expansion of Barajas Airport and its high-speed train network (AVE).
      </p>
      <p>
        The city's dynamic business world is balanced by endless leisure opportunities. From opera and theatre to flamenco shows and vibrant festivals, there's always something happening. This, combined with a world-famous nightlife and the cheerful lifestyle of its citizens, makes Madrid a uniquely lively city. It also offers plenty for families, including an Amusement Park, Zoo-Aquarium, and the Warner Park.
      </p>
    </CardContent>
  </Card>
);

export default AboutMadridInfo;
