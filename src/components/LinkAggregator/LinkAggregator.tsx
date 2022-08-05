import React, { useState } from "react";
import { LinkType } from "../../constants";

import styles from "./styles.module.scss";

interface LinkAggregatorProps {
  links: Array<LinkType>;
  callback?: VoidFunction;
  shouldUnderline?: boolean;
}

export const LinkAggregator = ({
  links,
  callback,
  shouldUnderline,
}: LinkAggregatorProps) => {
  const [activeItem, setActiveItem] = useState("home");

  const handleSetActiveItem = ({ path, ref }: LinkType) => {
    if (shouldUnderline) {
      setActiveItem(path);
    }
    callback?.();
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      {links.map((link, index) => (
        <button
          key={index}
          onClick={() => handleSetActiveItem(link)}
          className={styles.button}
        >
          <span className={`${styles.text}`}>{link.path}</span>
          <div
            className={`${
              activeItem === link.path && shouldUnderline && styles.active
            }`}
          />
        </button>
      ))}
    </div>
  );
};
