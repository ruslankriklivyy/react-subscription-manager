import React from 'react';
import styles from './addModal.module.scss';
import paletteSvg from '../../assets/img/palette.svg';
import okSvg from '../../assets/img/ok.svg';
import cancelSvg from '../../assets/img/cancel.svg';

interface IAddModal {
  visible: boolean;
}

const AddModal: React.FC<IAddModal> = ({ visible }) => {
  return (
    <>
      <div className={`${!visible ? styles.blockOut : styles.blockOut + ' ' + styles.show}`}></div>
      <div className={`${!visible ? styles.addModal : styles.addModal + ' ' + styles.show}`}>
        <div className={styles.addModalWrapper}>
          <div className={styles.addModalPalette}>
            <button>
              <img src={paletteSvg} alt="palette svg" />
            </button>
          </div>
          <div className={styles.addModalInput}>
            <input type="text" placeholder="Enter name" />
          </div>
          <div className={styles.addModalInput}>
            <input type="text" placeholder="Enter price" />
          </div>
          <div className={styles.addModalInput}>
            <input type="text" placeholder="Enter payment" />
          </div>
          <div className={styles.addModalBottom}>
            <button>
              <img src={okSvg} alt="ok svg" />
            </button>
            <button>
              <img src={cancelSvg} alt="cancel svg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddModal;
