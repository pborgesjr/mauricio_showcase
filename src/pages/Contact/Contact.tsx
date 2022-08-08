import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import { Typography } from "../../components";
import { instagramLink, whatsAppLink } from "../../constants";
import { getLocale } from "../../locale";

import "./styles.scss";

export const Contact = () => {
  const {
    brand: { email, name, phoneNumber, instagramId },
  } = getLocale();

  return (
    <>
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
