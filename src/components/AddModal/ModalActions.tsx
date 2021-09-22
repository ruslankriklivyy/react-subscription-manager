import React from 'react';
import okSvg from '../../assets/img/ok.svg';
import cancelSvg from '../../assets/img/cancel.svg';

interface IModalActions {
  addToSubs: () => any;
  closeModal: () => void;
  editSub: () => void;
  isEdit: boolean;
}

export const ModalActions: React.FC<IModalActions> = React.memo(function ModalActions({
  addToSubs,
  editSub,
  closeModal,
  isEdit,
}) {
  return (
    <>
      <button onClick={!isEdit ? addToSubs : editSub}>
        <img src={okSvg} alt="ok svg" />
      </button>
      <button onClick={closeModal}>
        <img src={cancelSvg} alt="cancel svg" />
      </button>
    </>
  );
});
