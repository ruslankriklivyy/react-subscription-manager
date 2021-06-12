import React from 'react';
import styles from './addModal.module.scss';

interface IInputName {
  name: string;
  setName: (name: string) => void;
}

const InputName: React.FC<IInputName> = ({ name, setName }) => {
  return (
    <div className={styles.addModalInput}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default React.memo(InputName);
