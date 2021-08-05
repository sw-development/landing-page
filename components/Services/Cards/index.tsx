import React from 'react';
import styles from './cards.module.scss';
import Card from '@/../../components/Services/Card';
import { CARDS } from '@/../../components/Services/Cards/constants';

const index = (): JSX.Element => {
  return (
    <div className={styles.cards__wrapper}>
      {CARDS.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default index;
