import React, { useCallback, useState, useRef, useEffect } from 'react';
import styles from './navigation.module.scss';
import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';

const index = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const hamburgerWrapperRef = useRef<HTMLDivElement>(null);
  const navigationWrapperRef = useRef<HTMLDivElement>(null);
  const handleNavItemClick = useCallback((): void => {
    setIsActive(!isActive);
  }, [isActive]);

  const { dictionary } = useTranslation();

  const handleTopBarSticky = () => {
    const hamburgerRef = hamburgerWrapperRef.current;
    const navigationDesktopRef = navigationWrapperRef.current;
    const pageYOffset= window.pageYOffset;

    if (pageYOffset * 2 > hamburgerRef.offsetHeight || pageYOffset * 2 > navigationDesktopRef.offsetHeight) {
      hamburgerRef.classList.add(styles.hamburger__wrapper__sticky);
      navigationDesktopRef.classList.add(styles.navigation__wrapper__sticky);
    } else {
      hamburgerRef.classList.remove(styles.hamburger__wrapper__sticky);
      navigationDesktopRef.classList.remove(styles.navigation__wrapper__sticky);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleTopBarSticky);

    return () => window.removeEventListener('scroll', handleTopBarSticky);
  }, []);

  return (
    <>
      <div className={`${styles.hamburger__wrapper} ${isActive && styles.hamburger__wrapper__transparent}`} ref={hamburgerWrapperRef}>
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
        }`}
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
                <a>{dictionary.components.menu.labels.contactUs}</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default index;
