import React from 'react';
import styles from './card.module.scss';
import Image from 'next/image';
import {  MappedCard } from '../../../infrastructure/interfaces/Cards';
import Link from 'next/link';

interface ComponentProps {
  card: MappedCard;
}

const index = React.memo((props: ComponentProps) => {
  const { title, description, path, imageUrl } = props.card;
  return (
    <div className={styles.card__wrapper}>
      <div className={styles.card__image}>
        <Image
          src={imageUrl}
          layout="fixed"
          width="40px"
          height="40px"
        />
      </div>

      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__description}>{description}</p>
      <Link href={path}>
        <a className={styles.card__link}>
          Know more
          <img src="/assets/arrowWhite.svg" alt="" />
        </a>
      </Link>
    </div>
  );
});

export default index;
