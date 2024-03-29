import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LinkAggregator } from "..";
import { app_logo } from "../../assets";
import { instagramLink, whatsAppLink } from "../../constants";
import { getLocale } from "../../locale";
import { routes } from "../../routes";

import styles from "./styles.module.scss";

interface FooterProps {
  shouldUnderline?: boolean;
}

export const Footer = ({ shouldUnderline }: FooterProps) => {
  const { brand } = getLocale();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <img src={app_logo} alt={`${brand.name} ${brand.brand}`} />

      <div className={styles.links}>
        <LinkAggregator
          links={routes}
          shouldUnderline={shouldUnderline}
          callback={scrollToTop}
        />
      </div>

      <section>
        <a href={whatsAppLink} rel="external" target="_blank">
          <FaWhatsapp size={35} />
        </a>

        <a href={instagramLink} rel="external" target="_blank">
          <FaInstagram size={35} />
        </a>
      </section>
    </footer>
  );
};
