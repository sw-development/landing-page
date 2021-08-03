import React, { useCallback, useState } from 'react';
import styles from './navigation.module.scss';
import Link from 'next/link';
import { useTranslation } from '@/../../hooks/useTransation';

const index = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const handleNavItemClick = useCallback((): void => {
    setIsActive(!isActive);
  }, [isActive]);

  const { dictionary } = useTranslation();

  return (
    <>
      <button className={styles.hamburger} onClick={handleNavItemClick}>
        <span className={styles.hamburger__box}>
          <span
            className={`${styles.hamburger__inner} ${
              isActive && styles.hamburger__active
            }`}
          />
        </span>
      </button>
      <div
        className={`${styles.navigation__wrapper} ${
          isActive && styles.navigation__wrapper__active
        }`}
      >
        <nav className={styles.navigation}>
          <div onClick={handleNavItemClick}>
            <Link href="/">
              <a>
                <img src="/assets/logo.png" alt="logo" />
              </a>
            </Link>
          </div>
          <ul className={styles.navigation__list}>
            <li onClick={handleNavItemClick}>
              <Link href="/">
                <a>{dictionary.components.menu.labels.home}</a>
              </Link>
            </li>
            <li onClick={handleNavItemClick}>
              <Link href="/about">
                <a>{dictionary.components.menu.labels.aboutUs}</a>
              </Link>
            </li>
            <li onClick={handleNavItemClick}>
              <Link href="#services">
                <a>{dictionary.components.menu.labels.services}</a>
              </Link>
            </li>
            <li onClick={handleNavItemClick}>
              <Link href="#portfolio">
                <a>{dictionary.components.menu.labels.ourWork}</a>
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
