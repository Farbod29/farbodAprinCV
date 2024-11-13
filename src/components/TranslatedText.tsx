// components/TranslatedText.tsx
'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '@/utils/translations';

// Define available translation keys
type TranslationKey = keyof typeof translations;

interface TranslatedTextProps {
  textKey: TranslationKey; // Update to use TranslationKey instead of string
}

export function TranslatedText({ textKey }: TranslatedTextProps) {
  const { language } = useLanguage();

  // Add error handling
  if (!translations[textKey]) {
    console.error(`Translation missing for key: ${textKey}`);
    return <>{textKey}</>;
  }

  return <>{translations[textKey][language]}</>;
}
