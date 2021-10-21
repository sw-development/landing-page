import React, { useEffect, useRef } from 'react';
import styles from './develop.module.scss';
import { useTranslation } from '../../hooks/useTranslation';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Develop = () => {
  const { dictionary } = useTranslation();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    gsap.fromTo(
      wrapper,
      { y: '+=100', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'easeInOut',
        scrollTrigger: {
          trigger: wrapper,
          start: '25% bottom',
          end: '+=500',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles['content-wrapper']}>
        <img
          src="/assets/develop-dec.png"
          alt=""
          className={styles['content-decoration']}
        />
        <div className={styles['content']}>
          <h2 className={styles.title}>
            {dictionary.components.develop.title}
          </h2>
          <p className={styles.description}>
            {dictionary.components.develop.description}
          </p>
          <button
            type="button"
            className={`${styles.btn} ${styles['btn--outline']}`}
          >
            {dictionary.common.buttons.knowMore}
          </button>
        </div>
      </div>
      <div className={styles['image-wrapper']}>
        <img src="/assets/develop.jpg" alt="" />
      </div>
    </div>
  );
};

export default Develop;
