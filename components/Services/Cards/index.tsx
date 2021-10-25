import React from 'react';
import styles from './cards.module.scss';
import Card from '@/../../components/Services/Card';
import { getMappedCards } from './mapper';
import { useTranslation } from '../../../hooks/useTranslation';

const index = (): JSX.Element => {
  const { dictionary } = useTranslation();
  const mappedCards = getMappedCards(dictionary);

  return (
    <div className={styles.cards__wrapper}>
      {mappedCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default index;
