import React, { FC } from 'react';
import styles from './business.module.scss';
import { useTranslation } from '../../hooks/useTranslation';

const index: FC = () => {
  const { dictionary } = useTranslation();

  return (
    <div className={styles.business__wrapper} id="ourGoal">
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
          <h3>
              {dictionary.components.business.goalCard.title}
          </h3>
          <span>
            {dictionary.components.business.goalCard.description}
          </span>
        </div>
        <div className={styles.business__subcards__item}>
          <h3>
              {dictionary.components.business.visionCard.title}
          </h3>
          <span>
            {dictionary.components.business.visionCard.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
