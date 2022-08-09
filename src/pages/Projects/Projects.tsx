import React from "react";
import Carousel from "react-elastic-carousel";

import { big_image } from "../../assets";
import { ResponsiveVideoPlayer } from "../../components";

import styles from "./styles.module.scss";
import { useFetch } from "../../hooks";

export const Projects = () => {
  const showCaseImageList = useFetch("showcase");
  const categoriesImageList = useFetch("categories");

  return (
    <div className={styles.main}>
      <div style={{ marginLeft: "170px", marginBottom: "-100px" }}>
        <ResponsiveVideoPlayer
          url="https://www.youtube.com/watch?v=pfaM4c3006k&ab_channel=3DigitStudio"
          muted
          playing={true}
          controls={false}
          volume={0}
          loop
          containerStyles={styles.frozenPlayer}
        />
      </div>

      <div className={styles.imageList}>
        {categoriesImageList.map((image) => (
          <div key={image.name}>
            <img
              src={image.url}
              width={1280}
              height={720}
              alt={image.prefix || image.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className={styles.videoWrapper}>
        <ResponsiveVideoPlayer
          url="https://www.youtube.com/watch?v=pfaM4c3006k&ab_channel=3DigitStudio"
          muted
          playing={false}
          volume={0}
          loop
        />
      </div>
    </div>
  );
};
