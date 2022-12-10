import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import { ResponsiveLazyImage, Typography } from "../../components";
import { instagramLink, whatsAppLink } from "../../constants";
import { useCustomGetQuery } from "../../hooks";
import { getLocale } from "../../locale";
import { imageSrcBuilder } from "../../utils";

import styles from "./styles.module.scss";

export const Contact = () => {
  const {
    brand: { email, name, phoneNumber, instagramId },
  } = getLocale();

  const { data, isFetching, isFetched } = useCustomGetQuery({
    queryKey: "random",
  });

  const hasFinished = isFetched && !isFetching;

  return (
    <>
      <div className={styles.imageWrapper}>
        <ResponsiveLazyImage
          height="100%"
          width="100%"
          hasFinished={hasFinished}
          blurHash={"LLKd[5?HX.X9_No#-os9pJ?brqRP"}
          src={data?.data[0].urls.regular} // use normal <img> attributes as props]
          srcSet={imageSrcBuilder(data?.data[0].urls.raw).srcSet}
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
