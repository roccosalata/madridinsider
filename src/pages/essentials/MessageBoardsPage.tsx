
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

const MessageBoardsPage = () => {
  return (
    <Layout>
      <HeroSection
        title="Message Boards"
        subtitle="Connect with the community and find answers to your questions."
      />
      <div className="container mx-auto py-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-madrid-red" />
              Madrid Message Boards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Connect with other travelers and expats, ask questions, and share your experiences on one of Madrid's longest-running message boards.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-lg">Madrid Man</h3>
              <a 
                href="http://www.madridman.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-madrid-red hover:underline break-all"
              >
                www.madridman.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MessageBoardsPage;
