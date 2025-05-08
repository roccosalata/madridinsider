
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, IdCard, User, BookOpen } from 'lucide-react';
import { useState } from 'react';

const Living = () => {
  const [activeTab, setActiveTab] = useState("accommodation");

  return (
    <Layout>
      <HeroSection
        title="Living in Madrid"
        subtitle="Practical information for students and expats making Madrid their new home"
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Making Madrid Your Home</h2>
          <p className="text-gray-700 mb-4">
            Whether you're coming to Madrid as a student for a semester or as an expat for several years, navigating life in a new city can be both exciting and challenging. This guide will help you settle in and feel like a local in no time.
          </p>
          <p className="text-gray-700">
            Madrid is a welcoming city with a large international community, excellent public transportation, and a high quality of life. With some insider knowledge and a bit of patience with bureaucracy, you'll soon be enjoying all the benefits of Madrid living.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="accommodation" className="flex items-center gap-2">
              <Home size={18} /> Accommodation
            </TabsTrigger>
            <TabsTrigger value="nie" className="flex items-center gap-2">
              <IdCard size={18} /> NIE & Paperwork
            </TabsTrigger>
            <TabsTrigger value="student-life" className="flex items-center gap-2">
              <User size={18} /> Student Life
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="accommodation" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Finding Accommodation</h2>
              <p className="text-gray-600 mb-6">
                Finding the right place to live is one of the first and most important steps in settling into Madrid. Here's what you need to know:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Neighborhoods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Malasaña:</strong> Trendy area popular with students and young professionals. Great nightlife and creative scene.</li>
                      <li><strong>La Latina:</strong> Historic neighborhood with traditional tapas bars and a charming atmosphere.</li>
                      <li><strong>Salamanca:</strong> Upscale residential area with beautiful architecture and shopping.</li>
                      <li><strong>Argüelles/Moncloa:</strong> University area with more affordable rents, popular with students.</li>
                      <li><strong>Lavapiés:</strong> Multicultural neighborhood with diverse food options and affordable housing.</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Rental Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Expect to pay between €400-700/month for a room in a shared apartment.</li>
                      <li>Studio apartments start around €700-900/month depending on the area.</li>
                      <li>Most landlords require a deposit of 1-2 months' rent.</li>
                      <li>Be prepared to show proof of income or a Spanish guarantor.</li>
                      <li>Websites like Idealista, Spotahome, and Uniplaces are good places to start your search.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>What to Look For in Your Rental</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Heating:</strong> Madrid winters can be cold. Check if the apartment has central heating or individual heaters.</li>
                    <li><strong>Air Conditioning:</strong> Summers are hot, so AC can be essential for comfort during July and August.</li>
                    <li><strong>Internet:</strong> Confirm if it's included in the rent or if you need to set it up yourself.</li>
                    <li><strong>Transportation:</strong> Check proximity to metro stations and bus lines.</li>
                    <li><strong>Contract:</strong> Always insist on a proper rental contract to protect your rights.</li>
                    <li><strong>Utilities:</strong> Ask which utilities are included and which you'll need to pay separately.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="nie" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">NIE & Essential Paperwork</h2>
              <p className="text-gray-600 mb-6">
                Navigating Spanish bureaucracy can be challenging, but getting your paperwork in order early will make your stay much smoother.
              </p>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Getting Your NIE</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">The NIE (Número de Identidad de Extranjero) is an identification number for foreigners that you'll need for many aspects of life in Spain.</p>
                  
                  <h4 className="font-semibold text-lg mb-2">Steps to obtain your NIE:</h4>
                  <ol className="list-decimal pl-5 space-y-2 mb-4">
                    <li>Book an appointment (cita previa) online through the <a href="https://sede.administracionespublicas.gob.es/" className="text-madrid-red hover:underline" target="_blank" rel="noopener noreferrer">government website</a>.</li>
                    <li>Complete the EX-15 form (available online).</li>
                    <li>Pay the fee (modelo 790) at a bank before your appointment.</li>
                    <li>Bring your passport, completed forms, fee payment receipt, and proof of reason for requesting NIE (work contract, enrollment letter, etc.).</li>
                    <li>Attend your appointment with all documents and copies.</li>
                  </ol>
                  
                  <p><strong>Tip:</strong> Book your appointment as soon as possible as slots can be limited, and consider using a gestor (administrative helper) if you're struggling to get an appointment.</p>
                </CardContent>
              </Card>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Opening a Bank Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Having a Spanish bank account will make your life easier for rent payments, utilities, and daily expenses.</p>
                  
                  <h4 className="font-semibold text-lg mb-2">What you'll need:</h4>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Your passport</li>
                    <li>NIE or TIE (if you have it already)</li>
                    <li>Proof of address in Spain (rental contract, utility bill)</li>
                    <li>Student card or work contract (depending on your situation)</li>
                  </ul>
                  
                  <p><strong>Options:</strong> Consider banks like Santander, BBVA, or CaixaBank which offer student accounts with reduced fees. Online banks like N26 or Revolut may also be good alternatives with fewer documentation requirements.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="student-life" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Student Life in Madrid</h2>
              <p className="text-gray-600 mb-6">
                Madrid is home to several prestigious universities and thousands of international students each year. Here's how to make the most of your student experience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Discounts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Your student card is valuable! Use it for discounts on:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Museums:</strong> Most offer free or reduced entry for students.</li>
                      <li><strong>Transportation:</strong> Get the youth transport card for significant savings.</li>
                      <li><strong>Cinemas:</strong> Many offer student rates on certain days.</li>
                      <li><strong>Software:</strong> Educational versions of software are often available.</li>
                      <li><strong>Restaurants:</strong> Some offer "menú del estudiante" at lower prices.</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Language Exchange</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Improving your Spanish while meeting locals and fellow internationals:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Intercambios:</strong> Language exchange events at bars like J&J's and Café de Lenguas.</li>
                      <li><strong>University Groups:</strong> Most universities have language exchange programs.</li>
                      <li><strong>Apps:</strong> Tandem, HelloTalk, and Meetup are great for finding language partners.</li>
                      <li><strong>Libraries:</strong> Some public libraries host free conversation groups.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>5 Essential Tips for Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li><strong>Get the Abono Joven:</strong> If you're under 26, this transport card gives you unlimited travel on Madrid's excellent public transport network for just €20/month.</li>
                    <li><strong>Student Tuesdays at Cinemas:</strong> Many theaters offer discounted tickets on Tuesdays, with further reductions for students.</li>
                    <li><strong>University Facilities:</strong> Make use of your university's libraries, gyms, and cafeterias which are often cheaper than alternatives.</li>
                    <li><strong>Free Museum Days:</strong> Plan your cultural visits around free entry times at Madrid's world-class museums.</li>
                    <li><strong>Join Student Groups:</strong> Whether through ESN (Erasmus Student Network), university clubs, or apps like Meetup, connecting with other students is the best way to enjoy Madrid.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><BookOpen size={20} /> Study Spots</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Madrid offers many great places to study beyond your university library:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>La Central de Callao:</strong> Bookstore with quiet study areas and café.</li>
                    <li><strong>Biblioteca Nacional:</strong> Impressive national library with study rooms.</li>
                    <li><strong>Café de la Luz:</strong> Cozy café with Wi-Fi and a study-friendly atmosphere.</li>
                    <li><strong>Public Libraries:</strong> Madrid has an extensive network of public libraries with free Wi-Fi.</li>
                    <li><strong>El Retiro Park:</strong> When weather permits, studying outdoors can be refreshing.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <Card className="mt-12 bg-gray-50">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4">Insider Tip</h3>
            <p className="text-gray-700 italic">
              "When dealing with Spanish bureaucracy, go early in the morning (before opening if possible), bring multiple copies of all documents, and exercise patience. Most importantly, make friends with locals who can help you navigate the system—a Spanish-speaking friend can be invaluable when dealing with administrative matters!"
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Living;
