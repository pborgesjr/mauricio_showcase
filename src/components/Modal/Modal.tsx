import React, { useState, useImperativeHandle, forwardRef } from "react";
import { IoIosClose } from "react-icons/io";

import "./styles.scss";

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
    <div className="overlay">
      <div className="content">
        <button
          onClick={() => toggleVisibility(false)}
          className="close-button"
        >
          <IoIosClose />
        </button>

        {children}
      </div>
    </div>
  ) : (
    <></>
  );
});
