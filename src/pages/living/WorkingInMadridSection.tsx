import React from "react";
import { directoryData } from "@/data/directoryData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { talentAgencies } from "@/data/living/talentAgencies";
import TalentAgenciesList from "@/components/living/work/TalentAgenciesList";
import { Globe, Mail, Phone, MapPin, User } from "lucide-react";
import { internshipOpportunities } from "@/data/living/internshipOpportunities";
import { filmResources } from "@/data/living/filmResources";
import EnglishTeacherAgenciesList from "@/components/living/work/EnglishTeacherAgenciesList";
import { englishTeacherAgencies } from "@/data/living/englishTeacherAgencies";

const workingInMadridData = directoryData['living-in-madrid']?.['working-in-madrid'];

const WorkingInMadridSection = () => (
  <section id="work" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Work & Professional Life</h2>
    
    <div className="space-y-8">
      <Card>
        <CardHeader><CardTitle>Working in Madrid</CardTitle></CardHeader>
        <CardContent>
          {workingInMadridData ? (
            <p>{(workingInMadridData as any).introduction}</p>
          ) : (
            <p>Information about working in Madrid is coming soon.</p>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader><CardTitle>English Teacher Advice</CardTitle></CardHeader>
        <CardContent className="prose max-w-none dark:prose-invert">
          <p>If you are looking for English Teaching work in Spain one option would be to contact all of the people who offer English teaching jobs year round.</p>
          <h4>Finding Work</h4>
          <ol>
            <li>Call agencies to set up a face to face meeting with one of their representatives.</li>
            <li>Email your CV/Resume (with a scanned ID size photo in the upper right hand corner) so they have a copy for your meeting. It is better to send it when they are expecting it.</li>
            <li>Meet with them in person to review your experience and availability.</li>
            <li>Keep them up to date on your availability as it changes. Let them know where your current classes are so they can offer you new classes in the same area.</li>
          </ol>
          <p>They will call you as classes come in and the people they usually count on cannot accept them. The more people you meet with, the better your odds are of getting work.</p>
          
          <h4>Placing Ads & Finding Offers</h4>
          <p>You can place free ads online and in print publications like In Madrid, Broadsheet, Segundamano, Aprende Mas, and Teach in Spain. Also, check the classified sections of these publications for job offers.</p>

          <h4>Prioritizing Contacts</h4>
          <p>There are many people offering teaching work, so it can be costly to call everyone. It makes sense to prioritize them based on what you have heard, your work status, and whether they hire non-EU citizens. After calling your priority list, it does no harm to e-mail the rest.</p>

          <h4>Legal Status and Work</h4>
          <ol>
            <li>Anyone can teach private lessons arranged directly with students via flyers or free ads.</li>
            <li>If you are an EU citizen, you can apply to work with all agencies.</li>
            <li>If you are non-EU, you can still find work. Make "Do you hire non-EU teachers?" your first question to save time.</li>
          </ol>

          <h4>Tips for Aspiring Teachers in Spain</h4>
          <h5>1. Timing is Key</h5>
          <p>Be wise about when you come to Spain. If you need to take a teacher training course, consider the hiring seasons. You don’t want to be training while most schools are interviewing and hiring. It’s better to complete your training during a slower month (like July, August, January) so you are ready to job search during peak hiring times.</p>
          
          <h5>2. Bring Enough Money</h5>
          <p>Spain can be more expensive than you think. Bring enough money to support yourself for 3 months to a year. You will need disposable income as you get used to your new environment. It takes time to get enough hours for a good contract. Having savings allows you the luxury of turning down undesirable jobs (e.g., far away, low pay) and building an ideal schedule over time.</p>
          <p className="font-bold text-red-600">WARNING: Without sufficient savings, you may be forced to accept any job that comes your way, leading to a frustrating experience of running around for low-paying, unstable work.</p>

          <h4>TEFL & CELTA Courses</h4>
          <p>One-month TEFL and CELTA courses for confidence-building and training cost around 1000 to 2000 euros. Summer is a great time for this, but remember that while demand for teachers is high in Madrid, so is the supply of both qualified and unqualified people, which keeps wages lower than in places like Korea or Japan. Certification provides structure, builds confidence, and is often required for better-paying jobs outside of Spain.</p>
          <p>July and August are also great months to find long-term housing in Madrid, with better offers than in September/October or February.</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>How to Choose the Right TEFL Course</CardTitle>
          <CardDescription>by Victoria Galloway</CardDescription>
        </CardHeader>
        <CardContent className="prose max-w-none dark:prose-invert">
          <p>So you fancy coming to Spain to teach English. I'd advise that you also study for a TEFL certificate in Spain. Not only is this completely necessary for better job prospects and better pay, but could you imagine walking into a room full of students and having to teach them grammar? The answer is probably, and understandably, no! You need training. But which TEFL course is right for you? There are so many out there and choosing one can be a daunting task.</p>
          <p>If you are choosing to TEFL as a way to start a second career, make sure that you choose a country that has a strong business market. Moving to a city with a strong business market will enable you to meet all the right people. You’ll be teaching senior managers and company directors and this is the perfect way to make contacts.</p>
          <p>If you are looking to teach English for a career in TEFL then make sure you are thinking about the long-term opportunities your course should provide. You need to go to a country where the TEFL industry is very organised and already well established. This will make your progression a lot easier.</p>
          <p>Whatever your reason for TEFL, there are a set of standards that will ensure good quality training and the support and assistance you need.</p>
          <ul>
            <li>The course should be accredited by an external body. Don’t be fooled by ‘internationally recognised’ – it’s marketing talk and nothing more.</li>
            <li>The course has a comprehensive grammar programme. It is often the toughest area and you need to know what you are talking about when you enter the classroom.</li>
            <li>You do real teaching practices on site that are observed by experienced trainers. There should be a minimum of 6 teaching practices.</li>
            <li>They also prepare you for the market you are entering for example in Spain, exam preparation skills and telephone teaching are essential.</li>
            <li>Whilst most courses focus on adults, try and find a course that introduces you to teaching children and teenagers to open up your options.</li>
            <li>The TEFL course provider offer assistance with accommodation, visas, bank accounts, organizing your legal paperwork.</li>
            <li>They should have a comprehensive job support programme to help you get work after the course.</li>
            <li>The focus should be on the course and not the party! The course should be demanding and intensive. Do you want to pay someone to party or to be a well-trained teacher?</li>
            <li>Go with your gut feeling. Each school is different, do your research, pester them with questions, ask to be put in touch with their graduates and go with the one that gives you the best ‘feeling’. It’s the door to your new life so make sure it’s not a dead end.</li>
          </ul>
          <p>Remember that TEFL is a passport to a new life and this is exciting and thrilling. But before you pack your bags, be sensible in your choices to ensure your new experiences are trouble free and manageable. You won’t regret it.</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Teaching English in Madrid: A Teacher's Perspective</CardTitle>
        </CardHeader>
        <CardContent>
          <p>With experience you can quickly start to earn good money in Madrid (typically 25-30€ an hour) via private and business classes. However you need to have a certain knowledge of Spanish, if only to get past the security guy (or woman) at the business entrance. Another thing to be aware of is that there are often holidays that get turned into long weekends (known as puentes, or bridges) so what looks on paper like a good weekly wage is often unobtainable on a regular basis.</p>
        </CardContent>
      </Card>

      <EnglishTeacherAgenciesList agencies={englishTeacherAgencies} />

      <Card>
        <CardHeader><CardTitle>Online Resources & Classifieds</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-madrid-red mb-2">Teach in Spain</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Spain English Teaching job site where you can find current job offers and submit your CV and post free ads for private lessons.</p>
              <a href="http://www.teachinspain.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <Globe className="h-4 w-4 flex-shrink-0" />
                  <span>www.teachinspain.org</span>
              </a>
              <a href="mailto:info@teachinspain.org" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@teachinspain.org</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-madrid-red mb-2">Aprendemas</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Cursos y Formacion. A very helpful website where you can submit a free ad for private lessons.</p>
              <a href="http://www.aprendemas.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <Globe className="h-4 w-4 flex-shrink-0" />
                  <span>www.aprendemas.com</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-madrid-red mb-2">Segundamano</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>A very helpful website where you can submit a free ad for private lessons.</p>
              <a href="http://www.segundamano.es" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <Globe className="h-4 w-4 flex-shrink-0" />
                  <span>www.segundamano.es</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>


      <Card>
        <CardHeader><CardTitle>Internships</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-red-600 mb-4">
            Disclaimer: Internship regulations and availability can change. Always consult official sources and relevant organizations for the latest information.
          </p>
          <div className="space-y-6">
            {internshipOpportunities.map((opportunity, index) => (
              <div key={index} className="py-4 border-b last:border-b-0">
                <h4 className="font-semibold text-madrid-red mb-2">{opportunity.name}</h4>
                <div className="space-y-1 text-sm text-gray-700">
                  {opportunity.description && <p>{opportunity.description}</p>}
                  {opportunity.address && <p className="flex items-start gap-2"><MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" /><span>{opportunity.address}</span></p>}
                  {opportunity.contactPerson && <p className="flex items-center gap-2"><User className="h-4 w-4 flex-shrink-0" />{opportunity.contactPerson}</p>}
                  {opportunity.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" />{opportunity.phone}</p>}
                  {opportunity.email && <a href={`mailto:${opportunity.email}`} className="flex items-center gap-2 text-blue-600 hover:underline"><Mail className="h-4 w-4 flex-shrink-0" />{opportunity.email}</a>}
                  {opportunity.website && <a href={!opportunity.website.startsWith('http') ? `http://${opportunity.website}` : opportunity.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline"><Globe className="h-4 w-4 flex-shrink-0" />{opportunity.website}</a>}
                  {opportunity.notes && <p className="text-sm text-blue-600 font-medium mt-2">{opportunity.notes}</p>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <TalentAgenciesList agencies={talentAgencies} />

      <Card>
        <CardHeader><CardTitle>Film & TV Resources</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filmResources.map((resource, index) => (
              <div key={index} className="py-4 border-b last:border-b-0">
                <h4 className="font-semibold text-madrid-red mb-2">{resource.name}</h4>
                <div className="space-y-1 text-sm text-gray-700">
                  {resource.description && <p>{resource.description}</p>}
                  {resource.address && <p className="flex items-start gap-2"><MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" /><span>{resource.address}{resource.metro && ` (Metro: ${resource.metro})`}</span></p>}
                  {resource.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" />{resource.phone}</p>}
                  {resource.email && <a href={`mailto:${resource.email}`} className="flex items-center gap-2 text-blue-600 hover:underline"><Mail className="h-4 w-4 flex-shrink-0" />{resource.email}</a>}
                  {resource.website && <a href={!resource.website.startsWith('http') ? `http://${resource.website}` : resource.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline"><Globe className="h-4 w-4 flex-shrink-0" />{resource.website}</a>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Aupair</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-madrid-red mb-2">British School of English</h4>
            <div className="space-y-2 text-sm text-gray-700">
                <p>Call for information about work at schools or at private homes with families.</p>
                <p className="flex items-start gap-2"><MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" /><span>Solano 11, 3º - C, Pozuelo de Alarcón</span></p>
                <p className="flex items-center gap-2"><User className="h-4 w-4 flex-shrink-0" />Andy</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" />630-746-838</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-madrid-red mb-2">Empleados Domesticos</h4>
            <div className="space-y-2 text-sm text-gray-700">
                <p>Aupairs and girls/women wishing to work as interns are needed (English & French native speakers). Working and sleeping in a house in Madrid or other cities in Spain. Main duties are taking care of children. Applicants should be responsible and with references of similar jobs in or outside Spain. Salaries around 600 euros/month plus social security.</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" />915-484-949</p>
                <a href="mailto:foreign@empleadosdomesticos.com" className="flex items-center gap-2 text-blue-600 hover:underline"><Mail className="h-4 w-4 flex-shrink-0" />foreign@empleadosdomesticos.com</a>
                <a href="http://www.empleadosdomesticos.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline"><Globe className="h-4 w-4 flex-shrink-0" />www.empleadosdomesticos.com</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-madrid-red mb-2">Infointer / OleSpain</h4>
            <div className="space-y-2 text-sm text-gray-700">
                <p>Everything including: single room, pocket money, all the meals including.</p>
                <p className="flex items-start gap-2"><MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" /><span>c/ Mayor,32 - 28013 Madrid Spain</span></p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" />00 34 913 663 037</p>
                <a href="mailto:infointerspain@yahoo.es" className="flex items-center gap-2 text-blue-600 hover:underline"><Mail className="h-4 w-4 flex-shrink-0" />infointerspain@yahoo.es</a>
                <a href="http://www.olespain.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline"><Globe className="h-4 w-4 flex-shrink-0" />www.olespain.org</a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Journalism / Writing</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-madrid-red mb-2">Freelance Resources & Links</h4>
            <div className="space-y-2 text-sm text-gray-700">
                <p className="font-bold">Freelance Spain</p>
                <p>Helpful website full of information and links about the media and other resources in Madrid and the rest of Spain.</p>
                <a href="http://www.spainview.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <Globe className="h-4 w-4 flex-shrink-0" />
                    <span>www.spainview.com</span>
                </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-madrid-red mb-2">ITS</h4>
            <div className="space-y-2 text-sm text-gray-700">
                <p>Writer / Researcher needed to write World Reports.</p>
                <p>Please contact Cristina Davies for more information.</p>
                <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>607-551-255</span>
                </p>
                <a href="mailto:cristinadavies@its-group.co.uk" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span>cristinadavies@its-group.co.uk</span>
                </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Hostess / Azafatas</CardTitle></CardHeader>
        <CardContent>
            <div>
              <h4 className="font-semibold text-madrid-red mb-2">Azafatas & Promotoras</h4>
              <div className="space-y-2 text-sm text-gray-700">
                  <p>Portal de azafatas y promotoras.</p>
                  <p>National directory of agencies.</p>
                  <a href="http://www.azafatasypromotoras.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                      <Globe className="h-4 w-4 flex-shrink-0" />
                      <span>www.azafatasypromotoras.com</span>
                  </a>
              </div>
            </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default WorkingInMadridSection;
