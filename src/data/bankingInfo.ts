
export interface BankingInfo {
  howToOpen: {
    title: string;
    content: string[];
  };
  banksAndCajas: {
    title:string;
    content: string;
  };
  cheques: {
    title:string;
    content: string;
  };
  foreignExchange: {
    title: string;
    content: string;
  };
}

export const bankingInfo: BankingInfo = {
  howToOpen: {
    title: "How to Open a Bank Account",
    content: [
      "In most cases, you will need a residency card (Tarjeta de Identidad de Extranjero - TIE) to open a bank account. However, Bankinter offers an excellent online bank account which can be viewed in English and which you can open with your passport number. See www.ebankinter.com for more information.",
      "To open a current account (cuenta corriente), take your passport or Spanish residency card to the bank, and provide your name, address and telephone number. If you are a non-resident without a work permit, you will need a certificate of non-residency (certificado de no residencia), which is important for tax reasons. You can obtain this at a police station (Comisaría de Policía) that handles foreign documentation (Extranjería)."
    ]
  },
  banksAndCajas: {
    title: "Bancos y Cajas",
    content: "A 'caja de ahorros' is a savings bank, while a 'banco' is a privately owned bank. Both offer similar services, but a caja traditionally invests its profits in social and cultural projects. Most banks are only open in the mornings (typically 8:30 AM to 2:00 PM) and are closed on Sundays and public holidays."
  },
  cheques: {
    title: "Cheques",
    content: "Cheques (talones) are rarely used in Spain for daily transactions, which are typically handled with cash (efectivo or metálico) or by card. To cash a cheque, you must take it to the exact branch (sucursal) where it was issued to get cash on the spot. Alternatively, you can deposit it into your own bank account, though it may take a few days to clear."
  },
  foreignExchange: {
    title: "Foreign Currency Exchange",
    content: "Banks and money-transfer companies charge fees for international transfers. The best method depends on your circumstances. For transfers within the EU, using your own bank is often the cheapest option. For changing foreign currency (notes) into euros, your bank will generally offer the best exchange rates."
  }
};
