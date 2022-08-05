import React, { useState } from "react";
import { LinkAggregator } from "..";
import { IoMdReorder, IoIosClose } from "react-icons/io";

import styles from "./styles.module.scss";
import { app_logo } from "../../assets";
import { LinkAggregatorProps } from "../LinkAggregator/LinkAggregator";

interface HeaderProps extends LinkAggregatorProps {}

export const Header = ({ links, shouldUnderline, callback }: HeaderProps) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenu((prevState) => !prevState);
  };

  const handleCallback = () => {
    if (isMobileMenu) {
      handleToggleMenu();
    }
    callback?.();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={app_logo} />

        <div
          className={`${styles.links} ${isMobileMenu && styles.mobileLinks}`}
        >
          <button
            onClick={handleToggleMenu}
            className={`${styles.button} ${isMobileMenu && styles.closeButton}`}
          >
            <IoIosClose />
          </button>

          <LinkAggregator
            links={links}
            shouldUnderline={shouldUnderline}
            callback={handleCallback}
          />
        </div>

        <button onClick={handleToggleMenu} className={`${styles.button}`}>
          <IoMdReorder />
        </button>
      </div>
    </div>
  );
};
