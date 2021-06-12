import React from 'react';
import okSvg from '../../assets/img/ok.svg';
import cancelSvg from '../../assets/img/cancel.svg';

interface IModalActions {
  addToSubs: () => any;
  closeModal: () => void;
}

const ModalActions: React.FC<IModalActions> = ({ addToSubs, closeModal }) => {
  return (
    <>
      <button onClick={addToSubs}>
        <img src={okSvg} alt="ok svg" />
      </button>
      <button onClick={closeModal}>
        <img src={cancelSvg} alt="cancel svg" />
      </button>
    </>
  );
};

export default React.memo(ModalActions);
