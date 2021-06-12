import React from 'react';
import styles from './subsItems.module.scss';

import editSvg from '../../assets/img/edit.svg';
import deleteSvg from '../../assets/img/delete.svg';
import { useStore } from 'effector-react';
import { $subsItems, removeItemFromSubs } from '../../store/store';

const SubsItems = () => {
  const items = useStore($subsItems);

  const removeSub = (subId: number) => {
    removeItemFromSubs(subId);
  };

  return (
    <div className={styles.subsWrapper}>
      {items.map(({ id, name, price, payment, color }) => (
        <div key={id} className={styles.subsItem}>
          <div className={styles.subsItemInfo}>
            <span
              className={styles.subsLogo}
              style={{ background: `rgba(${color}, 0.4)`, color: `rgba(${color}, 1)` }}>
              {name[0]}
            </span>
            <span>{name}</span>
          </div>
          <span className={styles.subsItemInfo}>$ {price}</span>
          <span className={styles.subsItemInfo}>{payment}th</span>
          <div className={styles.subsItemActions}>
            <button>
              <img src={editSvg} alt="edit svg" />
            </button>
            <button onClick={() => removeSub(id)}>
              <img src={deleteSvg} alt="delete svg" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubsItems;
