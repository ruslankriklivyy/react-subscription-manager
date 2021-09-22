import React from 'react';
import ReactDOM from 'react-dom';
import { useStore } from 'effector-react';
import { v4 as uuidv4 } from 'uuid';

import {
  $editSubId,
  $isEditSub,
  $isVisibleModal,
  $subColor,
  $subName,
  $subPayment,
  $subPrice,
  addToSubsItems,
  editSubItem,
  setIsEditSub,
  setIsVisibleModal,
  setIsVisiblePicker,
  setSubColor,
  setSubName,
  setSubPayment,
  setSubPrice,
} from '../../store/store';
import { ISubsItem } from '../../interfaces/interfaces';
import styles from './addModal.module.scss';
import { checkCorrectInput } from '../../utils/checkCorrectInput';
import { Palette } from './Palette';
import { InputName } from './InputName';
import { InputPrice } from './InputPrice';
import { InputPayment } from './InputPayment';
import { ModalActions } from './ModalActions';

export const AddModal = React.memo(function AddModal() {
  const color = useStore($subColor);
  const name = useStore($subName);
  const price = useStore($subPrice);
  const payment = useStore($subPayment);
  const visibleModal = useStore($isVisibleModal);
  const isEdit = useStore($isEditSub);
  const editSubId = useStore($editSubId);
  const blockOutRef = React.useRef<HTMLDivElement>(null);

  const addToSubs = () => {
    const checkedCorrect = checkCorrectInput(name, price, payment);

    if (checkedCorrect) {
      const newObj: ISubsItem = {
        id: uuidv4(),
        name,
        color: Object.values(color),
        price: parseFloat(price),
        payment,
      };
      addToSubsItems(newObj);
      closeModal();
    }
  };

  const editSub = () => {
    const checkedCorrect = checkCorrectInput(name, price, payment);

    if (checkedCorrect) {
      const newSubObj = {
        id: editSubId,
        name,
        color: Object.values(color),
        price: parseFloat(price),
        payment,
      };
      editSubItem(newSubObj);
      setIsEditSub(false);
      closeModal();
    }
  };

  const closeModal = React.useCallback(() => {
    setIsVisibleModal(false);
    setIsVisiblePicker(false);
    setSubName('');
    setSubPrice('0');
    setSubPayment(0);
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
          <Palette color={color} setColor={setSubColor} />
          <InputName name={name} setName={setSubName} />
          <InputPrice price={price} setPrice={setSubPrice} />
          <InputPayment payment={payment} setPayment={setSubPayment} />
          <div className={styles.addModalBottom}>
            <ModalActions
              isEdit={isEdit}
              editSub={editSub}
              addToSubs={addToSubs}
              closeModal={closeModal}
            />
          </div>
        </div>
      </div>
    </>,
    document.getElementById('addModal')!,
  );
});
