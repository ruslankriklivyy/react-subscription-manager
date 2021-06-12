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
        type="number"
        placeholder="Enter payment"
        value={payment}
        required
        onChange={(e) => setPayment(Number(e.target.value))}
      />
    </div>
  );
};

export default InputPayment;
