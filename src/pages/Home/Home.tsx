import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { Slide } from "react-slideshow-image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import {
  app_logo,
  area_gourmet,
  big_image,
  fachada_casa,
  mauricio_face,
} from "../../assets";
import { LinkAggregator, Typography } from "../../components";
import { getLocale } from "../../locale";
import colors from "../../styles/_colors.module.scss";

import styles from "./styles.module.scss";

export const Home = () => {
  const homeRef = useRef<HTMLDivElement | undefined>(undefined);
  const bioRef = useRef<HTMLDivElement | undefined>(undefined);
  const projectsRef = useRef<HTMLDivElement | undefined>(undefined);
  //const contactRef = useRef<HTMLDivElement | undefined>(undefined);

  const { brand, routes } = getLocale();

  return (
    <div className={styles.main}>
      <div className={styles.header} ref={homeRef}>
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
              ref: undefined,
            },
          ]}
        />
      </div>

      <div className={styles.imageSlideShow}>
        <Typography
          customContainerStyles={styles.brand}
          customStyles={styles.brandText}
          text={brand.url}
          type="body"
          verticalOrientation
        />

        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          arrows={false}
          canSwipe={false}
          transitionDuration={9000}
          easing="cubic"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={big_image}
              style={{
                width: "100%",
                maxWidth: "70rem",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={big_image}
              style={{
                width: "100%",
                maxWidth: "70rem",
              }}
            />
          </div>
        </Slide>
      </div>

      <div className={styles.bio} ref={bioRef}>
        <div className={styles.bioWrapper}>
          <div className={styles.textWrapper}>
            <div>
              <Typography type="title" text={brand.name} />
              <Typography type="title" text={`${brand.brand} ______`} />
            </div>
            <Typography type="body" text={brand.description} />
          </div>

          <img src={mauricio_face} alt="imagem do maurício" />
        </div>
        <div ref={projectsRef} className={styles.projects}>
          <Slide
            slidesToScroll={1}
            slidesToShow={6}
            autoplay={false}
            cssClass={styles.slidesWrapper}
            easing="ease"
            prevArrow={<FaChevronLeft size={30} className={styles.leftArrow} />}
            nextArrow={
              <FaChevronRight
                size={30}
                className={styles.rightArrow}
                color={colors.red}
              />
            }
          >
            <div className={styles.slide}>
              <img src={fachada_casa} />
              <Typography type="body" text="Sala de estar" />
            </div>
            <div className={styles.slide}>
              <img src={area_gourmet} />
              <Typography type="body" text="Quarto" />
            </div>
            <div className={styles.slide}>
              <img src={fachada_casa} />
              <Typography type="body" text="Fachada" />
            </div>
            <div className={styles.slide}>
              <img src={fachada_casa} />
              <Typography type="body" text="Área Gourmet" />
            </div>
            <div className={styles.slide}>
              <img src={fachada_casa} />
              <Typography type="body" text="Banheiro" />
            </div>
            <div className={styles.slide}>
              <img src={fachada_casa} />
              <Typography type="body" text="Área de Lazer" />
            </div>
            <div className={styles.slide}>
              <img src={fachada_casa} />
              <Typography type="body" text="Churrasqueira" />
            </div>
            <div className={styles.slide}>
              <img src={fachada_casa} />
              <Typography type="body" text="Sala de Jantar" />
            </div>
            <div className={styles.slide}>
              <img src={fachada_casa} />
              <Typography type="body" text="Escritório" />
            </div>
          </Slide>
        </div>
      </div>

      <div className={styles.videoShow}>
        <div className={styles.video}>
          <ReactPlayer
            url={
              "https://www.youtube.com/watch?v=pfaM4c3006k&ab_channel=3DigitStudio"
            }
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
            height={630}
            width={"70rem"}
            muted
            volume={0}
            loop={true}
            playing
          />
        </div>
        <img src={app_logo} className={styles.logo} />

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
              ref: undefined,
            },
          ]}
        />
      </div>
    </div>
  );
};
