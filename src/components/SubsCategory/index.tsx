import React from 'react';
import styles from './subsCategory.module.scss';

export const SubsCategory = () => {
  return (
    <div className={styles.subsCategory}>
      <span>service</span>
      <span>
        price
        <br />
        (USD/month)
      </span>
      <span>
        payment every
        <br /> month on the
      </span>
    </div>
  );
};
