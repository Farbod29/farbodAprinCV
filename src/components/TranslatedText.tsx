'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '@/utils/translations';

// Export the translation key type
export type TranslationKey = keyof typeof translations;
type Language = 'de' | 'en';

interface GeneralTranslation {
  de: string;
  en: string;
}

interface CourseTranslation {
  courses: {
    [key: string]: {
      name: GeneralTranslation;
      grade: GeneralTranslation;
    };
  };
}

interface TranslatedTextProps {
  textKey: TranslationKey;
}

function isGeneralTranslation(
  translation: GeneralTranslation | CourseTranslation
): translation is GeneralTranslation {
  return 'de' in translation && 'en' in translation;
}

export function TranslatedText({ textKey }: TranslatedTextProps) {
  const { language } = useLanguage();
  const translation = translations[textKey];

  if (!translation) {
    console.error(`Translation missing for key: ${textKey}`);
    return <>{textKey}</>;
  }

  if (isGeneralTranslation(translation)) {
    return <>{translation[language]}</>;
  }

  console.error(`Invalid translation format for key: ${textKey}`);
  return <>{textKey}</>;
}