
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';

const Living = () => {
  return (
    <Layout>
      <HeroSection 
        title="Madrid Life: Practical Guide" 
        subtitle="Make Madrid home: Advice on accommodation, paperwork, and daily services for students, expats, and long-term residents" 
      />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Madrid Life: Practical Guide</h1>
        <p className="text-lg mb-12">Essential information for anyone planning to live in Madrid, whether you're a student, expat, or long-term resident.</p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Finding Accommodation in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about finding accommodation in Madrid, including neighborhoods, rental processes, and typical costs.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Paperwork & Formalities (NIE, TIE, Empadronamiento, Visas)</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about essential paperwork and administrative procedures for living in Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Banking & Finances in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about banking services, opening accounts, and managing finances in Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Connectivity & Home Services (Mobile, Internet, Utilities)</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about setting up mobile phones, internet, and utilities in Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Healthcare Guide for Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about accessing healthcare services in Madrid, including public and private options.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Education & Childcare in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about schools, universities, language learning, and childcare options in Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Working in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about finding jobs, work permits, and the employment market in Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Student Life Essentials in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about resources and tips specifically for students living in Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Community & Integration in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about joining communities, meeting people, and integrating into Madrid life.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Daily Necessities & Services in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about essential services and daily necessities in Madrid, from grocery shopping to postal services.</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Living;
