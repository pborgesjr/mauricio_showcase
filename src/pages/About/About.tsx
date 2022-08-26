import React from "react";
import { big_image } from "../../assets";
import { Carousel } from "../../components";
import { useFetch } from "../../hooks";

import styles from "./styles.module.scss";

export const About = () => {
  const addClassName = (id: string) => {
    document.getElementById(id)?.classList.add(styles.easeLoad);
  };

  const { imageList, isLoading } = useFetch("about");

  return (
    <>
      <div className={styles.carouselWrapper}>
        <Carousel
          infiniteLoop
          autoPlay
          showArrows={false}
          interval={11000}
          transitionTime={5000}
          images={imageList}
          isLoading={isLoading}
        />
      </div>
      <div className="bleedSideways">
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <article>
              <img
                src={big_image}
                id={"1"}
                className={`${styles.image} ${styles.rightImage}`}
                width={345}
                onLoad={() => addClassName("1")}
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
                src={big_image}
                id={"2"}
                onLoad={() => addClassName("2")}
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
