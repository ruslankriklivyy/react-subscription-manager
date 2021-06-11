import React from 'react';
import styles from './userInfo.module.scss';
import editSvg from '../../assets/img/edit.svg';

const UserInfo = () => {
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
          <button>
            <img src={editSvg} alt="edit svg" />
          </button>
          <h4>150</h4>
          <span>USD/month</span>
        </div>
      </div>
      <div className={styles.userInfoProfit}>
        <h4>Subscription</h4>
        <div className={styles.userInfoProfitTotal}>
          <h4>50</h4>
          <span>USD/month</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
