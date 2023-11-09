import React, { useState, useImperativeHandle, forwardRef } from "react";
import { IoIosClose } from "react-icons/io";

import styles from "./styles.module.scss";

interface ModalProps {
  children: JSX.Element;
}

export const Modal = forwardRef(({ children }: ModalProps, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = (visibility?: boolean) => {
    setIsOpen((prevState) => visibility || !prevState);
  };

  useImperativeHandle(ref, () => ({
    openModal: () => toggleVisibility(true),
    closeModal: () => toggleVisibility(false),
  }));

  return isOpen ? (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <button
          onClick={() => toggleVisibility(false)}
          className={styles.closeButton}
        >
          <IoIosClose id="close-icon" />
        </button>

        {children}
      </div>
    </div>
  ) : (
    <></>
  );
});
