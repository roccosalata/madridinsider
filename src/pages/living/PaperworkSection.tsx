
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const PaperworkSection = () => (
  <section id="paperwork" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Paperwork & NIE/TIE</h2>
    
    <Alert variant="destructive" className="mb-8">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Important Disclaimer</AlertTitle>
      <AlertDescription>
        Immigration and legal requirements change frequently. The information provided here is for general guidance only. Always consult official sources like the Spanish government websites and your local Spanish consulate for the most accurate and up-to-date information.
      </AlertDescription>
    </Alert>

    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Understanding Spanish Paperwork</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Navigating Spanish bureaucracy can be a complex process, especially for newcomers. Key documents you may need to handle include the NIE (Número de Identificación de Extranjero), TIE (Tarjeta de Identidad de Extranjero), and empadronamiento (city hall registration).
          </p>
          <p>
            We are currently updating this section to provide a clear and helpful guide. Please check back soon for detailed information on these processes.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Official Resources</CardTitle>
        </CardHeader>
        <CardContent>
            <p>For the most reliable information, please refer to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>The official website of the Spanish Ministry of Foreign Affairs.</li>
                <li>The website of the Spanish consulate or embassy in your home country.</li>
                <li>Spain's official immigration portal.</li>
            </ul>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default PaperworkSection;
