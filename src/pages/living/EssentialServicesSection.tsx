
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Building, CreditCard, HeartPulse, Wifi } from "lucide-react";

const EssentialServicesSection = () => (
  <section id="essential-services" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Essential Services</h2>
    <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
      Your guide to setting up essential services for living in Madrid, from banking and healthcare to utilities and connectivity.
    </p>

    <Alert className="mb-8">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Getting Started</AlertTitle>
      <AlertDescription>
        Most services require your NIE (Número de Identificación de Extranjero) and proof of address. It's recommended to obtain these documents first before setting up other services.
      </AlertDescription>
    </Alert>

    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-madrid-red" />
            Banking & Finances
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Setting up a Spanish bank account is essential for receiving salary, paying rent, and managing daily expenses.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">Required Documents:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Passport and NIE</li>
              <li>Proof of address (empadronamiento)</li>
              <li>Employment contract or proof of income</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Popular Banks:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Santander - Wide network, English support</li>
              <li>BBVA - Digital banking options</li>
              <li>CaixaBank - Student-friendly accounts</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HeartPulse className="h-5 w-5 text-madrid-red" />
            Healthcare System
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Spain has both public healthcare (Sistema Nacional de Salud) and private healthcare options.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">Public Healthcare:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Free with Social Security registration</li>
              <li>Requires empadronamiento and NIE</li>
              <li>European Health Insurance Card accepted</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Private Healthcare:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Faster appointments and English-speaking doctors</li>
              <li>Popular providers: Sanitas, DKV, Adeslas</li>
              <li>Often required for visa applications</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wifi className="h-5 w-5 text-madrid-red" />
            Internet & Utilities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Setting up internet, electricity, gas, and water services for your new home.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">Internet Providers:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Movistar - Largest network coverage</li>
              <li>Orange - Competitive pricing</li>
              <li>Vodafone - Good for bundled services</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Utilities Setup:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Electricity: Iberdrola, Endesa, Naturgy</li>
              <li>Gas: Often bundled with electricity</li>
              <li>Water: Usually managed by building/landlord</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5 text-madrid-red" />
            Housing & Accommodation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Finding and securing accommodation in Madrid, from temporary stays to long-term rentals.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">Popular Websites:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Idealista - Most comprehensive listings</li>
              <li>Fotocasa - Good for both buying and renting</li>
              <li>SpotaHome - For international students</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Tips:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Budget 1-2 months deposit plus first month</li>
              <li>Consider neighborhoods outside city center</li>
              <li>Shared flats (pisos compartidos) are common</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>

    <Alert className="mt-8">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Remember</AlertTitle>
      <AlertDescription>
        Services and requirements change regularly. Always verify current requirements with official sources and consider consulting with local experts when needed.
      </AlertDescription>
    </Alert>
  </section>
);

export default EssentialServicesSection;
