import React, { useState } from "react";
import { LinkAggregator } from "..";
import { IoMdReorder, IoIosClose } from "react-icons/io";
import { LinkType } from "../../constants";

import styles from "./styles.module.scss";
import { app_logo } from "../../assets";

interface HeaderProps {
  links: Array<LinkType>;
}

export const Header = ({ links }: HeaderProps) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenu((prevState) => !prevState);
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
            callback={isMobileMenu ? handleToggleMenu : undefined}
          />
        </div>

        <button onClick={handleToggleMenu} className={`${styles.button}`}>
          <IoMdReorder />
        </button>
      </div>
    </div>
  );
};
