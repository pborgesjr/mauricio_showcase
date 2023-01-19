import React, { useEffect, useRef, useState } from "react";

import {
  ResponsiveVideoPlayer,
  Typography,
  Modal,
  Carousel,
  ResponsiveLazyImage,
} from "../../components";

import styles from "./styles.module.scss";
import { addClassName, imageSrcBuilder, MOCK_IMAGES } from "../../utils";
import { useCustomGetQuery } from "../../hooks";

export const Projects = () => {
  const modalRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<string>("none");

  const handleSelectProject = async (path: string) => {
    /* setSelectedProject(path); */
    modalRef?.current?.openModal();
  };

  const { data, isFetching, isFetched, isSuccess } = useCustomGetQuery({
    queryKey: "random",
    baseURL: "http://localhost:3333/images",
  });

  return (
    <>
      <div className={styles.topVideoWrapper}>
        <ResponsiveVideoPlayer
          url="https://www.youtube.com/watch?v=pfaM4c3006k&ab_channel=3DigitStudio"
          muted
          playing={true}
          controls={false}
          width={1280}
          height={720}
          volume={0}
          loop={true}
          containerStyles={styles.frozenPlayer}
        />
      </div>

      <div className="bleedSideways">
        <div className={styles.imageList}>
          {isSuccess &&
            data &&
            data.data.results.map((image) => (
              <button
                key={image.id}
                className={styles.picture}
                onClick={() => handleSelectProject("image.name")}
              >
                <ResponsiveLazyImage
                  height="100%"
                  width="100%"
                  hasFinished={isFetched && !isFetching}
                  blurHash={image.blur_hash}
                  src={image.urls.regular} // use normal <img> attributes as props]
                  srcSet={imageSrcBuilder(image.urls.raw).srcSet}
                />
                <Typography
                  text={"image.name"}
                  type="body"
                  customContainerStyles={styles.captionWrapper}
                />
              </button>
            ))}
        </div>
      </div>
      <div className={styles.bottomVideoWrapper}>
        <ResponsiveVideoPlayer
          url="https://www.youtube.com/watch?v=pfaM4c3006k&ab_channel=3DigitStudio"
          muted
          width={1280}
          height={720}
          playing={false}
          volume={0}
          loop
        />
      </div>

      <Modal ref={modalRef}>
        {/**TODO: substituir MOCK_IMAGES e hasFinished */}
        <Carousel images={MOCK_IMAGES} hasFinished={false} />
      </Modal>
    </>
  );
};
