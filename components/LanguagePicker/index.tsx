import React, { FC } from 'react';
import { EN_LOCALE, PL_LOCALE } from '@/../../utils/constants';
import Link from 'next/link';

import styles from './languagepicker.module.scss';

const index: FC = () => {

  return (
    <div className={styles.picker__wrapper}>
      <Link href="/" locale={PL_LOCALE}>
        <img
          className={styles.picker__selected__language}
          src="/assets/poland.png"
          alt=""
        />
      </Link>

      <Link href="/" locale={EN_LOCALE}>
        <img src="/assets/uk.png" alt="" />
      </Link>
    </div>
  );
};

export default index;
