import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import { Header, Typography } from "../../components";
import { instagramLink, whatsAppLink } from "../../constants";
import { getLocale } from "../../locale";

import "./styles.scss";

export const Contact = () => {
  const {
    routes,
    brand: { email, name, phoneNumber, instagramId },
  } = getLocale();

  const HEADER_FOOTER_LINKS = [
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
        <div className="items-container">
          <Typography text={name} type="body" customStyles="title" />
          <div className="contact-item">
            <MdOutlineMail />
            <Typography type="body" text={email} />
          </div>

          <div className="contact-item">
            <a href={whatsAppLink} rel="external" target="_blank">
              <FaWhatsapp />
            </a>
            <Typography type="body" text={phoneNumber} />
          </div>

          <div className="contact-item">
            <a href={instagramLink} rel="external" target="_blank">
              <FaInstagram />
            </a>
            <Typography type="body" text={instagramId} />
          </div>
        </div>
      </div>
    </>
  );
};
