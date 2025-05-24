
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { useParams } from 'react-router-dom';

const FoodAndDrink = () => {
  
  return (
    <Layout>
       <HeroSection
        title={secondCategory ? secondCategory.replace(/-/g, ' ') : 'Food & Drink'}
        subtitle={`Discover the various options within ${secondCategory ? secondCategory.replace(/-/g, ' ').toLowerCase() : 'Food & Drink'} in Madrid.`}
      />
      
      <div className="container mx-auto py-12 px-4">
         <h1 className="text-4xl font-bold mb-8">{secondCategory ? secondCategory.replace(/-/g, ' ') : 'Food & Drink'} in Madrid</h1>
        <p className="text-lg mb-12">Explore the vibrant culinary landscape of Madrid.</p>
        
        {/* {categoryData && Object.keys(categoryData).map(subCategory => (
          <section key={subCategory} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{subCategory}</h2>
            <Card>
                      <Link to={`/${primaryCategory}/${secondCategory}/${encodeURIComponent(item)}`} className="text-blue-600 hover:underline">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        ))} */} 

       <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Dining Etiquette in Madrid</h2> 
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about local dining customs and etiquette in Madrid.</p>
            </CardContent>
          </Card>
        </section> */}
        </section>
      </div>
    </Layout>
  );
};

export default FoodAndDrink;
