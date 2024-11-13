// components/CVSection.tsx
'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TranslatedText } from './TranslatedText';

interface CVSectionProps {
  title: string | React.ReactNode; // Updated to accept both string and ReactNode
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
    <div className="w-full border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <h2 className="text-xl font-semibold">
          {typeof title === 'string' ? (
            <TranslatedText textKey={title} />
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
