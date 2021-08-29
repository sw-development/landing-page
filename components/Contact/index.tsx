import React, { FC } from 'react';
import styles from './contact.module.scss';
import { useTranslation } from '../../hooks/useTranslation';
import Form from '@/../../components/Contact/Form';

const index: FC = () => {
  const { dictionary } = useTranslation();

  return (
    <div className={styles.contact__wrapper}>
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
