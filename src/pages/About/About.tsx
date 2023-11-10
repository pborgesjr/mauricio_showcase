import React from "react";
import { ResponsiveLazyImage } from "../../components";
import { useGetQuery } from "../../hooks";

import styles from "./styles.module.scss";
import { AboutDataResponse } from "../../types";

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
                  /*  src={profileImages?.[0].url} */
                  placeholderSrc={profileImages?.[0].placeholder}
                  className={styles.image}
                />
              </div>
              <div>
                <h1>Maurício Alves</h1>
                <div className={styles.brand}>
                  <h1>Archviz</h1>
                  <div />
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat ut wisi enim ad minim veniam quis nostrud
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
              </p>
              <p>
                Ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore. Ex ea commodo consequat. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore.
              </p>
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
                <h1>Lorem ipsum</h1>
                <div className={styles.brand}>
                  <h1>dolor</h1>
                  <div />
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat ut wisi enim ad minim veniam quis nostrud
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
              </p>
              <p>
                Ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore. Ex ea commodo consequat. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt.
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
