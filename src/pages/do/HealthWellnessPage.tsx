
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Dumbbell, Pill, Stethoscope, Leaf, User } from 'lucide-react';

const HealthWellnessPage = () => {
  const healthServices = [
    {
      title: "Medical Care & Hospitals",
      icon: Stethoscope,
      description: "Public and private healthcare options, emergency services, and specialist care.",
      items: ["Hospital Universitario La Paz", "Hospital Clínico San Carlos", "Hospital Ramón y Cajal", "Private clinics (Sanitas, Quirónsalud)"]
    },
    {
      title: "Pharmacies & Drugstores",
      icon: Pill,
      description: "24-hour pharmacies, prescription services, and over-the-counter medications.",
      items: ["24h Pharmacy locations", "Prescription requirements", "Common medication names", "Health insurance coverage"]
    },
    {
      title: "Fitness & Gyms",
      icon: Dumbbell,
      description: "Fitness centers, sports facilities, and workout options throughout Madrid.",
      items: ["Metropolitan gyms", "Basic-Fit locations", "Municipal sports centers", "Outdoor fitness parks"]
    },
    {
      title: "Wellness & Spa Services",
      icon: Heart,
      description: "Spas, massage therapy, wellness centers, and relaxation services.",
      items: ["Hammam Al Ándalus", "Thai massage centers", "Wellness spas", "Beauty treatments"]
    },
    {
      title: "Health Food & Nutrition",
      icon: Leaf,
      description: "Organic stores, health food shops, and nutritional supplements.",
      items: ["Organic supermarkets", "Health food stores", "Vegetarian/vegan options", "Supplement shops"]
    },
    {
      title: "Alternative Medicine",
      icon: User,
      description: "Yoga studios, meditation centers, and holistic health practices.",
      items: ["Yoga studios", "Meditation centers", "Acupuncture clinics", "Naturopathic practitioners"]
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="Health & Wellness"
        subtitle="Complete guide to healthcare, fitness, wellness services, and healthy living in Madrid"
      />
      
      <div className="container mx-auto py-12 px-4">
        {/* Quick Emergency Info */}
        <section className="mb-12">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600">Emergency Medical Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold">Emergency Number</h4>
                  <p className="text-lg font-bold text-red-600">112</p>
                </div>
                <div>
                  <h4 className="font-semibold">Medical Emergency</h4>
                  <p className="text-lg font-bold text-red-600">061</p>
                </div>
                <div>
                  <h4 className="font-semibold">European Health Card</h4>
                  <p className="text-sm">EU citizens can use EHIC for public healthcare</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Health Services Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Health & Wellness Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="bg-madrid-red/10 p-2 rounded-md">
                      <service.icon className="h-6 w-6 text-madrid-red" />
                    </div>
                    <span className="text-lg">{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Healthcare System Overview */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Understanding Madrid's Healthcare System</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Public Healthcare (Sistema Nacional de Salud)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Free healthcare with European Health Insurance Card (EHIC)</li>
                  <li>• Registration required for residents</li>
                  <li>• GP referrals needed for specialists</li>
                  <li>• Emergency services always available</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Private Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Faster access to specialists</li>
                  <li>• English-speaking doctors available</li>
                  <li>• Insurance plans available</li>
                  <li>• Popular providers: Sanitas, Adeslas, DKV</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wellness Activities */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Popular Wellness Activities</h3>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">🧘 Yoga Classes</h4>
                  <p className="text-sm text-gray-600">Studios throughout the city offering various styles</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">🏃 Running Groups</h4>
                  <p className="text-sm text-gray-600">Retiro Park and Casa de Campo popular spots</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">🏊 Swimming Pools</h4>
                  <p className="text-sm text-gray-600">Municipal and private pools throughout Madrid</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">🚴 Cycling</h4>
                  <p className="text-sm text-gray-600">BiciMAD bike sharing and cycling lanes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default HealthWellnessPage;
