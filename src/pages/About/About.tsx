import React from "react";
import { ResponsiveLazyImage } from "../../components";
import { useGetQuery } from "../../hooks";
import styles from "./styles.module.scss";
import { AboutDataResponse } from "../../types";
import { getLocale } from "../../locale";

export const About = () => {
  const { data } = useGetQuery<AboutDataResponse>({
    queryKey: ["about"],
    url: "/about",
  });

  const {
    about: { bottom, top },
  } = getLocale();

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
                <h1>{top.title}</h1>
                <div className={styles.brand}>
                  <h1>{top.subtitle}</h1>
                  <div />
                </div>
              </div>

              <p>{top.description}</p>
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
                <h1>{bottom.title}</h1>
                <div className={styles.brand}>
                  <h1>{bottom.subtitle}</h1>
                  <div />
                </div>
              </div>

              <p>{bottom.description}</p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
