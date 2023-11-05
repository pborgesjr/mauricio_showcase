import React from "react";
import { Carousel, ResponsiveLazyImage } from "../../components";
import { useCustomGetQuery } from "../../hooks";
import { MOCK_IMAGES } from "../../utils";
import { mockImage, mockImageBlur } from "../../assets";

import styles from "./styles.module.scss";

export const About = () => {
  const { data, isFetching, isFetched } = useCustomGetQuery({
    queryKey: "random",
  });

  return (
    <>
      <div className={styles.carouselWrapper}>
        <ResponsiveLazyImage
          id={"0"}
          src={mockImage}
          placeholderSrc={mockImageBlur}
        />
      </div>
      <div className="bleedSideways">
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <article>
              <div className={styles.rightImage}>
                <ResponsiveLazyImage
                  id={"0"}
                  width={345}
                  height={400}
                  src={mockImage}
                  placeholderSrc={mockImageBlur}
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
                  width={345}
                  height={400}
                  src={mockImage}
                  placeholderSrc={mockImageBlur}
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
