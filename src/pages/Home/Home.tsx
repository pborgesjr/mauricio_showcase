import React from "react";
import {
  app_logo,
  area_gourmet,
  bedroom,
  big_image,
  fachada_casa,
  fake_player,
  mauricio_face,
} from "../../assets";
import { LinkAggregator, Typography } from "../../components";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import styles from "./styles.module.scss";
import ReactPlayer from "react-player";

const MOCK_BIO_TEXT =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim veniam quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.\n\n Ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.";

export const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <img src={app_logo} />
        <LinkAggregator
          shouldUnderline
          paths={["home", "sobre", "projetos", "contato"]}
        />
      </div>

      <div className={styles.bigImages}>
        <Typography
          customContainerStyles={styles.by}
          customStyles={styles.byText}
          text="maarchviz.com ●  by mauricio alves"
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

      <div className={styles.bio}>
        <div
          style={{
            display: "flex",
            maxWidth: "70rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography type="title" text="Mauricio Alves" />
              <Typography type="title" text="Archviz ______" />
            </div>
            <Typography
              type="body"
              customStyles={styles.bioText}
              text={MOCK_BIO_TEXT}
            />
          </div>

          <img src={mauricio_face} alt="imagem do maurício" />
        </div>
        <div
          style={{
            width: "100%",
            marginTop: "5rem",
          }}
        >
          <Slide
            slidesToScroll={1}
            slidesToShow={6}
            autoplay={false}
            cssClass={styles.slider}
            easing="ease"
          >
            <div className={styles.slideWrapper}>
              <img src={fachada_casa} />
              <Typography type="body" text="Sala de estar" />
            </div>
            <div className={styles.slideWrapper}>
              <img src={area_gourmet} />
              <Typography type="body" text="Quarto" />
            </div>
            <div className={styles.slideWrapper}>
              <img src={fachada_casa} />
              <Typography type="body" text="Fachada" />
            </div>
            <div className={styles.slideWrapper}>
              <img src={fachada_casa} />
              <Typography type="body" text="Área Gourmet" />
            </div>
            <div className={styles.slideWrapper}>
              <img src={fachada_casa} />
              <Typography type="body" text="Banheiro" />
            </div>
            <div className={styles.slideWrapper}>
              <img src={fachada_casa} />
              <Typography type="body" text="Área de Lazer" />
            </div>
            <div className={styles.slideWrapper}>
              <img src={fachada_casa} />
              <Typography type="body" text="Churrasqueira" />
            </div>
            <div className={styles.slideWrapper}>
              <img src={fachada_casa} />
              <Typography type="body" text="Sala de Jantar" />
            </div>
            <div className={styles.slideWrapper}>
              <img src={fachada_casa} />
              <Typography type="body" text="Escritório" />
            </div>
          </Slide>
        </div>
      </div>

      <div className={styles.bottom}>
        <div style={{ position: "relative", top: "-8rem" }}>
          <ReactPlayer
            url={
              "https://www.youtube.com/watch?v=Bp0NLbQvH4o&ab_channel=FinnHua"
            }
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
            height={720}
            width={"70rem"}
          />
        </div>
        <img src={app_logo} className={styles.logo} />
        <LinkAggregator paths={["home", "sobre", "projetos", "contato"]} />
      </div>
    </div>
  );
};
