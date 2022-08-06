import React, { useRef } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Carousel from "react-elastic-carousel";

import { app_logo, big_image, mauricio_face } from "../../assets";
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
import { useFetch, useWindowSize } from "../../hooks";

export const Home = () => {
  const { brand, routes, imageCategory } = getLocale();

  const homeRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const HEADER_FOOTER_LINKS = [
    {
      name: routes.home,
      ref: homeRef,
      path: "/",
    },
    {
      name: routes.projects,
      ref: projectsRef,
      path: "/projetos",
    },
    {
      name: routes.about,
      ref: bioRef,
      path: "/sobre",
    },
    {
      name: routes.contact,
      path: "/contato",
    },
  ];

  const showCaseImageList = useFetch("showcase");
  const categoriesImageList = useFetch("categories");
  const itemsToShow = useWindowSize([
    {
      minWidth: 1200,
      itemsToShow: 4,
    },
    {
      minWidth: 800,
      itemsToShow: 2,
    },
    {
      minWidth: 600,
      itemsToShow: 1,
    },
  ]);

  return (
    <div className={styles.main}>
      <Header links={HEADER_FOOTER_LINKS} ref={homeRef} shouldUnderline />

      <div className={styles.imageSlideShow}>
        <div className={styles.teste}>
          <Typography
            customContainerStyles={styles.brand}
            customStyles={styles.brandText}
            text={brand.url}
            type="body"
            verticalOrientation
          />
        </div>
        <div
          className={styles.testeImage}
          style={{ backgroundImage: `url(${big_image})` }}
        ></div>
        {/**
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
         */}
      </div>

      <div className={styles.bio} ref={bioRef}>
        <div className={styles.bioWrapper}>
          <div className={styles.textWrapper}>
            <Typography
              type="title"
              text={brand.name}
              customStyles={styles.brand}
            />
            <div className={styles.brandContainer}>
              <Typography
                type="title"
                customStyles={styles.brand}
                text={`${brand.brand}`}
              />
              <div />
            </div>
            <Typography
              type="body"
              text={brand.description}
              customContainerStyles={styles.descriptionContainer}
            />
          </div>

          <div className={styles.imageWrapper}>
            <img src={mauricio_face} alt="imagem do maurício" />
          </div>
        </div>
      </div>

      <div ref={projectsRef} className={styles.projects}>
        <Carousel
          itemsToScroll={1}
          itemsToShow={itemsToShow}
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
          containerStyles={styles.videoContainer}
        />
        <div className={styles.whiteDiv} />
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
