import React from 'react';
import styles from './userInfo.module.scss';
import editSvg from '../../assets/img/edit.svg';
import { useStore } from 'effector-react';
import {
  $subsItems,
  $totalSpend,
  $totalSumSubs,
  $userProfit,
  setUserProfit,
} from '../../store/store';

export const UserInfo = () => {
  const profit = useStore($userProfit);
  const totalSum = useStore($totalSumSubs);
  const items = useStore($subsItems);
  const percentSpend = useStore($totalSpend);

  const editProfit = () => {
    const profit = prompt('Enter your profit: ', '');
    if (profit) {
      if (!/^\d+\.?\d*$/gm.test(profit) || parseFloat(profit) < 1 || parseFloat(profit) > 10000) {
        alert('⚠ Enter a number and it must be greater than zero.');
      } else {
        setUserProfit(+profit);
      }
    }
  };

  return (
    <div className={styles.userInfo}>
      <div className={styles.userInfoTop}>
        <img
          src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
          alt="user png"
        />
        <span>Ruslan Kriklivyy</span>
      </div>
      <div className={styles.userInfoProfit}>
        <h4>Your Profit</h4>
        <div className={styles.userInfoProfitTotal}>
          <button onClick={editProfit}>
            <img src={editSvg} alt="edit svg" />
          </button>
          <h4>{profit}</h4>
          <span>USD/month</span>
        </div>
      </div>
      <div className={styles.userInfoProfit}>
        <h4>Subscription</h4>
        <div className={styles.userInfoProfitTotal}>
          <h4>{items.length > 0 ? totalSum : 0}</h4>
          <span>USD/month</span>
        </div>
      </div>
      <div className={styles.userInfoSpend}>
        <h5>On subscriptions as a percentage you spend</h5>
        <span>{items.length > 0 ? percentSpend.toFixed(1) : 0}%</span>
        <div className={styles.userInfoSpendPercent}>
          <div style={{ width: `${items.length > 0 ? percentSpend.toFixed(0) : 0}%` }}></div>
        </div>
      </div>
    </div>
  );
};
