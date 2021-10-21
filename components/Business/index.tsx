import React, { FC, useRef, useEffect } from 'react';
import styles from './business.module.scss';
import { useTranslation } from '../../hooks/useTranslation';

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
    <div className={styles.business__wrapper} id="ourGoal" ref={wrapperRef}>
      <div className={styles.business__heading__wrapper}>
        <div className={styles.business__main__card__subtitle}>
          <span>{dictionary.components.business.mainCard.subtitle}</span>
          <img src="/assets/zigzag.svg" alt="" />
        </div>
        <h2 className={styles.business__main__card__title}>
          {dictionary.components.business.mainCard.title}
        </h2>
      </div>
      <div className={styles.business__subcards__wrapper}>
        <div className={styles.business__subcards__item}>
          <h3>{dictionary.components.business.goalCard.title}</h3>
          <span>{dictionary.components.business.goalCard.description}</span>
        </div>
        <div className={styles.business__subcards__item}>
          <h3>{dictionary.components.business.visionCard.title}</h3>
          <span>{dictionary.components.business.visionCard.description}</span>
        </div>
      </div>
    </div>
  );
};

export default index;
