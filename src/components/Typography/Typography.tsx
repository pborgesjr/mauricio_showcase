import React from "react";

import styles from "./styles.module.scss";

interface TypographyProps {
  text: string;
  type: "title" | "body";
}

export const Typography = ({ text, type }: TypographyProps) => {
  return <span className={`${styles.text} ${styles[type]}`}>{text}</span>;
};
