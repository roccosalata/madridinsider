
import React from "react";
import { directoryData } from "@/data/directoryData";

const bankingFinancesData = directoryData['living-in-madrid']?.['banking-finances'];

const BankingFinancesSection = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Banking & Finances</h2>
    {bankingFinancesData ? (
      <div>
        <p>{(bankingFinancesData as any).introduction}</p>
      </div>
    ) : (
      <p>Information about banking and finances is coming soon.</p>
    )}
  </section>
);

export default BankingFinancesSection;
