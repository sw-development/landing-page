import React from 'react';
import styles from './develop.module.scss';

const Develop = () => (
  <div className={styles.wrapper}>
    <div className={styles['content-wrapper']}>
      <img
        src="/assets/develop-dec.png"
        alt=""
        className={styles['content-decoration']}
      />
      <div className={styles['content']}>
        <h2 className={styles.title}>
          Develop powerful apps for your business
        </h2>
        <p className={styles.description}>
          We help our clients make realize their most Important business goals.
          Read what our team has published on the internet.Good newspaper Is a
          Nation talking to itself.
        </p>
        <button
          type="button"
          className={`${styles.btn} ${styles['btn--outline']}`}
        >
          KNOW MORE
        </button>
      </div>
    </div>
    <div className={styles['image-wrapper']}>
      <img src="/assets/design.png" alt="" />
    </div>
  </div>
);

export default Develop;
