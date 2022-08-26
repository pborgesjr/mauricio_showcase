import React, { useState } from "react";
import { LinkAggregator } from "..";
import { IoIosClose } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

import styles from "./styles.module.scss";
import { app_logo } from "../../assets";
import { LinkAggregatorProps } from "../LinkAggregator/LinkAggregator";
import { getLocale } from "../../locale";

interface HeaderProps extends LinkAggregatorProps {}

export const Header = ({ links, shouldUnderline, callback }: HeaderProps) => {
  const { brand } = getLocale();
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
    <header>
      <img src={app_logo} alt={`${brand.name} ${brand.brand}`} />

      <div className={`${styles.links} ${isMobileMenu && styles.mobileLinks}`}>
        <button onClick={handleToggleMenu} className={styles.button}>
          <IoIosClose />
        </button>

        <LinkAggregator
          links={links}
          shouldUnderline={shouldUnderline}
          callback={handleCallback}
        />
      </div>

      <button onClick={handleToggleMenu} className={`${styles.button}`}>
        <MdOutlineMenu />
      </button>
    </header>
  );
};
