// components/CVSection.tsx
'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TranslatedText, type TranslationKey } from './TranslatedText'; // Import as a type

interface CVSectionProps {
  title: TranslationKey | React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export const CVSection = ({
  title,
  children,
  defaultExpanded = false,
}: CVSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="w-full border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-200">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <h2 className="text-xl font-semibold">
          {typeof title === 'string' ? (
            <TranslatedText textKey={title as TranslationKey} />
          ) : (
            title
          )}
        </h2>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      {isExpanded && (
        <div className="p-4 bg-white dark:bg-gray-900">{children}</div>
      )}
    </div>
  );
};