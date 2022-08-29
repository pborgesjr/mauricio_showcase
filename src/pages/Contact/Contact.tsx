import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import { Typography } from "../../components";
import { instagramLink, whatsAppLink } from "../../constants";
import { useCustomQuery } from "../../hooks";
import { getLocale } from "../../locale";

import styles from "./styles.module.scss";

export const Contact = () => {
  const {
    brand: { email, name, phoneNumber, instagramId },
  } = getLocale();

  const { data: imageList, isFetching } = useCustomQuery("contact");

  return (
    <>
      <div className={styles.imageWrapper}>
        {imageList && <img src={imageList[0].url} alt={imageList[0].name} />}
      </div>

      <div className="bleedSideways">
        <div className={styles.itemsContainer}>
          <Typography text={name} type="body" customStyles={styles.title} />
          <div className={styles.contactItem}>
            <MdOutlineMail />
            <Typography type="body" text={email} customStyles={styles.body} />
          </div>

          <div className={styles.contactItem}>
            <a href={whatsAppLink} rel="external" target="_blank">
              <FaWhatsapp />
            </a>
            <Typography
              type="body"
              text={phoneNumber}
              customStyles={styles.body}
            />
          </div>

          <div className={styles.contactItem}>
            <a href={instagramLink} rel="external" target="_blank">
              <FaInstagram />
            </a>
            <Typography
              type="body"
              text={instagramId}
              customStyles={styles.body}
            />
          </div>
        </div>
      </div>
    </>
  );
};
