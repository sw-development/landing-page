import React, { FC, useEffect, useRef } from 'react';
import styles from './contact.module.scss';
import { useTranslation } from '../../hooks/useTranslation';
import Form from '@/../../components/Contact/Form';


import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const index: FC = () => {
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
        duration: 1.8,
        ease: 'easeInOut',
        scrollTrigger: {
          trigger: wrapper,
          start: '25% bottom',
          end: '+=250',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className={styles.contact__wrapper} id="contact" ref={wrapperRef}>
      <img
        className={styles.contact__content__decoration__x}
        src="/assets/contactX.svg"
        alt=""
      />
      <img
        className={styles.contact__content__decoration__orange__circle}
        src="/assets/contactOrangeCircle.svg"
        alt=""
      />
      <img
        className={styles.contact__content__decoration__pink__circle}
        src="/assets/contactPinkCircle.svg"
        alt=""
      />
      <div className={styles.contact__content__wrapper}>
        <div className={styles['contact__content__subtitle--wrapper']}>
          <span className={styles.contact__content__subtitle}>
            {dictionary.components.contact.subtitle}
          </span>
          <img src="/assets/zigzag.svg" alt="" />
        </div>
        <h2 className={styles.contact__content__title}>
          {dictionary.components.contact.title}
        </h2>
        <p className={styles.contact__content__description}>
          {dictionary.components.contact.description}
        </p>
      </div>
      <Form />
    </div>
  );
};

export default index;
