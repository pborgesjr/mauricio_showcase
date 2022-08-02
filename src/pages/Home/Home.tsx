import React, { useRef, useState, useEffect } from "react";
import {
  FaChevronRight,
  FaChevronLeft,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import Carousel, { RenderArrowProps } from "react-elastic-carousel";

import {
  app_logo,
  area_gourmet,
  big_image,
  fachada_casa,
  mauricio_face,
} from "../../assets";
import {
  LinkAggregator,
  ResponsiveVideoPlayer,
  Typography,
} from "../../components";
import { getLocale } from "../../locale";

import styles from "./styles.module.scss";
import "./Carousel.styles.scss";
import { storage } from "../../firebase";
import { instagramLink, whatsAppLink } from "../../constants";

export const Home = () => {
  const imageListInitialState = () => [];

  const [imageList, setImageList] = useState<{ name: string; url: string }[]>(
    imageListInitialState
  );

  //TODO: create global const to storage image path
  const imageListRef = ref(storage, "images/categorias");

  const homeRef = useRef<HTMLDivElement | undefined>(undefined);
  const bioRef = useRef<HTMLDivElement | undefined>(undefined);
  const projectsRef = useRef<HTMLDivElement | undefined>(undefined);
  const contactRef = useRef<HTMLDivElement | undefined>(undefined);

  const { brand, routes } = getLocale();

  const fetchAllImages = async () => {
    const { items } = await listAll(imageListRef);

    if (items) {
      items.forEach((item) => {
        getDownloadURL(item).then((url) =>
          setImageList((prevState) => [...prevState, { name: item.name, url }])
        );
      });
    }
  };

  useEffect(() => {
    //fetchAllImages();
  }, []);

  return (
    <div className={styles.main}>
      <div ref={homeRef} className={styles.header}>
        <div>
          <img src={app_logo} />
          <LinkAggregator
            links={[
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
            ]}
          />
        </div>
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
          {/**imageList.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <img src={image.url} className={styles.image} />
              </div>
            ))*/}
          <div className={styles.imageWrapper}>
            <img src={big_image} className={styles.image} />
          </div>
        </Carousel>
      </div>

      <div className={styles.bio} ref={bioRef}>
        <div className={styles.bioWrapper}>
          <div className={styles.textWrapper}>
            <>
              <Typography type="title" text={brand.name} />
              <Typography type="title" text={`${brand.brand} ______`} />
            </>
            <Typography
              type="body"
              text={brand.description}
              customContainerStyles={styles.descriptionContainer}
            />
          </div>

          {/** 
            <img src={mauricio_face} alt="imagem do maurício" />*/}
        </div>
      </div>

      <div ref={projectsRef} className={styles.projects}>
        <Carousel
          itemsToScroll={1}
          itemsToShow={6}
          renderPagination={() => <></>}
        >
          <div className="slide" id="hoverable-item">
            <img src={fachada_casa} />
            <Typography type="body" text="Sala de estar" />
          </div>
          <div className="slide">
            <img src={fachada_casa} />
            <Typography type="body" text="Sala de estar" />
          </div>
          <div className="slide">
            <img src={fachada_casa} />
            <Typography type="body" text="Sala de estar" />
          </div>
          <div className="slide">
            <img src={fachada_casa} />
            <Typography type="body" text="Sala de estar" />
          </div>
          <div className="slide">
            <img src={fachada_casa} />
            <Typography type="body" text="Sala de estar" />
          </div>
          <div className="slide">
            <img src={fachada_casa} />
            <Typography type="body" text="Sala de estar" />
          </div>
          <div className="slide">
            <img src={fachada_casa} />
            <Typography type="body" text="Sala de estar" />
          </div>
          <div className="slide">
            <img src={fachada_casa} />
            <Typography type="body" text="Sala de estar" />
          </div>
          <div className="slide">
            <img src={fachada_casa} />
            <Typography type="body" text="Sala de estar" />
          </div>
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

        <LinkAggregator
          links={[
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
          ]}
        />

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
