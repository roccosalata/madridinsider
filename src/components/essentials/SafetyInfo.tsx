
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

const SafetyInfo = () => (
  <Card id="safety">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <AlertTriangle className="h-5 w-5" />
        Safety & Security Tips
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-sm text-gray-700">
          While Madrid is generally safe, bag-snatching and wallet-lifting are unfortunately all too common. But with a little planning ahead and a lot of paying attention, you can travel around more securely.
      </p>
      <div>
        <h4 className="font-semibold mb-2">Before You Go Out</h4>
        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
          <li>Do not carry everything with you. Only take one or two credit / bank cards, a little cash and, most importantly, a copy of your passport with you.</li>
          <li>Write down the numbers of the credit / bank cards that you are taking with you and the phone numbers listed on the back.</li>
          <li>Carry your valuables in a secure place. Use a bag that rests snugly under your arm or directly in front of you.</li>
          <li>Beware the backpack. Use a suitcase or combination lock; they're cheap and effective.</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">While You're Out: Common Pickpocket Tactics</h4>
        <p className="text-sm text-gray-600 mb-2">
          Most pickpockets work in teams and use distraction. One person will divert your attention while another acts. Be aware of:
        </p>
        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
          <li>Staged shows or anything that leads to direct questioning and/or physical contact.</li>
          <li>People asking for directions while shoving maps in your face.</li>
          <li>Someone pointing out a "stain" on your shirt and trying to wipe it off.</li>
          <li>Asking if you dropped a bill on the street.</li>
          <li>Stepping on your foot and over-apologizing.</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">High-Risk Areas</h4>
        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
          <li>Crowded buses, metros, trains, and streets. Any crowded place makes you an easier target.</li>
          <li>Restaurants and cafés. Keep bags in your lap or physically touching you, not on the floor or an empty chair.</li>
          <li>Even in groups, you are more at risk as you may be paying more attention to friends than your belongings.</li>
        </ul>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">Too Late, You've Been Robbed</h4>
        <p className="text-sm text-yellow-700">
          If you can't find your belongings, establish what you have lost. For credit cards, call to cancel them. For a passport or items needing an insurance claim, go to the nearest police station to file a report ("denuncia"). Take this report to your embassy for temporary travel papers and to your insurance agency. Most embassies can issue temporary documents within a few hours for a fee.
        </p>
      </div>
    </CardContent>
  </Card>
);

export default SafetyInfo;
