import React, { FC, useEffect, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import styles from './subscribe.module.scss';
import Form from './Form/index';

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
    <div className={styles.subscribe__wrapper} id="subscribe" ref={wrapperRef}>
      <img
        className={styles.subscribe__yellow__decor}
        src="/assets/subscribeYellowDecor.svg"
        alt=""
      />
      <img
        className={styles.subscribe__dotted__decor}
        src="/assets/subscribeDottedDecor.svg"
        alt=""
      />
      <img
        className={styles.subscribe__x__decor}
        src="/assets/subscribeXDecor.svg"
        alt=""
      />
      <img
        className={styles.subscribe__shape__decor}
        src="/assets/subscribeShapeDecor.svg"
        alt=""
      />
      <img
        className={styles.subscribe__box__decor}
        src="/assets/subscribeBoxDecor.svg"
        alt=""
      />
      <div className={styles.subscribe__content__wrapper}>
        <span className={styles.subscribe__description}>
          {dictionary.components.subscribe.description}
        </span>
        <h2 className={styles.subscribe__title}>
          {dictionary.components.subscribe.title}
        </h2>
        <img src="/assets/zigzag.svg" alt="" />
      </div>
      <Form />
    </div>
  );
};

export default index;
