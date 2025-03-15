// This is the component for the chips input
import { useState } from 'react';
import styles from './ChipsInput.module.css';

const Chip = ({ chip,onRemove }) => {
  return (
    <p className={styles.chips}>
      <span>{chip.content}</span>
      <button onClick={()=>onRemove(chip?.id)}>x</button>
    </p>
  );
};

const CustomChipsInput = () => {
  const [chips, setChips] = useState([]);

  // handler functions

  const onKeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      const inputValue = event.target.value;
      event.target.value=""
      const id = Date.now().toString();
      setChips((prevValue) => [...prevValue, { id, content: inputValue }]);
    }
  };

  const onRemoveChipHandler = (id) => {
    setChips((prevValue)=>prevValue.filter((chip)=>chip.id!==id))
  };
  return (
    <div className={styles.main_container}>
      <h1>Machine Coding:Chips Input</h1>
      <div className={styles.input_container}>
        <input
          type='text'
          placeholder='Type a Chip and Press Enter'
          onKeyUp={onKeyPressHandler}
        />
      </div>
      {/* show the chips in the horizontal Manner */}
      {chips.length > 0 && (
        <div className={styles.chips_container}>
          {chips.map((chip, index) => (
            <Chip
              chip={chip}
              key={chip?.id}
              onRemove={onRemoveChipHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomChipsInput;
