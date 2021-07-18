import React from 'react';
import styles from './design.module.scss';

const Design = () => (
  <div className={styles.wrapper}>
    <div className={styles['image-wrapper']}>
      <img src="/assets/design.png" alt="" />
    </div>
    <div className={styles['content-wrapper']}>
      <h2 className={styles.title}>Design solutions to improve products</h2>
      <p className={styles.description}>
        We help our clients make realize their most Important business goals.
        Read what our team has published on the internet.Good newspaper Is a
        Nation talking to itself.
      </p>
      <button type="button" className={styles.btn}>
        KNOW MORE
      </button>
    </div>
  </div>
);

export default Design;
