
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Heart, Pill, Building2, Phone, AlertTriangle } from 'lucide-react';

const Healthcare = () => {
  const healthcareServices = [
    {
      title: "Public Healthcare System",
      icon: Heart,
      description: "Understanding Spain's Sistema Nacional de Salud for residents.",
      items: [
        "Registration with local health center (Centro de Salud)",
        "Getting your health card (Tarjeta Sanitaria Individual)",
        "Assigning a family doctor (Médico de Familia)",
        "Specialist referrals and appointments"
      ]
    },
    {
      title: "Private Healthcare",
      icon: Building2,
      description: "Private medical insurance and healthcare providers.",
      items: [
        "Sanitas - comprehensive coverage",
        "Adeslas - wide network of providers",
        "DKV - international coverage options",
        "Asisa - local and national plans"
      ]
    },
    {
      title: "Medical Specialists",
      icon: Stethoscope,
      description: "Finding doctors and medical specialists in Madrid.",
      items: [
        "General practitioners (Médico de Familia)",
        "Pediatricians for children",
        "Gynecologists and women's health",
        "Cardiologists, dermatologists, and other specialists"
      ]
    },
    {
      title: "Pharmacies & Medications",
      icon: Pill,
      description: "Prescription drugs, pharmacies, and medical supplies.",
      items: [
        "24-hour pharmacy locations",
        "Prescription requirements and procedures",
        "Over-the-counter medications",
        "Health insurance prescription coverage"
      ]
    }
  ];

  const majorHospitals = [
    "Hospital Universitario La Paz",
    "Hospital Clínico San Carlos",
    "Hospital Ramón y Cajal",
    "Hospital Gregorio Marañón",
    "Hospital Universitario 12 de Octubre",
    "Hospital La Princesa"
  ];

  return (
    <Layout>
      <HeroSection
        title="Healthcare in Madrid"
        subtitle="Complete guide to healthcare services, medical insurance, and finding doctors as a Madrid resident"
      />
      
      <div className="container mx-auto py-12 px-4">
        {/* Emergency Information */}
        <section className="mb-12">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Emergency Medical Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold">General Emergency</h4>
                  <p className="text-lg font-bold text-red-600">112</p>
                </div>
                <div>
                  <h4 className="font-semibold">Medical Emergency</h4>
                  <p className="text-lg font-bold text-red-600">061</p>
                </div>
                <div>
                  <h4 className="font-semibold">Poison Control</h4>
                  <p className="text-lg font-bold text-red-600">915 620 420</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Healthcare Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Healthcare Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthcareServices.map((service, index) => (
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

        {/* Major Hospitals */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Major Public Hospitals</h3>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {majorHospitals.map((hospital, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-madrid-red">{hospital}</h4>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Registration Process */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Healthcare Registration Process</h3>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-madrid-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Get your NIE/TIE</h4>
                    <p className="text-gray-600">You need your foreigner identification number first.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-madrid-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Register at Local Health Center</h4>
                    <p className="text-gray-600">Visit your assigned Centro de Salud with required documents.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-madrid-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Receive Health Card</h4>
                    <p className="text-gray-600">Get your Tarjeta Sanitaria Individual for free healthcare access.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Useful Information */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Important Healthcare Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Dental Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Dental care is largely private in Spain. Most residents use private dental insurance or pay out-of-pocket.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Private dental clinics throughout Madrid</li>
                  <li>• Dental insurance plans available</li>
                  <li>• Emergency dental services available</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prescriptions & Medications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Many medications require prescriptions. EU prescriptions are generally accepted.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Bring prescription medications when moving</li>
                  <li>• Find equivalent medications with your doctor</li>
                  <li>• Some medications may not be available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Healthcare;
