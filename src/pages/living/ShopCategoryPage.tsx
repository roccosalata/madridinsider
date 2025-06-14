
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ShopList from '@/components/essentials/ShopList';
import { shopCategories } from '@/data/shops';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ShopCategoryPage = () => {
    const { categorySlug } = useParams<{ categorySlug: string }>();
    const category = shopCategories.find(c => c.slug === categorySlug);

    if (!category) {
        return (
            <Layout>
                 <HeroSection title="Category Not Found" subtitle="Sorry, we couldn't find the category you're looking for." />
                <div className="container mx-auto py-12 px-4 text-center">
                    <p className="mb-4">The shop category you are looking for does not exist.</p>
                    <Button asChild>
                        <Link to="/living-in-madrid/shopping-services">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Shops & Services
                        </Link>
                    </Button>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <HeroSection
                title={category.title}
                subtitle={`A curated list of ${category.title.toLowerCase()} in Madrid.`}
            />
            <div className="container mx-auto py-12 px-4">
                <div className="mb-8">
                    <Button asChild variant="outline">
                        <Link to="/living-in-madrid/shopping-services">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to All Shops & Services
                        </Link>
                    </Button>
                </div>
                <ShopList
                    title={category.title}
                    shops={category.data}
                    icon={category.icon}
                />
            </div>
        </Layout>
    );
};

export default ShopCategoryPage;
