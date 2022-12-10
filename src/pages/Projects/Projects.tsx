import React, { useRef, useState } from "react";

import {
  ResponsiveVideoPlayer,
  Typography,
  Modal,
  Carousel,
} from "../../components";

import styles from "./styles.module.scss";
import { addClassName, MOCK_IMAGES } from "../../utils";

export const Projects = () => {
  const modalRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<string>("none");

  const handleSelectProject = async (path: string) => {
    /* setSelectedProject(path); */
    modalRef?.current?.openModal();
  };

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
          {MOCK_IMAGES &&
            MOCK_IMAGES.map((image) => (
              <button
                /* key={image.name} */
                className={styles.picture}
                onClick={() => handleSelectProject("image.name")}
              >
                <img
                  src={image.src}
                  /* id={image.name} */
                  className={styles.image}
                  /* onLoad={() => addClassName(image.name, styles.easeLoad)} */
                  width={392}
                  height={320}
                  /*  alt={image.prefix || image.name} */
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
