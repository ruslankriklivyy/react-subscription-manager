import { useStore } from 'effector-react';
import React from 'react';
import { RgbColor, RgbColorPicker } from 'react-colorful';
import { $isVisiblePicker, setIsVisiblePicker } from '../../store/store';
import styles from './addModal.module.scss';
import paletteSvg from '../../assets/img/palette.svg';

interface IPalette {
  color: RgbColor;
  setColor: (val: RgbColor) => void;
}

const Palette: React.FC<IPalette> = ({ color, setColor }) => {
  const visiblePicker = useStore($isVisiblePicker);

  return (
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
  );
};

export default React.memo(Palette);
