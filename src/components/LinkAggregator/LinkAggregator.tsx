import React, { RefObject, useState } from "react";

import styles from "./styles.module.scss";

interface LinkAggregatorProps {
  links: Array<LinkType>;
  shouldUnderline?: boolean;
}

interface LinkType {
  path: string;
  ref?: RefObject<HTMLDivElement>;
}

export const LinkAggregator = ({
  links,
  shouldUnderline,
}: LinkAggregatorProps) => {
  const [activeItem, setActiveItem] = useState("home");

  const handleSetActiveItem = ({ path, ref }: LinkType) => {
    if (shouldUnderline) {
      setActiveItem(path);
    }

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
