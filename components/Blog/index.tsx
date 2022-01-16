import styles from './blog.module.scss';

import React, { useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import useScrollReveal from '../../hooks/useScrollReveal';

const index = () => {
  const { dictionary } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useScrollReveal({ sectionRef });

  return (
    <div className={styles.blog__wrapper} ref={sectionRef} id="blog">
      <div className={styles.blog__content__wrapper}>
        <span className={styles.blog__description}>
          {dictionary.components.blog.description}
        </span>
        <h2 className={styles.blog__title}>
          {dictionary.components.blog.title}
        </h2>
        <img src="/assets/zigzag.svg" alt="" />
      </div>
    </div>
  );
};

export default index;
