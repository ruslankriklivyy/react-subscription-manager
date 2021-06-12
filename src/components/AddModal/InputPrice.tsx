import React from 'react';
import styles from './addModal.module.scss';

interface IInputPrice {
  price: number;
  setPrice: (price: number) => void;
}

const InputPrice: React.FC<IInputPrice> = ({ price, setPrice }) => {
  return (
    <div className={styles.addModalInput}>
      <input
        type="number"
        placeholder="Enter price"
        value={price}
        required
        onChange={(e) => setPrice(Number(e.target.value))}
      />
    </div>
  );
};

export default InputPrice;
