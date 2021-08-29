import React from 'react';
import styles from './hero.module.scss';
import { useTranslation } from '../../hooks/useTranslation';

const Hero = () => {
  const { dictionary } = useTranslation();
  return (
    <header className={styles.hero} id="home">
      <div className={styles['hero__content-wrapper']}>
        <img
          src="/assets/hero-dec.svg"
          alt=""
          className={styles['hero__content-decoration']}
        />
        <div className={styles['hero__subtitle-wrapper']}>
          <span className={styles.hero__subtitle}>
            {dictionary.components.hero.subTitle}
          </span>
          <img src="/assets/zigzag.svg" alt="" />
        </div>
        <h1 className={styles.hero__title}>
          {dictionary.components.hero.title}
        </h1>
        <p className={styles.hero__description}>
          {dictionary.components.hero.description}
        </p>
        <button type="button" className={styles.btn}>
          {dictionary.components.hero.button}
        </button>
      </div>
      <div className={styles['hero__image-wrapper']}>
        <img src="/assets/hero.png" alt="" />
      </div>
    </header>
  );
};
export default Hero;
