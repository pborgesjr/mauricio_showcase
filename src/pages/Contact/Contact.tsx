import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import { ResponsiveLazyImage, Typography } from "../../components";
import { useGetQuery } from "../../hooks";

import styles from "./styles.module.scss";
import { ContactDataResponse } from "../../types";

const NAME = import.meta.env.VITE_CONTACT_NAME;
const EMAIL = import.meta.env.VITE_CONTACT_EMAIL;
const WHATSAPP_LINK = import.meta.env.VITE_WHATSAPP_LINK;
const PHONENUMBER_LINK = import.meta.env.VITE_CONTACT_PHONENUMBER;
const INSTAGRAM_LINK = import.meta.env.VITE_INSTAGRAM_LINK;
const INSTAGRAM_ID = import.meta.env.VITE_CONTACT_INSTAGRAM_ID;

export const Contact = () => {
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
          <Typography text={NAME} type="body" customStyles={styles.title} />
          <a href={`mailto:${EMAIL}`} rel="external" target="_blank">
            <div className={styles.contactItem}>
              <MdOutlineMail />
              <Typography type="body" text={EMAIL} customStyles={styles.body} />
            </div>
          </a>

          <a href={WHATSAPP_LINK} rel="external" target="_blank">
            <div className={styles.contactItem}>
              <FaWhatsapp />
              <Typography
                type="body"
                text={PHONENUMBER_LINK}
                customStyles={styles.body}
              />
            </div>
          </a>

          <a href={INSTAGRAM_LINK} rel="external" target="_blank">
            <div className={styles.contactItem}>
              <FaInstagram />
              <Typography
                type="body"
                text={INSTAGRAM_ID}
                customStyles={styles.body}
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
