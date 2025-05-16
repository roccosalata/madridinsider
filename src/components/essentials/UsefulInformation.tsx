
import React from 'react';
import TouristOffices from './TouristOffices';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const UsefulInformation = () => {
  return (
    <div>
      {/* First-timer tips section */}
      <h3 className="text-xl font-semibold mb-4">First-Timer Tips</h3>
      <Accordion type="single" collapsible className="w-full mb-8">
        <AccordionItem value="item-1">
          <AccordionTrigger>Safety Tips</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">While Madrid is generally safe, bag-snatching and wallet-lifting are unfortunately all too common. But with a little planning ahead and a lot of paying attention, you can travel around more securely.</p>
            
            <p className="mb-2 font-medium">Before you go out:</p>
            <ul className="list-disc pl-6 mb-2">
              <li>Do not carry everything with you. Only take one or two credit/bank cards, a little cash and, most importantly, a copy of your passport with you.</li>
              <li>Write down the numbers of the credit/bank cards that you are taking with you and the phone numbers listed on the back.</li>
              <li>Carry your valuables in a secure place. Use a bag that rests snugly under your arm in the armpit region or directly in front of you.</li>
              <li>Beware the backpack. Use a suitcase or combination lock.</li>
            </ul>
            
            <p className="mb-2 font-medium">While you're out and about:</p>
            <ul className="list-disc pl-6 mb-2">
              <li>Beware, most pocket-pickers work in teams and observe potential targets ahead of time. Their chief tool is distraction.</li>
              <li>Beware of people asking you for directions, shoving maps in your face, asking if you've noticed a stain on your shirt, etc.</li>
              <li>In crowded places, you're already expecting to be bumped into, making you an easier target.</li>
              <li>When sitting, keep your bag physically touching you, preferably in your lap or linked onto your body.</li>
            </ul>
            
            <p className="mb-2 font-medium">If you've been mugged:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Establish what you have lost and take appropriate action.</li>
              <li>For lost credit/bank cards, make the necessary phone calls.</li>
              <li>For lost passports, go to the nearest police station to file a report, then take it to your embassy.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>Mind Your P's and Queues</AccordionTrigger>
          <AccordionContent>
            <p>When waiting in the queue at the grocery store or El Corte Ingles, it's best to look at the assembled crowd and ask, "¿Quien es el ultimo?" to find the end of the queue. When exiting a crowded bus or Metro car, politely ask, "¿Vas a salir / bajar?" as an alternative to knocking people over on your way out. It's also customary to say hello and goodbye to folks in the elevator, and just as your mother taught you, to give up your Metro seat to older passengers. Madrileños rarely use the polite usted form, but it is still best to bring it out with folks old enough to be your grandparents - plus it's good grammar practice.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>On the Road</AccordionTrigger>
          <AccordionContent>
            <p>Many of Madrid's ancient winding streets are pedestrian dominated. But if you have to share your wandering space with cars, be sure to pay attention. Drivers in the city enjoy making large cars fit down tiny alleyways, and when they do, it's every man for himself. If you have a car in the city, don't double park - you'll be greeted by at least one steady note of blaring car-horn until you hang your head and move your car.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger>To Tip or Not to Tip</AccordionTrigger>
          <AccordionContent>
            <p>Now you may have read in guide books that it's not customary to tip in Spain. This is somewhat of a fallacy. It is true that in cafeterias and "old-man bars" you should only leave a few coins behind after a coffee, but in restaurants you should leave at least 10 percent. The moral of the story? Don't believe everything you read in guide books.</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger>Getting Tongue-tied</AccordionTrigger>
          <AccordionContent>
            <p>Learning a language is a humbling experience; the best way to learn is to chat with everyone you see, learning from your mistakes along the way. Talk to your portero about the weather, your neighbors about football (soccer), or your lecturers about current affairs. Go to intercambios (language exchanges) at a local pub or cafe or invest in a proper grammer course. Spaniards on the whole are marathon talkers - find one to teach you some basic slang, such as que va (nonsense), pijo (snob) and coño (best to ask a native friend about this one).</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-6">
          <AccordionTrigger>Time Off</AccordionTrigger>
          <AccordionContent>
            <p>Ah, the famed siesta. From 2pm-5pm, you'll find that most stores, banks and government buildings close their doors, allowing their workers to head home or to the local cafe for lunch. As with most things in a major city, this can be viewed as an inconvenience or as a pleasure. Take the time to stroll through the empty streets or the park, hit the empty shops (if they are open, that is) or grab a menu del dia for lunch. As for Sunday opening, most shops are firmly shut on the day of our Lord, but do open the first Sunday of every month. There are plenty of national holidays in Madrid too: for a list of these dias festivos, see www.fiestas-de-madrid.com.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <h3 className="text-xl font-semibold mb-4">Tourist Offices</h3>
      <TouristOffices />
      
      <h3 className="text-xl font-semibold mt-8 mb-4">Important Contact Information</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold">Consumer Information (OMIC)</h4>
          <p className="mb-1">Mayor, 83, 2 (Metro: Sol)</p>
          <p>Tel. 010</p>
        </div>
        
        <div>
          <h4 className="font-semibold">Lost & Found</h4>
          <p className="mb-1">Paseo del Molino, 7</p>
          <p className="mb-1">Tel. 91 527 9590</p>
          <p className="mb-1">Plaza de Legazpi, 7 (Metro: Legazpi)</p>
          <p>Tel. 915-884-346</p>
        </div>
        
        <div>
          <h4 className="font-semibold">Guia de Madrid</h4>
          <p className="mb-1">Info & guides</p>
          <p className="mb-1">www.esmadrid.com</p>
          <p className="mb-1">www.guiademadrid.com</p>
          <p>webmaster@guiademadrid.com</p>
        </div>
        
        <div>
          <h4 className="font-semibold">Bojagi Event Planning & Consulting</h4>
          <p className="mb-1">Organization of conventions, meetings, parties... etc.</p>
          <p className="mb-1">Tel. 915-439-168</p>
          <p>www.bojagievents.com</p>
        </div>
        
        <div>
          <h4 className="font-semibold">Night Travel Services</h4>
          <p className="mb-1">Cea Bermudez, 20 (Metro: Canal)</p>
          <p className="mb-1">Night tours in Madrid: Flamenco, Routes, Modern Service, VIP Service, Magic Routes, Personalized Routes.</p>
          <p>Tel. 915-352-821</p>
        </div>
        
        <div>
          <h4 className="font-semibold">How to Learn Spanish</h4>
          <p>www.howtolearnspanish.co.uk</p>
        </div>
        
        <div>
          <h4 className="font-semibold">Emergency Contact</h4>
          <p>Emergency phone service: 112. Available toll-free from any phone for any emergency.</p>
        </div>
      </div>
    </div>
  );
};

export default UsefulInformation;
