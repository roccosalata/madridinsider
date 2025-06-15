
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
              From 2pm-5pm, most stores, banks and government buildings close for lunch. 
              Most shops are closed on Sundays but open the first Sunday of every month.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Language Tips</h4>
            <p className="text-sm text-gray-600 mb-2">
              Learning Spanish: chat with everyone - your portero about weather, neighbors about football. 
              Attend intercambios (language exchanges) at local pubs. Useful slang:
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• <strong>que va</strong> - nonsense</li>
              <li>• <strong>pijo</strong> - snob</li>
              <li>• <strong>coño</strong> - ask a native friend about this one!</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Social Etiquette</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• In queues, ask "¿Quién es el último?" to find the end</li>
              <li>• When exiting crowded transport, ask "¿Vas a salir/bajar?"</li>
              <li>• Say hello/goodbye in elevators</li>
              <li>• Give up Metro seats to older passengers</li>
              <li>• Use "usted" with elderly people</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Driving & Tipping</h4>
            <p className="text-sm text-gray-600">
              <strong>Driving:</strong> Many streets are pedestrian-dominated. Don't double park - you'll get honked at.<br />
              <strong>Tipping:</strong> Leave coins in cafeterias/bars, but 10% in restaurants (despite what some guidebooks say).
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
            When the Court was established in Madrid during Philip II's reign (1561), the small town became 
            capital of a vast Empire where the sun never set. This began construction of churches, convents, 
            and palaces forming the "Madrid of the Hapsburgs" around Plaza Mayor.
          </p>
          <p className="text-sm text-gray-600 mb-3">
            During the 18th-19th centuries, Enlightenment ideals and monarchs like Philip V and Charles III 
            left monuments such as the Royal Palace, Prado Museum, and Botanical Gardens - the "Madrid of the Bourbons."
          </p>
          <p className="text-sm text-gray-600">
            Modern Madrid (3 million inhabitants) is Spain's political, cultural, economic and financial capital, 
            experiencing cutting-edge urban development including Barajas Airport expansion, new Metro lines, 
            and high-speed train connections. The city offers world-famous nightlife, family attractions like 
            the Zoo-Aquarium, Warner Park, and is known for its happy, easy-going lifestyle.
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
