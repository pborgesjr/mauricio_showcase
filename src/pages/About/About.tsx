import React from "react";
import { Carousel, Image } from "../../components";
import { useCustomQuery } from "../../hooks";
import { addClassName } from "../../utils";

import styles from "./styles.module.scss";

export const About = () => {
  const { data: aboutImageList, isFetching: isFetchingAboutImageList } =
    useCustomQuery("about");
  const { data: profileImageList, isFetching: isFetchingProfileImageList } =
    useCustomQuery("profile");

  return (
    <>
      <div className={styles.carouselWrapper}>
        <Carousel
          infiniteLoop
          fullWidth
          autoPlay
          showArrows={false}
          interval={11000}
          transitionTime={5000}
          images={aboutImageList}
          isLoading={isFetchingAboutImageList}
        />
      </div>
      <div className="bleedSideways">
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <article>
              <Image
                width={345}
                height={400}
                isLoading={isFetchingProfileImageList}
                src={profileImageList?.[0].url}
                id={"0"}
                className={`${styles.image} ${styles.rightImage}`}
                onLoad={() => addClassName("0", styles.easeLoad)}
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
              <Image
                width={345}
                height={400}
                isLoading={isFetchingProfileImageList}
                src={profileImageList?.[1].url}
                id={"1"}
                className={`${styles.image} ${styles.leftImage}`}
                onLoad={() => addClassName("1", styles.easeLoad)}
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
