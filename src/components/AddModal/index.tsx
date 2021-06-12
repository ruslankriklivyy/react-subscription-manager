import React from 'react';
import { RgbColorPicker } from 'react-colorful';
import {
  $isVisibleModal,
  $isVisiblePicker,
  addToSubsItems,
  setIsVisibleModal,
  setIsVisiblePicker,
} from '../../store/store';

import styles from './addModal.module.scss';
import paletteSvg from '../../assets/img/palette.svg';
import okSvg from '../../assets/img/ok.svg';
import cancelSvg from '../../assets/img/cancel.svg';
import { useStore } from 'effector-react';
import { ISubsItem } from '../../interfaces/interfaces';

const AddModal = () => {
  const [color, setColor] = React.useState({ r: 0, g: 0, b: 0 });
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [payment, setPayment] = React.useState(0);
  const visibleModal = useStore($isVisibleModal);
  const visiblePicker = useStore($isVisiblePicker);

  const addToSubs = () => {
    if (!name || !price || !payment) {
      return alert('⚠ Enter info!');
    }

    const newObj: ISubsItem = {
      id: Math.random(),
      name,
      color: Object.values(color),
      price,
      payment,
    };
    addToSubsItems(newObj);
    setIsVisibleModal(false);
    setIsVisiblePicker(false);
  };

  return (
    <>
      <div
        className={`${
          !visibleModal ? styles.blockOut : styles.blockOut + ' ' + styles.show
        }`}></div>
      <div className={`${!visibleModal ? styles.addModal : styles.addModal + ' ' + styles.show}`}>
        <div className={styles.addModalWrapper}>
          <div className={styles.addModalPalette}>
            <button
              onClick={() => setIsVisiblePicker(!visiblePicker)}
              style={{ background: `rgba(${Object.values(color)}, 0.4)` }}>
              <img src={paletteSvg} alt="palette svg" />
            </button>
            {visiblePicker && (
              <div className={styles.addModalColorPicker}>
                <RgbColorPicker color={color} onChange={setColor} />
              </div>
            )}
          </div>
          <div className={styles.addModalInput}>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.addModalInput}>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              required
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <div className={styles.addModalInput}>
            <input
              type="number"
              placeholder="Enter payment"
              value={payment}
              required
              onChange={(e) => setPayment(Number(e.target.value))}
            />
          </div>
          <div className={styles.addModalBottom}>
            <button onClick={addToSubs}>
              <img src={okSvg} alt="ok svg" />
            </button>
            <button onClick={() => setIsVisibleModal(false)}>
              <img src={cancelSvg} alt="cancel svg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddModal;
