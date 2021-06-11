import React from 'react';
import styles from './subsItems.module.scss';

import editSvg from '../../assets/img/edit.svg';
import deleteSvg from '../../assets/img/delete.svg';

const SubsItems = () => {
  return (
    <div className={styles.subsWrapper}>
      <div className={styles.subsItem}>
        <div className={styles.subsItemInfo}>
          <span className={styles.subsLogo}>N</span>
          <span>Netflix</span>
        </div>
        <span className={styles.subsItemInfo}>$ 14.5</span>
        <span className={styles.subsItemInfo}>29th</span>
        <div className={styles.subsItemActions}>
          <button>
            <img src={editSvg} alt="edit svg" />
          </button>
          <button>
            <img src={deleteSvg} alt="delete svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubsItems;
