import React from 'react';
import { useStore } from 'effector-react';

import styles from './subsItems.module.scss';
import editSvg from '../../assets/img/edit.svg';
import deleteSvg from '../../assets/img/delete.svg';
import {
  $subsItems,
  removeItemFromSubs,
  setEditSubId,
  setIsEditSub,
  setIsVisibleModal,
  setSubColor,
  setSubName,
  setSubPayment,
  setSubPrice,
} from '../../store/store';

const SubsItems = () => {
  const items = useStore($subsItems);

  const removeSub = (subId: string) => {
    removeItemFromSubs(subId);
  };

  const editSub = (subId: string) => {
    const currentSub = items.filter((sub) => sub.id === subId);
    setSubColor({
      r: currentSub[0].color[0],
      g: currentSub[0].color[1],
      b: currentSub[0].color[2],
    });
    setSubName(currentSub[0].name);
    setSubPrice(currentSub[0].price);
    setSubPayment(currentSub[0].payment);

    setIsVisibleModal(true);
    setIsEditSub(true);
    setEditSubId(subId);
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
            <button onClick={() => editSub(id)}>
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
