import React, { useRef } from 'react';
import styles from './hero.module.scss';
import { useTranslation } from '../../hooks/useTranslation';
import useScrollReveal from '../../hooks/useScrollReveal';
import Link from 'next/link';

const Hero = () => {
  const { dictionary } = useTranslation();
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const contentSectionRef = useRef<HTMLDivElement>(null);
  const mainDecorRef = useRef<HTMLImageElement>(null);

  useScrollReveal({
    sectionRef: contentSectionRef,
    customOptions: {
      origin: 'right',
      distance: '60px',
    },
  });

  useScrollReveal({
    sectionRef: imageWrapperRef,
    customOptions: {
      origin: 'left',
      distance: '60px',
    },
  });

  useScrollReveal({
    sectionRef: mainDecorRef,
    customOptions: {
      origin: 'top',
      distance: '60px',
      delay: 1000,
    },
  });

  return (
    <header className={styles.hero} id="home">
      <img
        src="/assets/heroDesktopDecor.svg"
        alt=""
        className={styles.hero__content__decor__globe__dots}
        ref={mainDecorRef}
      />
      <div className={styles['hero__content-wrapper']} ref={contentSectionRef}>
        <img
          src="/assets/hero-dec.svg"
          alt=""
          className={styles['hero__content-decoration']}
        />
        <img
          src="/assets/heroMobileDecorDots.svg"
          alt=""
          className={styles.hero__content__decor__dots}
        />
        <img
          src="/assets/heroDecorRectangle.svg"
          alt=""
          className={styles.hero__content__decor__rectangle}
        />
        <img
          src="/assets/heroDecorSquare.svg"
          alt=""
          className={styles.hero__content__decor__square}
        />
        <img
          src="/assets/heroDecorPinkDot.svg"
          alt=""
          className={styles.hero__content__decor__pinkDot}
        />
        <img
          src="/assets/heroDecorCircle.svg"
          alt=""
          className={styles.hero__content__decor__circle}
        />
        <div className={styles['hero__subtitle-wrapper']}>
          <span className={styles.hero__subtitle}>
            {dictionary.components.hero.subTitle}
          </span>
          <img src="/assets/zigzag.svg" alt="" />
        </div>
        <h1 className={styles.hero__title}>
          {dictionary.components.hero.title}
        </h1>
        <p className={styles.hero__description}>
          {dictionary.components.hero.description}
        </p>
        <Link href="#services">
          <button type="button" className={styles.btn}>
            {dictionary.components.hero.button}
          </button>
        </Link>
      </div>
      <div className={styles['hero__image-wrapper']} ref={imageWrapperRef}>
        <img
          src="/assets/hero.png"
          alt=""
          className={styles.hero__image__content}
        />
        <img
          src="/assets/heroImageDecor.svg"
          alt=""
          className={styles.hero__image__decor}
        />
      </div>
    </header>
  );
};
export default Hero;
