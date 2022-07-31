import React from "react";

import styles from "./styles.module.scss";

interface TypographyProps {
  text: string;
  type: "title" | "body";
  verticalOrientation?: boolean;
  customStyles?: string;
  customContainerStyles?: string;
}

export const Typography = ({
  text,
  type,
  verticalOrientation,
  customStyles,
  customContainerStyles,
}: TypographyProps) => {
  return (
    <div
      className={`${styles.container} ${
        verticalOrientation && styles.vertical
      } ${customContainerStyles}`}
    >
      <span className={`${styles.text} ${styles[type]} ${customStyles}`}>
        {text}
      </span>
    </div>
  );
};
