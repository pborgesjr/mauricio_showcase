import React, { useState } from "react";
import { LinkAggregator } from "..";
import { IoIosClose } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

import styles from "./styles.module.scss";
import { app_logo } from "../../assets";
import { LinkAggregatorProps } from "../LinkAggregator/LinkAggregator";

interface HeaderProps extends LinkAggregatorProps {}

export const Header = ({ links, shouldUnderline, callback }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header>
      <img src={app_logo} />

      <div
        className={`${styles.links} ${styles.mobileLinks} ${
          isOpen ? styles.slideIn : styles.slideOut
        }
        }`}
      >
        <button
          onClick={handleToggleMenu}
          className={`${styles.button} ${styles.closeButton}`}
        >
          <IoIosClose />
        </button>

        <LinkAggregator
          links={links}
          shouldUnderline={shouldUnderline}
          callback={callback}
        />
      </div>

      <button onClick={handleToggleMenu} className={`${styles.button}`}>
        <MdOutlineMenu />
      </button>
    </header>
  );
};
