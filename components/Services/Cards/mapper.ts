import { MappedCard } from '../../../infrastructure/interfaces/Cards';
import { CARDS } from '@/../../components/Services/Cards/constants';
import pl from '@/../../i18n/pl-PL';
import en from '@/../../i18n/en-US';

export const getMappedCards = (
  dictionary: typeof pl | typeof en
): MappedCard[] =>
  CARDS.map((card) => ({
    ...card,
    title: dictionary.components.services.cards_titles[card.titleKey],
    description: dictionary.components.services.cards[card.descriptionKey],
  }));
