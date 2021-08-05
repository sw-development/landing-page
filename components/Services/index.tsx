import React from 'react';
import { useTranslation } from '@/../../hooks/useTransation';
import styles from './services.module.scss';
import Cards from '@/../../components/Services/Cards';

const index = (): JSX.Element => {
  const { dictionary } = useTranslation();
  return (
    <div className={styles.services}>
      <div className={styles.services__wrapper}>
        <div className={styles['services__titles--wrapper']}>
          <div className={styles['services__subtitle--wrapper']}>
            <span className={styles.services__subtitle}>
              {dictionary.components.services.main.subTitle}
            </span>
            <img src="/assets/zigzag_white.svg" alt="" />
          </div>
          <h2 className={styles.services__title}>
            {dictionary.components.services.main.title}
          </h2>
          <button className={`${styles.btn} ${styles['btn--outline']}`}>
            {dictionary.components.services.main.button}
            <img className={styles['btn--arrow']} src="/assets/arrowWhite.svg" alt="" />
          </button>
        </div>
        <Cards />
      </div>
    </div>
  );
};

export default index;
