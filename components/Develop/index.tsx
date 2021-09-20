import React from 'react';
import styles from './develop.module.scss';
import { useTranslation } from '../../hooks/useTranslation';

const Develop = () => {
  const { dictionary } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles['content-wrapper']}>
        <img
          src="/assets/develop-dec.png"
          alt=""
          className={styles['content-decoration']}
        />
        <div className={styles['content']}>
          <h2 className={styles.title}>
            {dictionary.components.develop.title}
          </h2>
          <p className={styles.description}>
            {dictionary.components.develop.description}
          </p>
          <button
            type="button"
            className={`${styles.btn} ${styles['btn--outline']}`}
          >
            {dictionary.common.buttons.knowMore}
          </button>
        </div>
      </div>
      <div className={styles['image-wrapper']}>
        <img src="/assets/develop.jpg" alt="" />
      </div>
    </div>
  );
};

export default Develop;
