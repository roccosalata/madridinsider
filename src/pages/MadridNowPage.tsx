
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';

const MadridNowPage = () => {
  const upcomingEvents = [
    {
      title: "Madrid Fashion Week",
      date: "October 15-20, 2025",
      location: "IFEMA Madrid"
    },
    {
      title: "San Isidro Festival",
      date: "May 15, 2025",
      location: "Various Venues"
    },
    {
      title: "International Book Fair",
      date: "June 2-18, 2025",
      location: "Retiro Park"
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="Madrid Now"
        subtitle="What's happening in Madrid right now"
      />

      <div className="container mx-auto py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Current Events and News</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-b pb-3 last:border-b-0">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.date}</p>
                    <p className="text-gray-500 text-sm">{event.location}</p>
                  </div>
                ))}
                <p className="text-center py-4 text-gray-600">
                  More event listings coming soon. This section will contain a comprehensive calendar of Madrid events.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What's On</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                This section will be updated regularly with the latest events, news, and temporary information relevant to visitors and residents of Madrid.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default MadridNowPage;
