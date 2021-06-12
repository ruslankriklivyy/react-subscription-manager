import React from 'react';
import ReactDOM from 'react-dom';
import { useStore } from 'effector-react';

import {
  $isVisibleModal,
  addToSubsItems,
  setIsVisibleModal,
  setIsVisiblePicker,
} from '../../store/store';
import Palette from './Palette';
import { ISubsItem } from '../../interfaces/interfaces';
import InputName from './InputName';
import InputPrice from './InputPrice';
import InputPayment from './InputPayment';
import ModalActions from './ModalActions';
import styles from './addModal.module.scss';

const AddModal = () => {
  const [color, setColor] = React.useState({ r: 0, g: 0, b: 0 });
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [payment, setPayment] = React.useState(0);
  const visibleModal = useStore($isVisibleModal);
  const blockOutRef = React.useRef<HTMLDivElement>(null);

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
    closeModal();
  };

  const closeModal = React.useCallback(() => {
    setIsVisibleModal(false);
    setIsVisiblePicker(false);
    setName('');
    setPrice(0);
    setPayment(0);
  }, []);

  const escapeListener = React.useCallback(
    (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal],
  );
  const clickListener = React.useCallback(
    (e) => {
      if (
        e.target.className &&
        blockOutRef.current &&
        e.target.className === blockOutRef.current.className
      ) {
        closeModal();
      }
    },
    [blockOutRef, closeModal],
  );
  React.useEffect(() => {
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [clickListener, escapeListener]);

  return ReactDOM.createPortal(
    <>
      <div
        ref={blockOutRef}
        className={`${
          !visibleModal ? styles.blockOut : styles.blockOut + ' ' + styles.show
        }`}></div>
      <div className={`${!visibleModal ? styles.addModal : styles.addModal + ' ' + styles.show}`}>
        <div className={styles.addModalWrapper}>
          <Palette color={color} setColor={setColor} />
          <InputName name={name} setName={setName} />
          <InputPrice price={price} setPrice={setPrice} />
          <InputPayment payment={payment} setPayment={setPayment} />
          <div className={styles.addModalBottom}>
            <ModalActions addToSubs={addToSubs} closeModal={closeModal} />
          </div>
        </div>
      </div>
    </>,
    document.getElementById('addModal')!,
  );
};

export default React.memo(AddModal);
