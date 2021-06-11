import React from 'react';
import styles from './topSubs.module.scss';
import plusSvg from '../../assets/img/plus.svg';

const TopSubs = ({ setVisible }: any) => {
  return (
    <div className={styles.top}>
      <h1 className={styles.title}>My subscriptions</h1>
      <button className={styles.add} onClick={() => setVisible(true)}>
        <img src={plusSvg} alt="plus svg" />
        add to subs
      </button>
    </div>
  );
};

export default TopSubs;
