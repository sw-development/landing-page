import styles from './blog.module.scss';

import React, { useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import useScrollReveal from '../../hooks/useScrollReveal';
import BlogItemPreview from '@/../../components/Blog/BlogItemPreview';
import { useRouter } from 'next/router'

const index = () => {
  const { dictionary } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  

  useScrollReveal({ sectionRef });
  const wrapperClasses = [styles.blog__wrapper, router.pathname.includes('/blog') && styles.blog__wrapper__subpage]

  return (
    <div className={wrapperClasses.join(', ')} ref={sectionRef} id="blog">
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
    </div>
  );
};

export default index;
