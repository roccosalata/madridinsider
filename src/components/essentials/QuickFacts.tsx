
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const QuickFacts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Facts</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li><strong>Population:</strong> ~3.4 million (city), ~6.7 million (metropolitan area)</li>
          <li><strong>Language:</strong> Spanish (Castilian)</li>
          <li><strong>Currency:</strong> Euro (€)</li>
          <li><strong>Time Zone:</strong> Central European Time (CET/CEST)</li>
          <li><strong>Emergency Number:</strong> 112</li>
          <li><strong>Climate:</strong> Continental Mediterranean with hot summers and cool winters</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default QuickFacts;
