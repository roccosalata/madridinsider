
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { livingCategories } from '@/data/living/livingCategories';

import CommunityIntegrationSection from './CommunityIntegrationSection';
import EducationChildcareSection from './EducationChildcareSection';
import EssentialServicesSection from './EssentialServicesSection';
import PaperworkSection from './PaperworkSection';
import ReligionsFaithsSection from './ReligionsFaithsSection';
import ShoppingServicesSection from './ShoppingServicesSection';
import WorkingInMadridSection from './WorkingInMadridSection';

const sectionComponents: Record<string, React.FC> = {
  'paperwork': PaperworkSection,
  'essential-services': EssentialServicesSection,
  'work': WorkingInMadridSection,
  'education': EducationChildcareSection,
  'shopping-services': ShoppingServicesSection,
  'religions-faiths': ReligionsFaithsSection,
  'community-integration': CommunityIntegrationSection,
};

const LivingCategoryPage: React.FC = () => {
    const { categorySlug } = useParams<{ categorySlug: string }>();

    if (!categorySlug) {
        return <Layout><div>Category not found</div></Layout>;
    }

    const category = livingCategories.find(c => c.slug === categorySlug);
    const Component = sectionComponents[categorySlug];

    if (!category || !Component) {
        return <Layout><div>Category content not found</div></Layout>;
    }

    return (
        <Layout>
             <HeroSection title={category.title} subtitle={category.description} />
             <div className="container mx-auto py-12 px-4">
                <div className="mb-8">
                    <Button asChild variant="outline">
                        <Link to="/living-in-madrid" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Living in Madrid
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

export default LivingCategoryPage;
