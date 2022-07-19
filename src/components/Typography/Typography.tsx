import React from "react";

import styles from "./styles.module.scss";

interface TypographyProps {
  text: string;
  type: "title" | "body";
  verticalOrientation?: boolean;
  customStyles?: string;
}

export const Typography = ({
  text,
  type,
  verticalOrientation,
  customStyles,
}: TypographyProps) => {
  return (
    <div
      className={`${styles.container} ${
        verticalOrientation && styles.vertical
      }`}
    >
      <span className={`${styles.text} ${styles[type]} ${customStyles}`}>
        {text}
      </span>
    </div>
  );
};
