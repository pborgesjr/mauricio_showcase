import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LinkAggregator } from "..";
import { app_logo } from "../../assets";
import { routes } from "../../routes";

import styles from "./styles.module.scss";

const INSTAGRAM_LINK = `${import.meta.env.VITE_INSTAGRAM_LINK}`;
const WHATSAPP_LINK = `${import.meta.env.VITE_WHATSAPP_LINK}`;

interface FooterProps {
  shouldUnderline?: boolean;
}

export const Footer = ({ shouldUnderline }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <img src={app_logo} />

      <div className={styles.links}>
        <LinkAggregator
          links={routes}
          shouldUnderline={shouldUnderline}
          callback={scrollToTop}
        />
      </div>

      <section>
        <a href={WHATSAPP_LINK} rel="external" target="_blank">
          <FaWhatsapp size={35} />
        </a>

        <a href={INSTAGRAM_LINK} rel="external" target="_blank">
          <FaInstagram size={35} />
        </a>
      </section>
    </footer>
  );
};
