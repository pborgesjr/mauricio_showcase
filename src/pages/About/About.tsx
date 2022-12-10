import React from "react";
import { useQuery } from "react-query";
import { Carousel, ResponsiveLazyImage } from "../../components";
import { apiClient } from "../../services";
import { MOCK_IMAGES } from "../../utils";

import styles from "./styles.module.scss";

export const About = () => {
  const { data, isFetching, isFetched } = useQuery(
    "random",
    async () => await apiClient.get("")
  );

  const hasFinished = isFetched && !isFetching;

  return (
    <>
      <div className={styles.carouselWrapper}>
        <Carousel
          infiniteLoop
          fullWidth
          autoPlay
          hasFinished={hasFinished}
          showArrows={false}
          interval={11000}
          transitionTime={5000}
          images={MOCK_IMAGES}
        />
      </div>
      <div className="bleedSideways">
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <article>
              <ResponsiveLazyImage
                width={345}
                height={400}
                blurHash={"LLKd[5?HX.X9_No#-os9pJ?brqRP"}
                hasFinished={hasFinished}
                src={MOCK_IMAGES[3].src}
                id={"0"}
                className={`${styles.image} ${styles.rightImage}`}
              />
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
              <ResponsiveLazyImage
                width={345}
                height={400}
                blurHash={"LLKd[5?HX.X9_No#-os9pJ?brqRP"}
                hasFinished={hasFinished}
                src={MOCK_IMAGES[0].src}
                id={"1"}
                className={`${styles.image} ${styles.leftImage}`}
              />
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
