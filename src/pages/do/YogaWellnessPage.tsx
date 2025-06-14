import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Link as LinkIcon } from 'lucide-react';
import ProviderList from '@/components/healthcare/ProviderList';
import { wellnessActivities, yogaStudios, yogaWellnessResources } from '@/data/yogaWellnessData';

const YogaWellnessPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Yoga & Wellness Activities"
        subtitle="Discover Madrid's wellness scene with yoga studios, spas, fitness classes, and healthy lifestyle options"
      />
      
      <div className="container mx-auto py-12 px-4">
        {/* Wellness Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Wellness Activities in Madrid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wellnessActivities.map((activity, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="bg-madrid-red/10 p-2 rounded-md">
                      <activity.icon className="h-6 w-6 text-madrid-red" />
                    </div>
                    <span className="text-lg">{activity.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <ul className="space-y-1">
                    {activity.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <ProviderList
          title="Yoga Studios"
          providers={yogaStudios}
          icon={<User className="h-6 w-6 text-madrid-red" />}
        />

        {/* Other Resources */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Other Wellness Resources</h3>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <LinkIcon className="h-5 w-5 text-madrid-red" />
                Useful Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {yogaWellnessResources.map((resource, index) => (
                  <li key={index} className="text-gray-700">
                    <a 
                      href={resource.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {resource.name}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Popular Activities */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Popular Wellness Activities</h3>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">🧘‍♀️ Yoga Classes</h4>
                  <p className="text-sm text-gray-600">Various styles from beginner to advanced levels</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">💆‍♀️ Spa Treatments</h4>
                  <p className="text-sm text-gray-600">Massages, facials, and relaxation therapies</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">🏃‍♀️ Outdoor Fitness</h4>
                  <p className="text-sm text-gray-600">Parks offer free outdoor gym equipment</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">🥗 Healthy Dining</h4>
                  <p className="text-sm text-gray-600">Organic, vegetarian, and wellness-focused restaurants</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Best Areas for Wellness */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Best Neighborhoods for Wellness</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Malasaña</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Trendy area with many yoga studios and healthy cafés.</p>
                <ul className="text-sm space-y-1">
                  <li>• Multiple yoga studios</li>
                  <li>• Organic restaurants</li>
                  <li>• Wellness boutiques</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Chamberí</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Mix of traditional spas and modern wellness centers.</p>
                <ul className="text-sm space-y-1">
                  <li>• Luxury spas</li>
                  <li>• Pilates studios</li>
                  <li>• Health food stores</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Retiro Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Close to the park with many outdoor wellness activities.</p>
                <ul className="text-sm space-y-1">
                  <li>• Park activities</li>
                  <li>• Running groups</li>
                  <li>• Outdoor yoga classes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default YogaWellnessPage;
