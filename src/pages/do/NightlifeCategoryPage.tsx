
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { nightlifeCategories } from '@/data/do/nightlifeCategories';

import SalsaClubsSection from './nightlife/SalsaClubsSection';
import NightclubsSection from './nightlife/NightclubsSection';
import CocktailBarsSection from './nightlife/CocktailBarsSection';
import RooftopTerracesSection from './nightlife/RooftopTerracesSection';
import StreetTerracesSection from './nightlife/StreetTerracesSection';

const sectionComponents: Record<string, React.FC> = {
  'salsa-clubs': SalsaClubsSection,
  'nightclubs': NightclubsSection,
  'cocktail-bars': CocktailBarsSection,
  'rooftop-terraces': RooftopTerracesSection,
  'street-terraces': StreetTerracesSection,
};

const NightlifeCategoryPage: React.FC = () => {
    const { categorySlug } = useParams<{ categorySlug: string }>();

    if (!categorySlug) {
        return <Layout><div>Category not found</div></Layout>;
    }

    const category = nightlifeCategories.find(c => c.slug === categorySlug);
    const Component = sectionComponents[categorySlug];

    if (!category || !Component) {
        return <Layout><div>Category content not found</div></Layout>;
    }

    return (
        <Layout>
             <HeroSection title="Nightlife & Bars" subtitle="Discover Madrid's vibrant nightlife, from energetic salsa clubs to trendy bars and super-clubs." />
             <div className="container mx-auto py-12 px-4">
                <div className="mb-8">
                    <Button asChild variant="outline">
                        <Link to="/do-in-madrid/nightlife" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Nightlife Categories
                        </Link>
                    </Button>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                    <Component />
                </div>
            </div>
        </Layout>
    );
};

export default NightlifeCategoryPage;
