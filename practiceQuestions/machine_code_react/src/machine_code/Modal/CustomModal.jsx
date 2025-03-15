import { useState } from 'react';
import styles from './CustomModal.module.css';

const CustomModalPopup = ({ children }) => {
  return <div className={styles.modal_overlay}>{children}</div>;
};

const CustomModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // handler functions

  const onModalOpenHandler = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const onModalCloseHandler = (event) => {
    event.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div className={styles.modal_container}>
      <h1>Custom Modal Component</h1>
      <div>
        <button
          className={styles.modal_btn}
          onClick={onModalOpenHandler}>
          Open Modal
        </button>
      </div>

      {/* Opening the Modal */}
      {isModalOpen && (
        <CustomModalPopup>
          <div className={styles.modal_children}>
            <h1>Hello this is Custom Modal PopUp</h1>
            <div>
              <button
                className={styles.modal_btn}
                onClick={onModalCloseHandler}>
                Close Modal
              </button>
            </div>
          </div>
        </CustomModalPopup>
      )}
    </div>
  );
};

export default CustomModal;
