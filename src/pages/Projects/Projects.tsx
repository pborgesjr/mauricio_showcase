import React, { useRef } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Carousel from "react-elastic-carousel";

import { app_logo, big_image } from "../../assets";
import {
  LinkAggregator,
  ResponsiveVideoPlayer,
  Header,
} from "../../components";
import { getLocale } from "../../locale";

import styles from "./styles.module.scss";
import "./Carousel.styles.scss";
import { instagramLink, whatsAppLink } from "../../constants";
import { useFetch, useWindowSize } from "../../hooks";
import { routes } from "../../routes";

export const Projects = () => {
  const { brand, imageCategory } = getLocale();

  const bioRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const showCaseImageList = useFetch("showcase");
  const categoriesImageList = useFetch("categories");

  return (
    <div className={styles.main}>
      <Header links={routes} shouldUnderline />

      <div className={styles.imageSlideShow}>
        <Carousel
          enableSwipe={false}
          renderPagination={() => <></>}
          renderArrow={() => <></>}
          transitionMs={4000}
          enableAutoPlay
          autoPlaySpeed={3000}
        >
          <div
            className={styles.testeImage}
            style={{ backgroundImage: `url(${big_image})` }}
          />
        </Carousel>
      </div>

      <div className={styles.imageList}>
        {categoriesImageList.map((image) => (
          <div>
            <img src={image.url} />
          </div>
        ))}
      </div>

      <div className={styles.videoGrid}>
        <ResponsiveVideoPlayer
          url="https://www.youtube.com/watch?v=pfaM4c3006k&ab_channel=3DigitStudio"
          muted
          playing={false}
          volume={0}
          loop
          containerStyles={styles.videoContainer}
        />
      </div>

      <div className={styles.footer}>
        <img src={app_logo} />

        <LinkAggregator links={routes} shouldUnderline />

        <div className={styles.links} ref={contactRef}>
          <a href={whatsAppLink} rel="external" target="_blank">
            <FaWhatsapp size={40} className={styles.contactIcon} />
          </a>

          <a href={instagramLink} rel="external" target="_blank">
            <FaInstagram className={styles.contactIcon} size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};
