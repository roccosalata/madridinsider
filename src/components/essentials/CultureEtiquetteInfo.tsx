
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

const CultureEtiquetteInfo = () => (
  <Card id="culture">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Users className="h-5 w-5" />
        Spanish Culture & Etiquette
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div>
        <h4 className="font-semibold mb-2">Time Off - The Siesta</h4>
        <p className="text-sm text-gray-600">
          Ah, the famed siesta. From 2pm-5pm, you'll find that most stores, banks and government buildings close their doors, allowing their workers to head home or to the local cafe for lunch. As with most things in a major city, this can be viewed as an inconvenience or as a pleasure. Take the time to stroll through the empty streets or the park, hit the empty shops (if they are open, that is) or grab a menu del dia for lunch. As for Sunday opening, most shops are firmly shut on the day of our Lord, but do open the first Sunday of every month. There are plenty of national holidays in Madrid too: for a list of these dias festivos, see <a href="http://www.fiestas-de-madrid.com" target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">www.fiestas-de-madrid.com</a>.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Getting Tongue-Tied</h4>
        <p className="text-sm text-gray-600 mb-2">
          Learning a language is a humbling experience; the best way to learn is to chat with everyone you see, learning from your mistakes along the way. Talk to your portero about the weather, your neighbors about football (soccer), or your lecturers about current affairs. Go to intercambios (language exchanges) at a local pub or cafe or invest in a proper grammer course. Spaniards on the whole are marathon talkers - find one to teach you some basic slang, such as:
        </p>
        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
          <li><strong>que va</strong> - nonsense</li>
          <li><strong>pijo</strong> - snob</li>
          <li><strong>coño</strong> - best to ask a native friend about this one!</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Mind your P's and Queues</h4>
        <p className="text-sm text-gray-600">
          When waiting in the queue at the grocery store or El Corte Ingles, it's best to look at the assembled crowd and ask, "¿Quién es el último?" to find the end of the queue. When exiting a crowded bus or Metro car, politely ask, "¿Vas a salir / bajar?" as an alternative to knocking people over on your way out. It's also customary to say hello and goodbye to folks in the elevator, and just as your mother taught you, to give up your Metro seat to older passengers. Madrileños rarely use the polite usted form, but it is still best to bring it out with folks old enough to be your grandparents - plus it's good grammar practice.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">On the Road</h4>
        <p className="text-sm text-gray-600">
          Many of Madrid's ancient winding streets are pedestrian dominated. But if you have to share your wandering space with cars, be sure to pay attention. Drivers in the city enjoy making large cars fit down tiny alleyways, and when they do, it's every man for himself. If you have a car in the city, don't double park - you'll be greeted by at least one steady note of blaring car-horn until you hang your head and move your car.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">To Tip or Not to Tip</h4>
        <p className="text-sm text-gray-600">
          Now you may have read in guide books that it's not customary to tip in Spain. This is somewhat of a fallacy. It is true that in cafeterias and "old-man bars" you should only leave a few coins behind after a coffee, but in restaurants you should leave at least 10 percent. The moral of the story? Don't beleive everything you read in guide books.
        </p>
      </div>
    </CardContent>
  </Card>
);
export default CultureEtiquetteInfo;
