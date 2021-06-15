import React from 'react';
import styles from './addModal.module.scss';

interface IInputPayment {
  payment: number;
  setPayment: (payment: number) => void;
}

const InputPayment: React.FC<IInputPayment> = ({ payment, setPayment }) => {
  return (
    <div className={styles.addModalInput}>
      <input
        type="text"
        placeholder="Enter payment"
        value={payment}
        onChange={(e) => setPayment(+e.target.value.replace(/\D/, ''))}
      />
    </div>
  );
};

export default InputPayment;
