import React from 'react';
import styles from './design.module.scss';
import { useTranslation } from '../../hooks/useTranslation';

const Design = () => {
  const { dictionary } = useTranslation();

  return(
  <div className={styles.wrapper} id="about">
    <div className={styles['image-wrapper']}>
      <img src="/assets/design.png" alt="" />
    </div>
    <div className={styles['content-wrapper']}>
      <img
        src="/assets/hero-dec.svg"
        alt=""
        className={styles['content-decoration']}
      />
      <h2 className={styles.title}>{dictionary.components.design.title}</h2>
      <p className={styles.description}>
        {dictionary.components.design.description}
      </p>
      <button type="button" className={styles.btn}>
        {dictionary.common.buttons.knowMore}
      </button>
    </div>
  </div>
)};

export default Design;
