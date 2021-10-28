import React, { useRef } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './footer.module.scss';

const Footer = () => {
  const footerRef = useRef<HTMLBaseElement>(null);

  useScrollReveal({
    sectionRef: footerRef,
    customOptions: {
      duration: 800,
      delay: 0
    },
  });

  return (
    <footer className={styles.wrapper} ref={footerRef}>
      <span>&copy; 2021 SW Development</span>
      <a
        className={styles.footer__email}
        href="mailto:swdevelopmentinfo@gmail.com"
      >
        swdevelopmentinfo@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
