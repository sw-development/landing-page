import styles from './blogitempreview.module.scss';
import Link from 'next/link';

import React from 'react';

const index = () => {
  return (
    <div className={styles.preview__wrapper}>
      <div className={styles.preview__image__box}>
        <img
          src="/assets/develop.jpg"
          alt="blog post image"
          className={styles.preview__image}
        />
      </div>
      <div className={styles.preview__meta}>
        <span className={styles.preview__meta__author}>test</span>
        <span>|</span>
        <span className={styles.preview__meta__timestamp}>test</span>
      </div>
      <div className={styles.preview__content}>
        <p className={styles.preview__title}>
          7 reasons why smart, hardworking people don’t become successful
        </p>
        <p className={styles.preview__description}>
          Lorem ipsum dolor amet, a dusino sinto dolor amet, a dusino sinto
          Lorem ipsum dolor amet, a dusino sinto.
        </p>
      </div>
      <Link href="/#">
        <a className={styles.preview__link}>
          <span>Continue reading</span>
        </a>
      </Link>
    </div>
  );
};

export default index;
