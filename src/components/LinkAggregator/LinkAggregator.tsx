import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LinkType } from "../../constants";

import styles from "./styles.module.scss";

export interface LinkAggregatorProps {
  links: Array<LinkType>;
  callback?: VoidFunction;
  shouldUnderline?: boolean;
}

export const LinkAggregator = ({
  links,
  callback,
  shouldUnderline,
}: LinkAggregatorProps) => {
  const [activeItem, setActiveItem] = useState<string>();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSetActiveItem = (link: LinkType) => {
    if (shouldUnderline) {
      setActiveItem(link.path);
    }
    //TODO: create not found page error
    navigate(link?.path || "/");

    callback?.();
  };

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  return (
    <div className={styles.container}>
      {links.map((link, index) => (
        <button
          key={index}
          onClick={() => handleSetActiveItem(link)}
          className={styles.button}
        >
          <span className={`${styles.text}`}>{link.name}</span>
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
