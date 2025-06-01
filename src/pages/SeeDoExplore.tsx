
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { MapPinned, Landmark, Building, Compass } from 'lucide-react';
import MapHubLink from '@/components/transport/MapHubLink';
import NeighborhoodGuide from '@/components/attractions/NeighborhoodGuide';

const SeeDoExplore: React.FC = () => {
  return (
    <Layout>
      <HeroSection 
        title="See, Do & Explore Madrid" 
        subtitle="Discover Madrid's best: Attractions, activities, entertainment, shopping, and in-depth neighborhood guides" 
      />
      
      <div className="container mx-auto py-12 px-4">

        <h1 className="text-4xl font-bold mb-8">See, Do & Explore Madrid</h1>
        <p className="text-lg mb-12">Discover the best of Madrid, from its iconic sights and attractions to a wide range of activities and entertainment.</p>
        
        {/* See Section */}
        <section id="see-madrid" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">See</h2>

          <section className="mb-8 p-6 border rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Compass className="h-6 w-6 text-madrid-red" />
              <h3 className="text-2xl font-bold">Explore Madrid's Neighborhoods</h3>
            </div>
            <p className="mb-4">Dive into the unique character and hidden gems of Madrid's diverse neighborhoods.</p>
            {/* Placeholder link to conceptual Neighborhoods page */}
            <Link to="/see-do-explore/neighborhoods" className="text-madrid-red hover:underline font-semibold">
              Discover Neighborhoods
            </Link>
          </section>
        </section>
        {/* Do Section */}
        <section id="do-in-madrid" className="mb-12 p-6 border rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-6">Do</h2>
          
          <section className="mb-8 p-6 border rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Sports & Recreation</h3>

            <p className="mb-4">Find opportunities for sports, fitness, outdoor activities, and recreation throughout the city.</p>
            {/* Placeholder link to conceptual Sports & Recreation page */}
            <Link to="/see-do-explore/sports-recreation" className="text-madrid-red hover:underline font-semibold">
              Find Sports & Recreation
            </Link>
          </section><section className="mb-8 p-6 border rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Shopping Guide</h3>

            <p className="mb-4">Discover the best places to shop in Madrid, from high-end boutiques to local markets.</p>
            {/* Placeholder link to conceptual Shopping page */}
            <Link to="/see-do-explore/shopping" className="text-madrid-red hover:underline font-semibold">
              Go Shopping
            </Link>
          </section>
        </section>
      </div>
    </Layout>
  );
};
export default SeeDoExplore;
