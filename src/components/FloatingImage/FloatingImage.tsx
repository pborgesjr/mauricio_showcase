import React, { useState, useImperativeHandle, forwardRef } from "react";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";

import "./styles.scss";

interface FloatingImageProps {
  path: string;
}

export const FloatingImage = forwardRef(({ path }: FloatingImageProps, ref) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleVisibility = (visibility?: boolean) => {
    setIsOpened((prevState) => visibility || !prevState);
  };

  useImperativeHandle(ref, () => ({
    openModal: () => toggleVisibility(true),
    closeModal: () => toggleVisibility(false),
  }));

  return isOpened ? (
    <div className="modal">
      <div className="overlay">oi123</div>
    </div>
  ) : (
    <></>
  );
});
