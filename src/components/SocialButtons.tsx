import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { TranslatedText } from './TranslatedText'; // Add this import


const SocialButtons = () => {
  const socialLinks = [
    {
      name: 'Github',
      url: 'https://github.com/Farbod29',
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/farbod-aprin-ingootag/',
      icon: <Linkedin className="w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-white text-2xl font-bold text-center mb-8">
          <TranslatedText textKey="StayConnent" />
        </h2>
        <div className="flex justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200"
              aria-label={`Connect on ${link.name}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;
