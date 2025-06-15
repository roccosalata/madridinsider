
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

const MessageBoardsInfo = () => {
  return (
    <Card id="message-boards">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Message Boards
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
  );
};

export default MessageBoardsInfo;
