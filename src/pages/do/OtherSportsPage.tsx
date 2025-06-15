
import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { volleyballInfo, tennisInfo, skiingInfo, rugbyInfo, raceKartsInfo, poolBilliardsInfo, iceSkatingInfo, cricketInfo } from '@/data/sportsData';
import { Mail, MountainSnow, Users, Phone, Globe, Target, Snowflake, Award, Dices } from 'lucide-react';

const OtherSportsPage = () => {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && sectionsRef.current[hash]) {
      setTimeout(() => {
        sectionsRef.current[hash]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  return (
    <Layout>
      <HeroSection
        title="Other Sports in Madrid"
        subtitle="Discover a variety of team, winter, and leisure sports available in Madrid."
      />
      <div className="container mx-auto py-12 px-4 space-y-16">
        
        {/* Team Sports Section */}
        <section id="team-sports" ref={el => { if (el) sectionsRef.current['team-sports'] = el; }}>
            <h2 className="text-3xl font-bold mb-8 text-madrid-red flex items-center gap-3">
                <Users className="h-8 w-8" />
                Team Sports
            </h2>
            <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{volleyballInfo.title}</CardTitle>
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
                    <CardTitle className="text-2xl">{rugbyInfo.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {rugbyInfo.clubs.map(club => (
                        <div key={club.name} className="border-t pt-4 first:border-t-0 first:pt-0">
                            <h4 className="font-semibold">{club.name}</h4>
                            <p className="text-gray-700 whitespace-pre-wrap text-sm mt-2">{club.description}</p>
                            <p className="text-sm text-gray-600 mt-2"><strong>Contact:</strong> {club.contact}</p>
                        </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{cricketInfo.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cricketInfo.clubs.map(club => (
                        <div key={club.name} className="border-t pt-4 first:border-t-0 first:pt-0">
                            <h4 className="font-semibold">{club.name}</h4>
                            <p className="text-gray-700 whitespace-pre-wrap text-sm">{club.description}</p>
                            <p className="text-sm text-gray-600"><strong>Contact:</strong> {club.contact}</p>
                        </div>
                    ))}
                  </CardContent>
                </Card>
            </div>
        </section>

        {/* Racquet Sports Section */}
        <section id="racquet-sports" ref={el => { if (el) sectionsRef.current['racquet-sports'] = el; }}>
            <h2 className="text-3xl font-bold mb-8 text-madrid-red flex items-center gap-3">
                <Award className="h-8 w-8" />
                Racquet Sports
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{tennisInfo.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{tennisInfo.description}</p>
                <p className="text-sm text-gray-600"><strong>More Information:</strong> {tennisInfo.moreInfo}</p>
              </CardContent>
            </Card>
        </section>

        {/* Winter Sports Section */}
        <section id="winter-sports" ref={el => { if (el) sectionsRef.current['winter-sports'] = el; }}>
            <h2 className="text-3xl font-bold mb-8 text-madrid-red flex items-center gap-3">
              <MountainSnow className="h-8 w-8" />
              Winter Sports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><MountainSnow className="h-6 w-6"/> {skiingInfo.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {skiingInfo.resorts.map(resort => (
                            <div key={resort.name} className="border-t pt-3 text-sm first:border-t-0 first:pt-0">
                                <p className="font-semibold">{resort.name}</p>
                                <p className="text-gray-600">{resort.address}</p>
                                {resort.website && (
                                    <div className="flex items-center gap-2 mt-1">
                                    <Globe className="h-4 w-4" />
                                    <a href={`http://${resort.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{resort.website}</a>
                                    </div>
                                )}
                                {resort.phone && (
                                    <div className="flex items-center gap-2 mt-1">
                                    <Phone className="h-4 w-4" />
                                    <span>{resort.phone}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Snowflake className="h-6 w-6"/> {iceSkatingInfo.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {iceSkatingInfo.venues.map(venue => (
                            <div key={venue.name} className="border-t pt-3 text-sm first:border-t-0 first:pt-0">
                                <p className="font-semibold">{venue.name}</p>
                                <p className="text-gray-600 mt-1">{venue.address}</p>
                                <p className="text-gray-700 whitespace-pre-wrap mt-2">{venue.description}</p>
                                {venue.website && (
                                    <div className="flex items-center gap-2 mt-1">
                                    <Globe className="h-4 w-4" />
                                    <a href={`http://${venue.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{venue.website}</a>
                                    </div>
                                )}
                                {venue.email && (
                                    <div className="flex items-center gap-2 mt-1">
                                    <Mail className="h-4 w-4" />
                                    <a href={`mailto:${venue.email}`} className="hover:underline">{venue.email}</a>
                                    </div>
                                )}
                                {venue.phone && (
                                    <div className="flex items-center gap-2 mt-1">
                                    <Phone className="h-4 w-4" />
                                    <span>{venue.phone}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>

        {/* Leisure & Fun Section */}
        <section id="leisure-fun" ref={el => { if (el) sectionsRef.current['leisure-fun'] = el; }}>
            <h2 className="text-3xl font-bold mb-8 text-madrid-red flex items-center gap-3">
              <Dices className="h-8 w-8" />
              Leisure & Fun
            </h2>
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">{raceKartsInfo.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {raceKartsInfo.venues.map(venue => (
                            <div key={venue.name} className="text-sm border-t pt-3 first:border-t-0 first:pt-0">
                                <p className="font-semibold">{venue.name}</p>
                                <p className="text-gray-600 mt-1">{venue.address}</p>
                                <p className="text-gray-700 mt-2">{venue.description}</p>
                                {venue.website && (
                                    <div className="flex items-center gap-2 mt-1">
                                    <Globe className="h-4 w-4" />
                                    <a href={`http://${venue.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{venue.website}</a>
                                    </div>
                                )}
                                {venue.email && (
                                    <div className="flex items-center gap-2 mt-1">
                                    <Mail className="h-4 w-4" />
                                    <a href={`mailto:${venue.email}`} className="hover:underline">{venue.email}</a>
                                    </div>
                                )}
                                {venue.phone && (
                                    <div className="flex items-center gap-2 mt-1">
                                    <Phone className="h-4 w-4" />
                                    <span>{venue.phone}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">{poolBilliardsInfo.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="border rounded p-3 bg-muted/50">
                            <h4 className="font-semibold">{poolBilliardsInfo.directory.name}</h4>
                            <div className="flex items-center gap-2 text-sm mt-1">
                                <Globe className="h-4 w-4" />
                                <a href={`http://${poolBilliardsInfo.directory.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{poolBilliardsInfo.directory.website}</a>
                            </div>
                        </div>
                        {poolBilliardsInfo.venues.map(venue => (
                            <div key={venue.name} className="border-t pt-4">
                                <h4 className="font-semibold">{venue.name}</h4>
                                <p className="text-sm text-gray-600 mt-1">{venue.address}</p>
                                <p className="text-gray-700 whitespace-pre-wrap mt-2 text-sm">{venue.description}</p>
                                <p className="text-sm text-gray-500 whitespace-pre-wrap mt-2">{venue.hours}</p>
                                {venue.phone && (
                                    <div className="flex items-center gap-2 mt-1 text-sm">
                                    <Phone className="h-4 w-4" />
                                    <span>{venue.phone}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
      </div>
    </Layout>
  );
};

export default OtherSportsPage;
