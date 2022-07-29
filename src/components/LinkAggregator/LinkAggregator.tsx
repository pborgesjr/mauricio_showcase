import React, { useState } from "react";

import styles from "./styles.module.scss";

interface LinkAggregatorProps {
  paths: string[];
  shouldUnderline?: boolean;
}

export const LinkAggregator = ({
  paths,
  shouldUnderline,
}: LinkAggregatorProps) => {
  const [activeItem, setActiveItem] = useState("home");

  const handleSetActiveItem = (selectedItem: string) => {
    if (shouldUnderline) {
      setActiveItem(selectedItem);
    }

    //scrollToPosition
    //console.log(activeItem === selectedItem);
  };

  return (
    <div className={styles.container}>
      {paths.map((path) => (
        <button
          onClick={() => handleSetActiveItem(path)}
          className={styles.button}
        >
          <span className={`${styles.text}`}>{path}</span>
          <div className={`${activeItem === path && styles.active}`} />
        </button>
      ))}
    </div>
  );
};
