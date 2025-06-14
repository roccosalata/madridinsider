
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import TabSections from '@/components/essentials/TabSections';
import RelatedCategories from '@/components/essentials/RelatedCategories';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, Phone, AlertTriangle, Info } from 'lucide-react';
import { emergencyContacts } from '../data/emergencyContacts';

const MadridEssentials = () => {
  return (
    <Layout>
      <HeroSection 
        title="Madrid Essentials" 
        subtitle="Your tourist starting point: Essential information, maps, emergency contacts, and first-timer tips for visiting Madrid." 
      />
      
      <div className="container mx-auto px-4 py-8">
        <TabSections />
        
        {/* Quick Tourist Info Cards */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Quick Tourist Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Transport & Maps Hub Link */}
            <Card className="bg-madrid-red/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-madrid-red">
                  <MapPin className="h-6 w-6" />
                  Transport & Maps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 mb-4">
                  Metro maps, bus routes, tickets, and navigation essentials for getting around Madrid.
                </p>
                <Button asChild>
                  <Link to="/madrid-essentials/transport-maps" className="flex items-center gap-2">
                    <Navigation className="h-4 w-4" />
                    Explore Transport
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Information */}
            <Card className="bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="h-6 w-6" />
                  Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="font-semibold">Emergency: 112</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>Police: 091</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>Medical: 061</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View All Contacts
                </Button>
              </CardContent>
            </Card>

            {/* Tourist Information Centers */}
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Info className="h-6 w-6" />
                  Tourist Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 mb-4">
                  Official tourist information centers, free maps, and visitor services.
                </p>
                <Button variant="outline" size="sm">
                  Find Centers
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Essential Tourist Tips */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Essential Tourist Tips</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">💰 Money & Payments</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Euro (€) is the currency</li>
                    <li>• Cards widely accepted</li>
                    <li>• Cash needed for some tapas bars</li>
                    <li>• ATMs are everywhere</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🕐 Spanish Schedule</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Lunch: 2:00-4:00 PM</li>
                    <li>• Dinner: 9:00-11:00 PM</li>
                    <li>• Shops close 2:00-5:00 PM (siesta)</li>
                    <li>• Late nightlife culture</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🗣️ Language</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Spanish is the main language</li>
                    <li>• English in tourist areas</li>
                    <li>• "Hola" = Hello, "Gracias" = Thank you</li>
                    <li>• Download translation app</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🚶 Getting Around</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• City center is very walkable</li>
                    <li>• Metro covers most attractions</li>
                    <li>• Taxis are white and official</li>
                    <li>• BiciMAD bike sharing available</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Embassy Information */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Embassy Contacts</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4">
                Important embassy contacts for international visitors. Register with your embassy if staying for extended periods.
              </p>
              <Button variant="outline">
                View Embassy List
              </Button>
            </CardContent>
          </Card>
        </section>

        <RelatedCategories />
      </div>
    </Layout>
  );
};

export default MadridEssentials;
