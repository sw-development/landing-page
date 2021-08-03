import react from 'react';
import { useRouter } from 'next/router';
import pl from '../i18n/pl-PL';
import en from '../i18n/en-US';
import { DEFAULT_LOCALE } from '@/../../utils/constants';

interface HookChildrens {
  dictionary: typeof pl | typeof en;
  setLanguage: (language: string) => void;
}

export const useTranslation = (): HookChildrens => {
  const router = useRouter();
  const { locale } = useRouter();

  const dictionary = locale === DEFAULT_LOCALE ? en : pl;

  // TODO: Check after we will implement language switch
  const setLanguage = (language: string): void => {
    router.push(router.route, '/', { locale: language });
  };

  return { dictionary, setLanguage };
};
