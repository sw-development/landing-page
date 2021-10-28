import React, { useCallback, useState, useRef, useEffect } from 'react';
import styles from './navigation.module.scss';
import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';
import LanguagePicker from '@/../../components/LanguagePicker/index';

const index = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hamburgerWrapperRef = useRef<HTMLDivElement>(null);
  const navigationWrapperRef = useRef<HTMLDivElement>(null);
  const { dictionary } = useTranslation();

  const handleNavItemClick = useCallback((): void => {
    if (window.screen.availWidth < 992) {
      setIsActive(!isActive);
    }
  }, [isActive]);

  const handleTopBarSticky = () => {
    const pageOffset = window.scrollY;
    if (pageOffset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleResize = () => {
    if (window.screen.availWidth >= 992) {
      !isActive && setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleTopBarSticky);
    window.addEventListener('resize', handleResize);

    return () => (
      window.removeEventListener('scroll', handleTopBarSticky),
      window.removeEventListener('resize', handleResize)
    );
  }, []);

  useEffect(() => {
    const bodyRef = document.querySelector('body');

    if (window.screen.availWidth < 992) {
      if (isActive) {
        bodyRef.classList.add(styles.body__overflow__hidden);
      } else {
        bodyRef.classList.remove(styles.body__overflow__hidden);
      }
    }
  }, [isActive]);

  return (
    <>
      <div
        className={`${styles.hamburger__wrapper} ${
          isActive && styles.hamburger__wrapper__transparent
        } ${scrolled && !isActive && styles.hamburger__wrapper__sticky}`}
        ref={hamburgerWrapperRef}
      >
        <Link href="#home">
          <a>
            <img src="/assets/logo-mobile.png" alt="logo" />
          </a>
        </Link>
        <button className={styles.hamburger} onClick={handleNavItemClick}>
          <span className={styles.hamburger__box}>
            <span
              className={`${styles.hamburger__inner} ${
                isActive && styles.hamburger__active
              }`}
            />
          </span>
        </button>
      </div>
      <div
        ref={navigationWrapperRef}
        className={`${styles.navigation__wrapper} ${
          isActive && styles.navigation__wrapper__active
        } ${scrolled && !isActive && styles.navigation__wrapper__sticky}`}
      >
        <nav className={styles.navigation}>
          <div onClick={handleNavItemClick}>
            <Link href="#home">
              <a>
                <img src="/assets/logo.png" alt="logo" />
              </a>
            </Link>
          </div>
          <ul
            className={`${styles.navigation__list} ${
              isActive && styles.active__mobile__menu
            }`}
          >
            <li onClick={handleNavItemClick}>
              <Link href="#home">
                <a>{dictionary.components.menu.labels.home}</a>
              </Link>
            </li>
            <li onClick={handleNavItemClick}>
              <Link href="#about">
                <a>{dictionary.components.menu.labels.aboutUs}</a>
              </Link>
            </li>
            <li onClick={handleNavItemClick}>
              <Link href="#services">
                <a>{dictionary.components.menu.labels.services}</a>
              </Link>
            </li>
            <li onClick={handleNavItemClick}>
              <Link href="#ourGoal">
                <a>{dictionary.components.menu.labels.ourGoal}</a>
              </Link>
            </li>
            <li onClick={handleNavItemClick}>
              <Link href="#contact">
                <a className={`${styles.btn} ${styles['btn--outline']}`}>
                  {dictionary.components.menu.labels.contactUs}
                </a>
              </Link>
            </li>
            <li onClick={handleNavItemClick}>
              <LanguagePicker />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default index;
