import React from "react";
import { Carousel } from "../../components";
import { useCustomQuery } from "../../hooks";

import styles from "./styles.module.scss";

export const About = () => {
  const addClassName = (id: string) => {
    document.getElementById(id)?.classList.add(styles.easeLoad);
  };

  const { data: aboutImageList, isFetching: isFetchingAboutImageList } =
    useCustomQuery("about");
  const { data: profileImageList, isFetching: isFetchingProfileImageList } =
    useCustomQuery("profile");

  return (
    <>
      <div className={styles.carouselWrapper}>
        <Carousel
          infiniteLoop
          autoPlay
          showArrows={false}
          interval={11000}
          transitionTime={5000}
          //TODO: fix images type to accept undefined values aswell
          images={aboutImageList}
          isLoading={isFetchingAboutImageList}
        />
      </div>
      <div className="bleedSideways">
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <article>
              <img
                src={profileImageList?.[0].url}
                id={"0"}
                className={`${styles.image} ${styles.rightImage}`}
                width={345}
                onLoad={() => addClassName("0")}
                height={400}
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
              <img
                src={profileImageList?.[1].url}
                id={"1"}
                onLoad={() => addClassName("1")}
                className={`${styles.image} ${styles.leftImage}`}
                width={345}
                height={400}
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
                nonummy nibh euismod tincidunt ut laoreet dolore.
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
