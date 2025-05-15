
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const EssentialTips = () => {
  return (
    <>
      <h3 className="text-2xl font-semibold mb-6">Essential Tips</h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Safety Tips</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 ml-4 list-disc">
              <li>Madrid is generally very safe, but watch for pickpockets in crowded tourist areas and public transport.</li>
              <li>Keep valuables secure and be aware of your surroundings, especially at night.</li>
              <li>Avoid carrying all your documents, cards, and cash together.</li>
              <li>Save emergency numbers in your phone: General Emergency (112), Police (091), Ambulance (061).</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>Money & Payments</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 ml-4 list-disc">
              <li>Credit cards are widely accepted, but some small businesses prefer cash.</li>
              <li>Avoid currency exchange at airports or tourist areas - use bank ATMs instead.</li>
              <li>Tipping is not mandatory but appreciated (5-10% in restaurants is common).</li>
              <li>Always have some cash for small purchases and traditional markets.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>Local Customs & Etiquette</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 ml-4 list-disc">
              <li>Greeting with two kisses on the cheeks is common among friends.</li>
              <li>Madrileños typically eat lunch between 2-4 PM and dinner after 9 PM.</li>
              <li>Speaking loudly in public is common and not considered rude.</li>
              <li>Learning a few Spanish phrases will be appreciated by locals.</li>
              <li>On Sundays and holidays, many small shops and some restaurants may be closed.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger>Weather Preparation</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 ml-4 list-disc">
              <li>Summer: Bring light clothing, sunscreen, and sunglasses. Temperatures regularly exceed 35°C (95°F).</li>
              <li>Winter: Pack layers and a warm coat. Temperatures can drop to around 0°C (32°F) at night.</li>
              <li>Madrid has very low humidity year-round, so stay hydrated.</li>
              <li>Sudden rain showers are possible in spring and fall, so a small umbrella can be useful.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default EssentialTips;
