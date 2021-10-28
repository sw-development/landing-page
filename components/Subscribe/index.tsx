import React, { FC, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import styles from './subscribe.module.scss';
import Form from './Form/index';
import useScrollReveal from '../../hooks/useScrollReveal';

const index: FC = () => {
  const { dictionary } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  useScrollReveal({ sectionRef });

  return (
    <div className={styles.subscribe__wrapper} id="subscribe" ref={sectionRef}>
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
