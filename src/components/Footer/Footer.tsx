import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LinkAggregator } from "..";
import { app_logo } from "../../assets";
import { instagramLink, whatsAppLink } from "../../constants";
import { getLocale } from "../../locale";
import { routes } from "../../routes";

import "./styles.scss";

interface FooterProps {
  shouldUnderline?: boolean;
}

export const Footer = ({ shouldUnderline }: FooterProps) => {
  const { brand } = getLocale();
  return (
    <footer>
      <img src={app_logo} alt={`${brand.name} ${brand.brand}`} />

      <LinkAggregator links={routes} shouldUnderline={shouldUnderline} />

      <section>
        <a href={whatsAppLink} rel="external" target="_blank">
          <FaWhatsapp size={40} />
        </a>

        <a href={instagramLink} rel="external" target="_blank">
          <FaInstagram size={40} />
        </a>
      </section>
    </footer>
  );
};
