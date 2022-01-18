import styles from './blog.module.scss';

import React, { useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import useScrollReveal from '../../hooks/useScrollReveal';
import BlogItemPreview from '@/../../components/Blog/BlogItemPreview';
import { useRouter } from 'next/router';
import Link from 'next/link';

const index = () => {
  const { dictionary } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const isInSubpageRoute = router.pathname.includes('/blog');
  useScrollReveal({ sectionRef });

  return (
    <div className={`${styles.blog__wrapper} ${isInSubpageRoute ? styles.blog__wrapper__subpage : ''}`} ref={sectionRef} id="blog">
      <div className={styles.blog__content__wrapper}>
        <span className={styles.blog__description}>
          {dictionary.components.blog.description}
        </span>
        <h2 className={styles.blog__title}>
          {dictionary.components.blog.title}
        </h2>
        <img src="/assets/zigzag.svg" alt="" />
      </div>
      <div className={styles.blog__list__wrapper}>
        {[1, 2, 3, 4, 5, 6, 7].map((v) => (
          <BlogItemPreview key={v} />
        ))}
      </div>
      <div className={styles.blog__footer__wrapper}>
        <Link href="/blog">
          <button
            type="button"
            className={`${styles.btn} ${styles['btn--outline']}`}
          >
            {dictionary.common.buttons.readMore}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default index;
