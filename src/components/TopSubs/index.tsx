import React from 'react';
import { setIsVisibleModal } from '../../store/store';

import styles from './topSubs.module.scss';
import plusSvg from '../../assets/img/plus.svg';

export const TopSubs = () => {
  return (
    <div className={styles.top}>
      <h1 className={styles.title}>My subscriptions</h1>
      <button className={styles.add} onClick={() => setIsVisibleModal(true)}>
        <img src={plusSvg} alt="plus svg" />
        add to subs
      </button>
    </div>
  );
};
