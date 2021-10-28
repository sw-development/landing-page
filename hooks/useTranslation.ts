import react from 'react';
import { useRouter } from 'next/router';
import pl from '../i18n/pl-PL';
import en from '../i18n/en-US';
import { EN_LOCALE } from '@/../../utils/constants';

interface HookChildrens {
  dictionary: typeof pl | typeof en;
}

export const useTranslation = (): HookChildrens => {
  const { locale } = useRouter();

  const dictionary = locale === EN_LOCALE ? en : pl;

  return { dictionary };
};
