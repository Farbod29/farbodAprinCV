'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '@/utils/translations';

type TranslationKey = keyof typeof translations;

interface TranslatedTextProps {
  textKey: TranslationKey;
}

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

  // For CourseTranslation type, handle differently or return null
  console.error(`Invalid translation format for key: ${textKey}`);
  return <>{textKey}</>;
}
