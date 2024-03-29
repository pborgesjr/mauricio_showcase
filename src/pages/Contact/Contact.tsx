import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import { ResponsiveLazyImage, Typography } from "../../components";
import { instagramLink, whatsAppLink } from "../../constants";
import { useGetQuery } from "../../hooks";
import { getLocale } from "../../locale";

import styles from "./styles.module.scss";
import { ContactDataResponse } from "../../types";

export const Contact = () => {
  //TODO: passar variaveis para .env
  const {
    brand: { email, name, phoneNumber, instagramId },
  } = getLocale();

  const { data } = useGetQuery<ContactDataResponse>({
    queryKey: ["contact"],
    url: "/contact",
  });

  return (
    <>
      <div className={styles.imageWrapper}>
        <ResponsiveLazyImage
          src={data?.[0].url}
          placeholderSrc={data?.[0].placeholder}
        />
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
