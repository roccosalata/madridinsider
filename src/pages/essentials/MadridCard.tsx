
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Globe, CheckCircle, MapPin, Bus, CreditCard } from 'lucide-react';

const MadridCard = () => {
  const benefits = [
    "Access to the entire cultural offer in and around Madrid. Free entry to more than 40 of the major museums.",
    "As many journeys as you wish on the Madrid Visión tour bus.",
    "All visits which are part of the Discover Madrid programme.",
    "Madrid Fun Fair, Madrid Zoo and Aquarium, Cable Railway, Faunia, Imax...",
    "Take a casual stroll wherever you want in the Santiago Bernabéu stadium, thanks to the new Bernabéu Tour."
  ];

  const additionalBenefits = [
    "Considerable discounts in shops, restaurants, shows, nightclubs, discos and leisure centres for children and adults",
    "Free map of the city and comprehensive guide with information on all associated companies and institutions",
    "Brief descriptions, addresses, telephone numbers and discount information for all partners"
  ];

  return (
    <Layout>
      <HeroSection
        title="Madrid Card: The Tourist Card"
        subtitle="Your key to Madrid's cultural treasures and attractions with exclusive benefits and discounts"
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <Card className="bg-madrid-red text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-5 w-5" />
                <p>917-130-444 / 915-882-900</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Globe className="h-5 w-5" />
                <a href="https://www.madridcard.com" target="_blank" rel="noopener noreferrer" 
                   className="hover:underline">
                  www.madridcard.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-5 w-5" />
                <a href="mailto:madridcard@madridcard.com" className="hover:underline">
                  madridcard@madridcard.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-madrid-red flex items-center gap-2">
                <CheckCircle className="h-6 w-6" />
                Main Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-madrid-red flex items-center gap-2">
                <CreditCard className="h-6 w-6" />
                Additional Advantages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {additionalBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-madrid-red flex items-center gap-2">
              <Bus className="h-6 w-6" />
              Perfect Complement: Tourist Travel Pass
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-gray-700 mb-2">
                <strong>Note:</strong> The Tourist Travel Pass is not included in the price of the Madrid Card.
              </p>
              <p className="text-gray-700">
                Make the most of the Madrid public transport system, with unlimited use of the underground, bus and the Cercanías lines (suburban train network). The ideal complement to maximize your Madrid Card experience.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 bg-gradient-to-r from-madrid-red to-red-700 text-white rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-center">Why Choose Madrid Card?</h3>
          <p className="text-lg text-center leading-relaxed">
            The Madrid Card enables cardholders to benefit from exclusive access to Madrid's cultural treasures, 
            convenient transportation, and significant savings on dining, shopping, and entertainment throughout the city.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default MadridCard;
