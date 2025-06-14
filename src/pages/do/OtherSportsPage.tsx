
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { volleyballInfo, tennisInfo, skiingInfo, rugbyInfo, raceKartsInfo, poolBilliardsInfo, iceSkatingInfo } from '@/data/sportsData';
import { Mail, MountainSnow, Users, Phone, Globe, Pool, IceSkating } from 'lucide-react';

const OtherSportsPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Other Sports in Madrid"
        subtitle="Explore volleyball, tennis, skiing, rugby and more in the city."
      />
      <div className="container mx-auto py-12 px-4 space-y-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-madrid-red">
              <span className="text-2xl">{volleyballInfo.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{volleyballInfo.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              <span>Contact: {volleyballInfo.contact}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-madrid-red">
              <span className="text-2xl">{tennisInfo.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{tennisInfo.description}</p>
            <p className="text-sm text-gray-600"><strong>More Information:</strong> {tennisInfo.moreInfo}</p>
          </CardContent>
        </Card>

        <section>
            <h2 className="text-3xl font-bold mb-6 text-madrid-red">{raceKartsInfo.title}</h2>
            {raceKartsInfo.venues.map(venue => (
                <Card key={venue.name}>
                    <CardHeader>
                        <CardTitle>{venue.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-gray-600">
                        <p className="text-base text-gray-800">{venue.description}</p>
                        <p>{venue.address}</p>
                        {venue.website && (
                            <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            <a href={`http://${venue.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{venue.website}</a>
                            </div>
                        )}
                         {venue.email && (
                            <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <a href={`mailto:${venue.email}`} className="hover:underline">{venue.email}</a>
                            </div>
                        )}
                        {venue.phone && (
                            <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>{venue.phone}</span>
                            </div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </section>

        <section>
            <h2 className="text-3xl font-bold mb-6 text-madrid-red flex items-center gap-3">
              <Pool className="h-8 w-8" />
              {poolBilliardsInfo.title}
            </h2>
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>{poolBilliardsInfo.directory.name}</CardTitle>
                </CardHeader>
                <CardContent>
                     <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <a href={`http://${poolBilliardsInfo.directory.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{poolBilliardsInfo.directory.website}</a>
                    </div>
                </CardContent>
            </Card>
            <div className="space-y-6">
                {poolBilliardsInfo.venues.map(venue => (
                    <Card key={venue.name}>
                        <CardHeader>
                            <CardTitle>{venue.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p className="text-gray-700 whitespace-pre-wrap">{venue.description}</p>
                            <p className="text-sm text-gray-600">{venue.address}</p>
                             <p className="text-sm text-gray-500 whitespace-pre-wrap">{venue.hours}</p>
                            {venue.phone && (
                                <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>{venue.phone}</span>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        <section>
            <h2 className="text-3xl font-bold mb-6 text-madrid-red flex items-center gap-3">
              <IceSkating className="h-8 w-8" />
              {iceSkatingInfo.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {iceSkatingInfo.venues.map(venue => (
                    <Card key={venue.name}>
                        <CardHeader>
                            <CardTitle>{venue.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-gray-600">
                            <p className="text-base text-gray-800 whitespace-pre-wrap">{venue.description}</p>
                            <p>{venue.address}</p>
                             {venue.website && (
                                <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4" />
                                <a href={`http://${venue.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{venue.website}</a>
                                </div>
                            )}
                             {venue.email && (
                                <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <a href={`mailto:${venue.email}`} className="hover:underline">{venue.email}</a>
                                </div>
                            )}
                            {venue.phone && (
                                <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>{venue.phone}</span>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        <section>
            <h2 className="text-3xl font-bold mb-6 text-madrid-red flex items-center gap-3">
              <MountainSnow className="h-8 w-8" />
              {skiingInfo.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skiingInfo.resorts.map(resort => (
                    <Card key={resort.name}>
                        <CardHeader>
                            <CardTitle>{resort.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm text-gray-600">
                            <p>{resort.address}</p>
                            {resort.website && (
                                <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4" />
                                <a href={`http://${resort.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{resort.website}</a>
                                </div>
                            )}
                            {resort.phone && (
                                <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>{resort.phone}</span>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
        
        <section>
            <h2 className="text-3xl font-bold mb-6 text-madrid-red flex items-center gap-3">
                <Users className="h-8 w-8" />
                {rugbyInfo.title}
            </h2>
            <div className="space-y-6">
                {rugbyInfo.clubs.map(club => (
                    <Card key={club.name}>
                        <CardHeader>
                            <CardTitle>{club.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p className="text-gray-700 whitespace-pre-wrap">{club.description}</p>
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

export default OtherSportsPage;
