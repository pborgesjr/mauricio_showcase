import React, { useRef } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Carousel from "react-elastic-carousel";

import { app_logo, mauricio_face } from "../../assets";
import {
  LinkAggregator,
  ResponsiveVideoPlayer,
  Typography,
  Header,
} from "../../components";
import { getLocale } from "../../locale";

import styles from "./styles.module.scss";
import "./Carousel.styles.scss";
import { instagramLink, whatsAppLink } from "../../constants";
import { useFetch } from "../../hooks";

export const Home = () => {
  const { brand, routes, imageCategory } = getLocale();

  const homeRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const floatingImageRef = useRef(null);

  const HEADER_FOOTER_LINKS = [
    {
      path: routes.home,
      ref: homeRef,
    },
    {
      path: routes.about,
      ref: bioRef,
    },
    {
      path: routes.projects,
      ref: projectsRef,
    },
    {
      path: routes.contact,
      ref: contactRef,
    },
  ];

  const showCaseImageList = useFetch("showcase");
  const categoriesImageList = useFetch("categories");

  return (
    <div className={styles.main}>
      <div ref={homeRef}>
        <Header links={HEADER_FOOTER_LINKS} />
      </div>

      <div className={styles.imageSlideShow}>
        <Typography
          customContainerStyles={styles.brand}
          customStyles={styles.brandText}
          text={brand.url}
          type="body"
          verticalOrientation
        />

        <Carousel
          enableSwipe={false}
          renderPagination={() => <></>}
          renderArrow={() => <></>}
          transitionMs={4000}
          enableAutoPlay
          autoPlaySpeed={3000}
        >
          {showCaseImageList.map((image, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={image.url} className={styles.image} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className={styles.bio} ref={bioRef}>
        <div className={styles.bioWrapper}>
          <div className={styles.textWrapper}>
            <Typography type="title" text={brand.name} />
            <Typography type="title" text={`${brand.brand} ______`} />
            <Typography
              type="body"
              text={brand.description}
              customContainerStyles={styles.descriptionContainer}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={mauricio_face} alt="imagem do maurício" />
          </div>
        </div>
      </div>

      <div ref={projectsRef} className={styles.projects}>
        <Carousel
          itemsToScroll={1}
          itemsToShow={6}
          renderPagination={() => <></>}
        >
          {categoriesImageList.map((item, index) => (
            <div className="slide" id="hoverable-item" key={index}>
              <img src={item.url} />
              <Typography type="body" text={imageCategory[item.name]} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className={styles.videoGrid}>
        <div />
        <ResponsiveVideoPlayer
          url="https://www.youtube.com/watch?v=pfaM4c3006k&ab_channel=3DigitStudio"
          muted
          playing={false}
          volume={0}
          loop
        />
        <div />
      </div>

      <div className={styles.footer}>
        <img src={app_logo} />

        <LinkAggregator links={HEADER_FOOTER_LINKS} />

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
