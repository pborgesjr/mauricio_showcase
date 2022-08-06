import React from "react";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { contact } from "../../assets";

import { Header, Typography } from "../../components";
import { instagramLink, whatsAppLink } from "../../constants";
import { getLocale } from "../../locale";

import "./styles.scss";

export const Contact = () => {
  const { routes } = getLocale();

  const HEADER_FOOTER_LINKS = [
    {
      name: routes.home,
      path: "/",
    },
    {
      name: routes.projects,
      path: "/",
    },
    {
      name: routes.about,
      path: "/",
    },
    {
      name: routes.contact,
      path: "/contato",
    },
  ];

  return (
    <>
      {/**TODO: create a default layout for header and footer component */}
      <Header links={HEADER_FOOTER_LINKS} shouldUnderline />
      <div className="container">
        <div className="image-wrapper">
          <img src={contact} />
        </div>
        <div className="right">
          <Typography type="title" text="Entre em contato!" />
          <div className="items-container">
            <div className="contact-item">
              <a href={whatsAppLink} rel="external" target="_blank">
                <FaWhatsapp />
              </a>
              <Typography type="body" text="Envie uma mensagem pelo WhatsApp" />
            </div>

            <div className="contact-item">
              <a href={instagramLink} rel="external" target="_blank">
                <FaInstagram />
              </a>
              <Typography type="body" text="Siga-me no Instagram" />
            </div>

            <div className="contact-item">
              <MdOutlineMail />
              <Typography type="body" text="ppmbjr@gmail.com" />
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <Typography type="body" text="(35) 99168-9166" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
