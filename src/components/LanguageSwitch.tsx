// components/LanguageSwitch.tsx
'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function LanguageSwitch(): JSX.Element {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { language, toggleLanguage } = useLanguage();

    return (
      <button
        onClick={toggleLanguage}
        aria-label={`Switch to ${language === 'de' ? 'English' : 'German'}`}
        className="fixed top-4 right-4 px-4 py-2 bg-gray-800 dark:bg-gray-700 
                  text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 
                  transition-colors duration-200 flex items-center gap-2"
      >
        <span>{language === 'de' ? '🇩🇪' : '🇬🇧'}</span>
        {language === 'de' ? 'EN' : 'DE'}
      </button>
    );
  } catch (error) {
    console.error('Language context not available:', error);
    return <div>Language context not available</div>; // Or a fallback UI
  }
}
