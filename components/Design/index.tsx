import React, { useRef } from 'react';
import styles from './design.module.scss';
import { useTranslation } from '../../hooks/useTranslation';
import useScrollReveal from '../../hooks/useScrollReveal';
import Link from 'next/link';

const Design = () => {
  const { dictionary } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>();

  useScrollReveal({ sectionRef });

  return (
    <div className={styles.wrapper} id="about" ref={sectionRef}>
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
        <Link href="/#contact">
          <button type="button" className={styles.btn}>
            {dictionary.common.buttons.knowMore}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Design;
