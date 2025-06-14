
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    title: "Call your Centro de Salud",
    description: "Provide your address to find your nearest health center. Check yellow pages for numbers."
  },
  {
    title: "Arrival and Registration",
    description: "You'll get a time window, not specific appointment. Fill out form at reception, get doctor's name and room (sala)."
  },
  {
    title: "Waiting and Consultation",
    description: "Ask \"¿Quién es el último?\" (Who's last?) to find your place in line. Be prepared to translate symptoms as doctor may not speak English."
  },
  {
    title: "Prescription and Follow-up",
    description: "Get prescription (receta) and take to pharmacy (green cross sign). Return to reception if referred to specialist."
  }
];

const DoctorVisitGuide = () => (
  <section className="mb-12">
    <h3 className="text-2xl font-bold mb-6">How to Visit a Doctor</h3>
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-madrid-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">{index + 1}</div>
              <div>
                <h4 className="font-semibold">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </section>
);

export default DoctorVisitGuide;
