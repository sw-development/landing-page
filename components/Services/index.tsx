import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import styles from './services.module.scss';
import Cards from '@/../../components/Services/Cards';
import Link from 'next/link';

const index = (): JSX.Element => {
  const { dictionary } = useTranslation();
  return (
    <div className={styles.services} id="services">
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
          <Link href="#contact">
            <a className={`${styles.link} ${styles['link--outline']}`}>
              {dictionary.components.services.main.button}
              <img
                className={styles['link--arrow']}
                src="/assets/arrowWhite.svg"
                alt=""
              />
            </a>
          </Link>
        </div>
        <Cards />
      </div>
    </div>
  );
};

export default index;
