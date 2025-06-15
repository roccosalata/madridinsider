
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const publications = [
  {
    title: "MAP Magazine",
    description: "Bilingual digital publication covering Madrid's underground culture: Concerts, Events, Forums, Blogs Podcasting, Videos, Slide shows, Radio, Classified ads, Venue guide, Madrid bands, Design, Cutting-edge articles.",
    website: "www.mapmadrid.com",
    link: "http://www.mapmadrid.com"
  },
  {
    title: "Hot English Magazine",
    description: "Pay English teaching / learning, Monthly Magazine. Available around Madrid.",
    website: "www.hotenglishmagazine.com",
    link: "http://www.hotenglishmagazine.com"
  },
  {
    title: "Guia del Ocio",
    description: "Pay Monthly Entertainment Guide. Available around Madrid.",
    website: "www.guiadelocio.com",
    link: "http://www.guiadelocio.com"
  },
  {
    title: "En Madrid / What's On",
    description: "Free Bilingual Monthly Madrid information Magazine. Tourism, culture & leisure. Provided by the official tourism board.",
    website: "www.esmadrid.com",
    link: "http://www.esmadrid.com"
  },
    {
    title: "Vive Madrid",
    description: "Free Bilingual Monthly Tourist Magazine Guide.",
    contact: "ELYCAR Design & Publicity, SL - Ayala, 11 | Tel. 914-263-884 / 916-717-013 | vivemadrid@ran.es / elycar@elycar.net"
  },
];

const PublicationsInfo = () => {
  return (
    <Card id="publications">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Publications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          Here are some publications of interest for English speakers and internationals. Please note that availability may have changed.
        </p>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-lg">{pub.title}</h3>
              <p className="text-sm text-gray-600 mt-1 mb-2">{pub.description}</p>
              {pub.website && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-madrid-red hover:underline break-all text-sm"
                >
                  {pub.website}
                </a>
              )}
              {pub.contact && (
                <p className="text-sm text-gray-500 mt-1">{pub.contact}</p>
              )}
            </div>
          ))}
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-lg">International Newspapers</h3>
              <p className="text-sm text-gray-600 mt-1">
                International newspapers are sold at most kiosks in the center (particularly around Sol) and available at some bars and cafes. The International Herald Tribune contains news articles from international newspapers translated into English, as well as an El Pais supplement in English.
              </p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PublicationsInfo;
