typescriptreact
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const MadridNowPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Madrid Now"
        subtitle="What's happening in Madrid right now"
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Current Events and News</h2>
          <p className="text-lg mb-4">
            This section will be updated regularly with the latest events, news, and temporary information relevant to visitors and residents of Madrid.
          </p>
          {/* Future dynamic content goes here */}
        </div>
      </section>
    </Layout>
  );
};

export default MadridNowPage;