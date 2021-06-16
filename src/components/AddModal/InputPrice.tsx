import React from 'react';
import styles from './addModal.module.scss';

interface IInputPrice {
  price: string;
  setPrice: (price: string) => void;
}

const InputPrice: React.FC<IInputPrice> = ({ price, setPrice }) => {
  return (
    <div className={styles.addModalInput}>
      <input
        type="text"
        placeholder="Enter price"
        value={price}
        required
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
  );
};

export default InputPrice;
