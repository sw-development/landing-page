import React, { useRef, useEffect } from 'react';
import styles from './design.module.scss';
import { useTranslation } from '../../hooks/useTranslation';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Design = () => {
  const { dictionary } = useTranslation();
  const wrapperRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const wrapper = wrapperRef.current;

    gsap.fromTo(
      wrapper,
      { y: '+=100', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.8,
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
    <div className={styles.wrapper} id="about" ref={wrapperRef}>
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
        <button type="button" className={styles.btn}>
          {dictionary.common.buttons.knowMore}
        </button>
      </div>
    </div>
  );
};

export default Design;
