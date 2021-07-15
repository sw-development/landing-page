import React from 'react';
import styles from './hero.module.scss';

const Hero = () => (
  <header className={styles.hero}>
    <div className={styles['hero__content-wrapper']}>
      <img
        src="/assets/hero-dec.svg"
        alt=""
        className={styles['hero__content-decoration']}
      />
      <div className={styles['hero__subtitle-wrapper']}>
        <span className={styles.hero__subtitle}>our goal</span>
        <img src="/assets/zigzag.svg" alt="" />
      </div>
      <h1 className={styles.hero__title}>Better products for your users</h1>
      <p className={styles.hero__description}>
        We help our clients realize their most important business goals. It’s a
        team, working together with you.
      </p>
      <button type="button" className={styles.btn}>
        Get in touch
      </button>
    </div>
    <div className={styles['hero__image-wrapper']}>
      <img src="/assets/hero.png" alt="" />
    </div>
  </header>
);

export default Hero;
