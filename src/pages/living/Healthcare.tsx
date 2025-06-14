
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Heart, Pill, Building2, Phone, AlertTriangle, Users, MapPin } from 'lucide-react';

const Healthcare = () => {
  const healthcareServices = [
    {
      title: "Public Healthcare System",
      icon: Heart,
      description: "Understanding Spain's Sistema Nacional de Salud for residents.",
      items: [
        "EU citizens entitled to free medical care with E111 form or EHIC",
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
        "Asisa - local and national plans",
        "Less waiting time, English-speaking doctors available"
      ]
    },
    {
      title: "Medical Specialists",
      icon: Stethoscope,
      description: "Finding doctors and medical specialists in Madrid.",
      items: [
        "English-speaking doctors available",
        "General practitioners and family medicine",
        "Specialists: cardiology, dermatology, gynecology",
        "Mental health: psychologists and psychiatrists"
      ]
    },
    {
      title: "Pharmacies & Medications",
      icon: Pill,
      description: "Prescription drugs, pharmacies, and medical supplies.",
      items: [
        "24-hour pharmacy locations (green cross sign)",
        "Many medicines available without prescription",
        "Well-trained pharmacists provide helpful advice",
        "Prescription (receta) required for some medications"
      ]
    }
  ];

  const majorHospitals = [
    { name: "Hospital Universitario La Paz", address: "Paseo de la Castellana, 261", phone: "91 727 7000", metro: "Begonia" },
    { name: "Hospital Clínico San Carlos", address: "Professor Martin Lagos, s/n", phone: "91 330 3000", metro: "Moncloa" },
    { name: "Hospital Ramón y Cajal", address: "Colmenar Viejo Road, km 9,100", phone: "91 336 8000", metro: "Ramon y Cajal" },
    { name: "Hospital Gregorio Marañón", address: "Doctor Esquerdo, 46", phone: "91 586 8000", metro: "Retiro District" },
    { name: "Hospital 12 de Octubre", address: "Cordoba Avenue", phone: "91 390 8000", metro: "Carambanchel/Latina/Usera" },
    { name: "Hospital de la Princesa", address: "Diego de Leon, 63", phone: "91 520 2200", metro: "Diego de Leon" }
  ];

  const privateClinics = [
    { name: "British American Medical Unit", address: "Conde de Aranda, 1", phone: "914-351-823", metro: "Retiro", note: "English-speaking doctors" },
    { name: "Ruber International Hospital", address: "Juan Bravo, 49", phone: "914-026-100", metro: "Diego de Leon" },
    { name: "Clínica de Nuestra Señora de la Concepción", address: "Avda de los Reyes Católicos, 2", phone: "91 550 4800", note: "Jiménez Díaz Foundation" },
    { name: "Clínica Amessco", address: "José Abascal, 48, 7º", phone: "914-412-655", note: "Mon-Fri 9am-2pm, 4-9pm" }
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
                  <p className="text-sm text-gray-600">Institute of Toxicology - 24 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* EU vs Non-EU Citizens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Medical Care Access</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  EU Citizens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  EU citizens are entitled to free medical care with proper documentation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Bring E111 form or European Health Insurance Card (EHIC)</li>
                  <li>• Take form to nearest health center (centro de salud)</li>
                  <li>• Register by providing your address</li>
                  <li>• Note: EHIC doesn't cover dental or private care</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Non-EU Citizens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Non-EU citizens must have health insurance from their home country.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Universities recommend Unidad Médica (Conde de Aranda, 1)</li>
                  <li>• English-speaking doctors available</li>
                  <li>• Familiar with insurance paperwork (recibo)</li>
                  <li>• Submit bills to home country insurance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
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

        {/* Major Public Hospitals */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Major Public Hospitals</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {majorHospitals.map((hospital, index) => (
              <Card key={index}>
                <CardContent className="pt-4">
                  <h4 className="font-semibold text-madrid-red mb-2">{hospital.name}</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {hospital.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {hospital.phone}
                    </p>
                    <p>Metro: {hospital.metro}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Private Clinics */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Private Clinics & Medical Centers</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {privateClinics.map((clinic, index) => (
              <Card key={index}>
                <CardContent className="pt-4">
                  <h4 className="font-semibold text-madrid-red mb-2">{clinic.name}</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {clinic.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {clinic.phone}
                    </p>
                    {clinic.metro && <p>Metro: {clinic.metro}</p>}
                    {clinic.note && <p className="text-blue-600 font-medium">{clinic.note}</p>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Visit a Doctor */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">How to Visit a Doctor</h3>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-madrid-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold">Call your Centro de Salud</h4>
                    <p className="text-gray-600">Provide your address to find your nearest health center. Check yellow pages for numbers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-madrid-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold">Arrival and Registration</h4>
                    <p className="text-gray-600">You'll get a time window, not specific appointment. Fill out form at reception, get doctor's name and room (sala).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-madrid-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold">Waiting and Consultation</h4>
                    <p className="text-gray-600">Ask "¿Quién es el último?" (Who's last?) to find your place in line. Be prepared to translate symptoms as doctor may not speak English.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-madrid-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold">Prescription and Follow-up</h4>
                    <p className="text-gray-600">Get prescription (receta) and take to pharmacy (green cross sign). Return to reception if referred to specialist.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Immunizations */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Immunization Centers</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Centro de Vacunación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Address:</strong> Núñez de Balboa, 111 (corner of General Oraa)</p>
                  <p><strong>Metro:</strong> Núñez de Balboa</p>
                  <p><strong>Ages:</strong> Birth to 14 years</p>
                  <p><strong>Hours:</strong> 9am-2pm / 4pm-8pm</p>
                  <p><strong>Phone:</strong> 91 561 6195</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sanidad Internacional</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Address:</strong> Francisco Silvela, 57</p>
                  <p><strong>Metro:</strong> Diego de León</p>
                  <p><strong>Services:</strong> Adult booster vaccinations, travel vaccinations</p>
                  <p><strong>Hours:</strong> Mon-Fri: 9am-2pm</p>
                  <p><strong>Phone:</strong> 91 309 5603</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Important Healthcare Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Public vs Private Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Both options provide quality care with similar standards. Key differences:
                </p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Public:</strong> Free with ID and local address</li>
                  <li>• <strong>Private:</strong> Less waiting, pay upfront, submit to insurance</li>
                  <li>• <strong>Private:</strong> More English-speaking doctors</li>
                  <li>• Quality difference is minimal between both systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pharmacy Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Spanish pharmacies provide extensive services beyond prescriptions.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Many medicines available without prescription</li>
                  <li>• Well-trained, helpful pharmacists</li>
                  <li>• 24-hour locations around Sol area</li>
                  <li>• Look for green cross signs</li>
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
