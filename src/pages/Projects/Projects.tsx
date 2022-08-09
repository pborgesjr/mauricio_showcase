import React, { useRef, useState } from "react";

import {
  Modal,
  ResponsiveVideoPlayer,
  Slider,
  Typography,
} from "../../components";

import styles from "./styles.module.scss";
import { useFetch } from "../../hooks";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string>();

  const modalRef = useRef(null);

  const handleSelectProject = (path: string) => {
    setSelectedProject(path);
    modalRef?.current?.openModal();
  };

  const categoriesImageList = useFetch("projetos");
  const selectedProjectImages = useFetch(selectedProject);

  return (
    <>
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
          <button
            key={image.name}
            className={styles.pictureButton}
            onClick={() => handleSelectProject(image.name)}
          >
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
          </button>
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
      <Modal ref={modalRef}>
        <Slider images={selectedProjectImages} />
      </Modal>
    </>
  );
};
