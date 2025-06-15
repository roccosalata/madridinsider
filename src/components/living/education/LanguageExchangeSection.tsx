
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Globe, Mail, Clock } from "lucide-react";

const languageExchangeVenues = [
  {
    name: "Café Madrid",
    address: "Escalinata, s/n (Metro: Opera)",
    schedule: "Weds: 9:30pm"
  },
  {
    name: "J&J Books and Coffee",
    address: "Espiritu Santo, 47 (Metro: Noviciado)",
    schedule: "Weds - Thurs: 8pm",
    website: "www.jandjbooksandcoffee.com",
    phone: "91 521 8576"
  },
  {
    name: "Molly Malone's",
    address: "Manuela Malasaña, 11 (Metro: Bilbao)",
    schedule: "Sat: 9:30pm",
    phone: "91 594 1635"
  },
  {
    name: "Moore's Barceló",
    address: "Barceló, 1 (Metro: Tribunal)",
    schedule: "Weds: 8pm",
    phone: "91 532 6331"
  },
  {
    name: "O'Neill's Pub",
    address: "Principe, 12 (Metro: Sol / Sevilla)",
    schedule: "Tues: 9pm",
    phone: "91 521 2030"
  },
  {
    name: "Downtown Madrid",
    address: "San Mateo, 21 (Metro: Alonso Martínez / Tribunal)",
    schedule: "Thursdays: 6:00pm - 11:30pm",
    phone: "600 907 873",
    email: "idiomas@downtownmadrid.es",
    website: "http://downtownmadrid.es/idiomas.html",
    description: "Every Thursday evening, Downtown Madrid becomes an international hub where over 200 people from all continents gather to practice languages and share cultures. Attendees wear badges indicating their native language, and staff speak multiple languages including English, French, German, Italian, Portuguese and Spanish."
  }
];

const languageExchangeResources = [
  "www.in-madrid.com",
  "www.loquo.com",
  "www.lingobongo.com",
  "www.spainexchange.com"
];

const languageExchangeTips = [
  {
    title: "Finding a Partner",
    content: "Finding an intercambio is easy through classified ads or Spanish friends, but finding a regular partner for actual progress requires ensuring similar language levels for balanced conversation."
  },
  {
    title: "Open Your Mind",
    content: "Don't be afraid to meet people from different generations. Intercambio partners who are older or younger can offer interesting perspectives on culture and current affairs."
  },
  {
    title: "The First Meeting",
    content: "Arrange meetings in quiet bars or cafés with their mobile number for cancellations. Weeknights are less crowded and provide better conversation environments."
  },
  {
    title: "Organize Your Talking Time",
    content: "Split time equally between languages, about 45 minutes each. Avoid exchanges where both speak their second language - you'll miss native expressions and accents."
  },
  {
    title: "Learn to Listen",
    content: "After introductions, conversations either halt or flourish. Pay attention to your partner and think of questions that keep the conversation flowing."
  },
  {
    title: "Define Your Goals",
    content: "Clearly communicate your objectives: vocabulary building, grammar correction, exam preparation, or job advancement. Your partner needs to know how to help you effectively."
  },
  {
    title: "Beware of 'Bedroom' Intercambios",
    content: "Some ads invite exchanges beyond languages. If you're seeking only language practice, avoid these and clarify your intentions from the start if there's any confusion."
  }
];

const LanguageExchangeSection: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Language Exchanges / Intercambios</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 mb-6">
        There is no better way to learn a language than to talk. Language exchanges (intercambios) are a fantastic 
        way to practice Spanish while helping others with your native language. Here's everything you need to know 
        about finding and participating in language exchanges in Madrid.
      </p>
      
      <div className="mb-8">
        <h5 className="font-semibold mb-4">Finding Language Exchange Partners</h5>
        <p className="text-gray-700 mb-4">
          Check the classified pages or place your own ad to find the perfect language partner. Bulletin boards 
          at public libraries, universities, language academies, and international bookstores often have flyers 
          from potential partners.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          {languageExchangeResources.map((resource, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <Globe className="h-3 w-3 flex-shrink-0" />
              <span>{resource}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h5 className="font-semibold mb-4">Regular Intercambio Venues</h5>
        <div className="grid gap-4 md:grid-cols-2">
          {languageExchangeVenues.map((venue, index) => (
            <div key={index} className="p-4 border rounded-lg bg-gray-50">
              <h4 className="font-semibold text-lg mb-2">{venue.name}</h4>
              {venue.description && (
                <p className="text-sm text-gray-700 mb-3">{venue.description}</p>
              )}
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{venue.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  <span>{venue.schedule}</span>
                </div>
                {venue.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{venue.phone}</span>
                  </div>
                )}
                {venue.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 flex-shrink-0" />
                    <span>{venue.website}</span>
                  </div>
                )}
                {venue.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span>{venue.email}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h5 className="font-semibold mb-4">Tips for Successful Language Exchanges</h5>
        <div className="space-y-4">
          {languageExchangeTips.map((tip, index) => (
            <div key={index} className="p-4 border rounded-lg bg-blue-50">
              <h6 className="font-semibold text-base mb-2">{tip.title}</h6>
              <p className="text-sm text-gray-700">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default LanguageExchangeSection;
