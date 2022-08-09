import React from "react";

import { ResponsiveVideoPlayer, Typography } from "../../components";

import styles from "./styles.module.scss";
import { useFetch } from "../../hooks";

export const Projects = () => {
  const categoriesImageList = useFetch("projetos");

  return (
    <div>
      <div className={styles.topVideoWrapper}>
        <ResponsiveVideoPlayer
          url="https://www.youtube.com/watch?v=pfaM4c3006k&ab_channel=3DigitStudio"
          muted
          playing={false}
          controls={false}
          volume={0}
          loop
          containerStyles={styles.frozenPlayer}
        />
      </div>

      <div className={styles.imageList}>
        {categoriesImageList.map((image) => (
          <div key={image.name} className={styles.picture}>
            <img
              src={image.url}
              width={570}
              height={320}
              alt={image.prefix || image.name}
              loading="lazy"
            />
            <Typography
              text={image.name}
              type="body"
              customContainerStyles={styles.captionWrapper}
            />
          </div>
        ))}
      </div>

      <div className={styles.bottomVideoWrapper}>
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
