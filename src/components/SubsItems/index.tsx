import React from 'react';
import { useStore } from 'effector-react';

import styles from './subsItems.module.scss';
import editSvg from '../../assets/img/edit.svg';
import deleteSvg from '../../assets/img/delete.svg';
import { $subsItems, removeItemFromSubs, setIsVisibleModal } from '../../store/store';

const SubsItems = () => {
  const items = useStore($subsItems);

  const removeSub = (subId: string) => {
    removeItemFromSubs(subId);
  };

  const editSub = () => {
    setIsVisibleModal(true);
  };

  return (
    <div className={styles.subsWrapper}>
      {items.map(({ id, name, price, payment, color }) => (
        <div key={id} className={styles.subsItem}>
          <div className={styles.subsItemInfo}>
            <span
              className={styles.subsLogo}
              style={{ background: `rgba(${color}, 0.3)`, color: `rgba(${color}, 1)` }}>
              {name[0].toUpperCase()}
            </span>
            <span>{name}</span>
          </div>
          <span className={styles.subsItemInfo}>$ {price}</span>
          <span className={styles.subsItemInfo}>{payment}th</span>
          <div className={styles.subsItemActions}>
            <button onClick={editSub}>
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
