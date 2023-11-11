import React from "react";
import { ResponsiveLazyImage } from "../../components";
import { useGetQuery } from "../../hooks";
import styles from "./styles.module.scss";
import { AboutDataResponse } from "../../types";

const FIRST_TITLE = import.meta.env.VITE_FIRST_TITLE;
const FIRST_SUBTITLE = import.meta.env.VITE_FIRST_SUBTITLE;
const FIRST_DESCRIPTION = import.meta.env.VITE_FIRST_DESCRIPTION;

const SECOND_TITLE = import.meta.env.VITE_SECOND_TITLE;
const SECOND_SUBTITLE = import.meta.env.VITE_SECOND_SUBTITLE;
const SECOND_DESCRIPTION = import.meta.env.VITE_SECOND_DESCRIPTION;

export const About = () => {
  const { data } = useGetQuery<AboutDataResponse>({
    queryKey: ["about"],
    url: "/about",
  });

  const mainImage = data?.filter((img) => img.id === "main");
  const profileImages = data?.filter((img) => img.id !== "main");

  return (
    <>
      <div className={styles.carouselWrapper}>
        <div className={styles.imageWrapper}>
          <ResponsiveLazyImage
            src={mainImage?.[0].url}
            placeholderSrc={mainImage?.[0].placeholder}
            id={mainImage?.[0].id}
          />
        </div>
      </div>
      <div className="bleedSideways">
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <article>
              <div className={styles.rightImage}>
                <ResponsiveLazyImage
                  id={"0"}
                  src={profileImages?.[0].url}
                  placeholderSrc={profileImages?.[0].placeholder}
                  className={styles.image}
                />
              </div>
              <div>
                <h1>{FIRST_TITLE}</h1>
                <div className={styles.brand}>
                  <h1>{FIRST_SUBTITLE}</h1>
                  <div />
                </div>
              </div>

              <p>{FIRST_DESCRIPTION}</p>
            </article>
          </div>

          <div className={styles.item}>
            <article>
              <div className={styles.leftImage}>
                <ResponsiveLazyImage
                  id={"1"}
                  src={profileImages?.[1].url}
                  placeholderSrc={profileImages?.[1].placeholder}
                  className={styles.image}
                />
              </div>
              <div>
                <h1>{SECOND_TITLE}</h1>
                <div className={styles.brand}>
                  <h1>{SECOND_SUBTITLE}</h1>
                  <div />
                </div>
              </div>

              <p>{SECOND_DESCRIPTION}</p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
