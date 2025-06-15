
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Globe, Mail, FileText } from "lucide-react";

const teacherTrainingCenters = [
  {
    name: "EBC Int. TEFL Certificate",
    address: "Orense, 16, 2-E (Metro: Santiago Bernabeu)",
    phone: "915-553-975",
    fax: "770-21-12",
    website: "www.ebc-tefl-course.com",
    email: "tefl@ebcidiomas.com",
    description: "The EBC International TEFL Certificate qualifies you to teach English as a foreign language to business professionals, adults and younger people. Come and join us in our teaching adventure: study abroad, work abroad, teach abroad."
  },
  {
    name: "Canterbury",
    address: "Augusto Figueroa, 47, 1, 1 (Metro: Gran Via)",
    phone: "915-229-898",
    website: "www.canterburyenglish.com",
    email: "canterbury@canterburyenglish.com",
    description: "Canterbury English is a professional association of professors and students from all over the world. Canterbury English will provide successful graduates of our program the possibility of working up to 20-25 hours/week teaching English, if they so desire. Utilizing \"FLEX\" scheduling, Canterbury accommodates the needs of our participants and provides them with the maximum flexibility necessary to balance their time between studying, traveling, and working."
  }
];

const teacherTrainingResources = [
  "www.windsorschools.co.uk/tefl_tesol_madrid.html",
  "www.oxfordtefl.com",
  "www.ihmadrid.com/english.htm",
  "www.cactuslanguage.com",
  "www.eslcafe.com",
  "www.marksesl.com",
  "www.expatriatecafe.com",
  "www.eslteachersboard.com",
  "www.spainexchange.com",
  "www.goabroad.com",
  "www.tefl.com",
  "www.eviews.net/references.html"
];

const TeacherTrainingSection: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Teacher Training & TEFL Certification</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 mb-6">
        For those interested in teaching English in Madrid, there are several TEFL certification programs and resources available:
      </p>
      <div className="space-y-6">
        {teacherTrainingCenters.map((center, index) => (
          <div key={index} className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-semibold text-lg mb-3">{center.name}</h4>
            <p className="text-gray-700 mb-4 text-sm">{center.description}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{center.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{center.phone}</span>
              </div>
              {center.fax && (
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 flex-shrink-0" />
                  <span>Fax: {center.fax}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 flex-shrink-0" />
                <span>{center.website}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>{center.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h5 className="font-semibold mb-4">Additional TEFL Resources</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {teacherTrainingResources.map((resource, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <Globe className="h-3 w-3 flex-shrink-0" />
              <span>{resource}</span>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default TeacherTrainingSection;
