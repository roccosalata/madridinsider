import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Globe, AlertTriangle, Info, Clock, Users } from 'lucide-react';

const GeneralUsefulInfo = () => {
  return (
    <div className="space-y-6">
      {/* Essential Services */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Essential Services & Contacts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Emergency Services</h4>
              <p className="text-sm text-red-700">
                <strong>Emergency phone service: 112</strong><br />
                Available toll-free from any phone. Tell the operator the problem type (medical, fire, criminal) 
                and they'll connect you to the appropriate department. They can even transfer you over to an English-speaking operator if your English happens to be better than your Spanish in an emergency situation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Consumer Information (OMIC)</h4>
              <p className="text-sm text-gray-600">
                Mayor, 83, 2 (Metro: Sol)<br />
                Tel: 010
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Lost & Found</h4>
              <div className="text-sm text-gray-600 space-y-2">
                <p>Paseo del Molino, 7<br />Tel: 91 527 9590</p>
                <p>Plaza de Legazpi, 7 (Metro: Legazpi)<br />Tel: 915-884-346</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Tourism Information</h4>
              <div className="text-sm text-gray-600">
                <p><strong>Guía de Madrid</strong><br />
                Info & guides<br />
                <a href="http://www.esmadrid.com" target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">www.esmadrid.com</a><br />
                <a href="http://www.guiademadrid.com" target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">www.guiademadrid.com</a><br />
                <a href="mailto:webmaster@guiademadrid.com" className="text-madrid-red hover:underline">webmaster@guiademadrid.com</a></p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weather Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Weather & Climate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            During the mid-winter months daytime temperatures in Madrid may drop to 7 degrees Centigrade (45 degrees Farenheit). During the months of July and August temperatures are hot. Madrid enjoys a large number of sunny days.
          </p>
        </CardContent>
      </Card>

      {/* Safety Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Safety & Security Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-700">
              While Madrid is generally safe, bag-snatching and wallet-lifting are unfortunately all too common. But with a little planning ahead and a lot of paying attention, you can travel around more securely.
          </p>
          <div>
            <h4 className="font-semibold mb-2">Before You Go Out</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Do not carry everything with you. Only take one or two credit / bank cards, a little cash and, most importantly, a copy of your passport with you.</li>
              <li>Write down the numbers of the credit / bank cards that you are taking with you and the phone numbers listed on the back.</li>
              <li>Carry your valuables in a secure place. Use a bag that rests snugly under your arm or directly in front of you.</li>
              <li>Beware the backpack. Use a suitcase or combination lock; they're cheap and effective.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">While You're Out: Common Pickpocket Tactics</h4>
            <p className="text-sm text-gray-600 mb-2">
              Most pickpockets work in teams and use distraction. One person will divert your attention while another acts. Be aware of:
            </p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Staged shows or anything that leads to direct questioning and/or physical contact.</li>
              <li>People asking for directions while shoving maps in your face.</li>
              <li>Someone pointing out a "stain" on your shirt and trying to wipe it off.</li>
              <li>Asking if you dropped a bill on the street.</li>
              <li>Stepping on your foot and over-apologizing.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">High-Risk Areas</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Crowded buses, metros, trains, and streets. Any crowded place makes you an easier target.</li>
              <li>Restaurants and cafés. Keep bags in your lap or physically touching you, not on the floor or an empty chair.</li>
              <li>Even in groups, you are more at risk as you may be paying more attention to friends than your belongings.</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Too Late, You've Been Robbed</h4>
            <p className="text-sm text-yellow-700">
              If you can't find your belongings, establish what you have lost. For credit cards, call to cancel them. For a passport or items needing an insurance claim, go to the nearest police station to file a report ("denuncia"). Take this report to your embassy for temporary travel papers and to your insurance agency. Most embassies can issue temporary documents within a few hours for a fee.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Cultural Information */}
      <Card>
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

      {/* Madrid History */}
      <Card>
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

      {/* Services */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Professional Services
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Bojagi Event Planning & Consulting</h4>
            <p className="text-sm text-gray-600">
              Organization of conventions, meetings, parties... etc.<br />
              Tel: 915-439-168<br />
              <a href="http://www.bojagievents.com" target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">www.bojagievents.com</a>
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-1">Night Travel Services</h4>
            <p className="text-sm text-gray-600">
              Cea Bermudez, 20 (Metro: Canal)<br />
              Night tours in Madrid: Flamenco, Routes, Modern Service, VIP Service, Magic Routes, Personalized Routes.<br />
              Tel: 915-352-821
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-1">Spanish Language Learning</h4>
            <p className="text-sm text-gray-600">
              <a href="http://www.howtolearnspanish.co.uk" target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">www.howtolearnspanish.co.uk</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneralUsefulInfo;
