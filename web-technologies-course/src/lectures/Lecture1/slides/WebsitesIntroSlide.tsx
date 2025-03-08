import React from 'react';
import WebsiteWorkflow from '../animations/WebsiteWorkflow';

const WebsitesIntroSlide: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Основи роботи веб-сайтів</h2>
      <WebsiteWorkflow className="mb-6" />
    </div>
  );
};

export default WebsitesIntroSlide;