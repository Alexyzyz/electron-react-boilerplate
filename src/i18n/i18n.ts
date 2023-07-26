import TranslationEn from './TranslationEn';
import TranslationId from './TranslationId';
import { TranslationKey } from './TranslationKeys';

type Language = 'Indonesian' | 'English';

let currentLanguage: Language = 'Indonesian';

export function getCurrentLanguage() {
  return currentLanguage;
}

export function setLanguage(lang: Language) {
  currentLanguage = lang;
}

export default function translate(key: TranslationKey) {
  switch (currentLanguage) {
    case 'Indonesian':
      return TranslationEn[key];
    case 'English':
      return TranslationId[key];
    default:
      return TranslationEn[key];
  }
}
