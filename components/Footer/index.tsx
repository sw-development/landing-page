import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <span>&copy; 2021 SW Development</span>
      <a className={styles.footer__email} href="mailto:swdevelopmentinfo@gmail.com">swdevelopmentinfo@gmail.com</a>
    </footer>
  );
};

export default Footer;
