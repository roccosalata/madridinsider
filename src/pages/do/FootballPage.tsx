
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { footballInfo } from '@/data/sportsData';
import { Globe, Phone, Users, Trophy, Ticket } from 'lucide-react';

const FootballPage = () => {
  return (
    <Layout>
      <HeroSection
        title={footballInfo.mainTitle}
        subtitle="Experience the passion of Spanish football in the capital."
      />
      <div className="container mx-auto py-12 px-4 space-y-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-madrid-red">
              <Trophy className="h-6 w-6" />
              <span className="text-2xl">{footballInfo.championsLeague.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{footballInfo.championsLeague.description}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-madrid-red">
              <Ticket className="h-6 w-6" />
              <span className="text-2xl">{footballInfo.bernabeuTour.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{footballInfo.bernabeuTour.description}</p>
          </CardContent>
        </Card>
        
        <section>
          <h2 className="text-3xl font-bold mb-6 text-madrid-red">Stadiums</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {footballInfo.stadiums.map((stadium) => (
              <Card key={stadium.name}>
                <CardHeader>
                  <CardTitle>{stadium.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-600">
                  <p>{stadium.address}</p>
                  {stadium.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <a href={`http://${stadium.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{stadium.website}</a>
                    </div>
                  )}
                  {stadium.phone && (
                     <div className="flex items-center gap-2">
                       <Phone className="h-4 w-4" />
                       <span>{stadium.phone}</span>
                     </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-madrid-red">{footballInfo.practiceAndSupport.title}</h2>
          <div className="space-y-6">
            {footballInfo.practiceAndSupport.clubs.map((club) => (
              <Card key={club.name}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-madrid-red" />
                    <span className="text-xl">{club.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-700">{club.description}</p>
                  <p className="text-sm text-gray-600"><strong>Contact:</strong> {club.contact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default FootballPage;
