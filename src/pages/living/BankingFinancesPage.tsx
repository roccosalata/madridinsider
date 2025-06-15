
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { bankingInfo } from '@/data/bankingInfo';
import { Banknote, Landmark, Receipt, Coins } from 'lucide-react';

const BankingFinancesPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Banking & Finances"
        subtitle="A guide to managing your finances in Madrid, from opening an account to daily banking."
      />
      <div className="container mx-auto py-12 px-4 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Landmark className="h-6 w-6 text-madrid-red" />
              {bankingInfo.howToOpen.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700">
            {bankingInfo.howToOpen.content.map((p, i) => <p key={i}>{p}</p>)}
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Banknote className="h-5 w-5 text-madrid-red" />
                {bankingInfo.banksAndCajas.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p>{bankingInfo.banksAndCajas.content}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Receipt className="h-5 w-5 text-madrid-red" />
                {bankingInfo.cheques.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p>{bankingInfo.cheques.content}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Coins className="h-5 w-5 text-madrid-red" />
                {bankingInfo.foreignExchange.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p>{bankingInfo.foreignExchange.content}</p>
            </CardContent>
          </Card>
        </div>

      </div>
    </Layout>
  );
};

export default BankingFinancesPage;
